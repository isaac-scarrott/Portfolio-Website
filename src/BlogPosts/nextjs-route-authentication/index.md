---
path: '/blog/nextjs-route-auth'
title: 'Next.js Server-Side Route Authentication Using Cookies'
createdTime: '2020-04-04T15:45:36.496Z'
featuredImage: './thumbnail.png'
tags: 'javascript,nextjs,auth'
---

<p>
  <a href="https://nextjs.org/">Next.js</a> (in my opinion) is the best React
  framework that is currently released, which makes creating &#x27;production
  level&#x27; React applications stupidly easy. Authenticating routes is
  something that I see talked about lots, however (at least on the first page of
  Google) I haven&#x27;t seen a google post about all the different methods of
  authenticating Next.js routes. In my opinion, the best method of
  authenticating Next.js routes is on the server-side using the
  <a
    href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering"
    >getServerSideProps</a
  >
  method for when you are using server-side rendering or
  <a
    href="https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation"
    >getStaticProps</a
  >
  for when using static site generation. Please also note that during this post
  I will only refer to getServerSideProps, however this is interchangeable with
  getStaticProps
</p>

<p>
  The getServerSideProps function is a function that can be exported on any file
  inside the page directory of a Next.js project and pretty much does what it
  says on the tin. It will allow you to pass any props from the server-side and
  pre-render the page using any of the props that are returned from the
  getServerSideProps function. This allows for unbelievably fast load times and
  also you can complete any logic before the user has even received any data,
  therefore allowing us to even more securely (compared to frontend validation)
  authenticate any user that comes onto the site using something like cookies by
  forwarding them onto the backend from the user page request. In this example,
  I will be using Next.js (obviously) and
  <a href="https://www.npmjs.com/package/graphql-request">graphql-request</a>
  for the data fetching. However you can use any node compatible fetching
  library (I&#x27;ll provide examples for
  <a href="https://www.axios.com/">Axios</a> and
  <a href="https://www.npmjs.com/package/node-fetch">node-fetch</a>).
</p>

<p>
  The most basic example is for a route that you just want to do authentication
  on the server-side and not get any additional props. To do this you create a
  function that looks like the following in a file in your pages directory.
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) => {
  // code incoming...
};
```

<p>
  Next.js will automatically recognise that you&#x27;ve got a named export
  called getServerSideProps on your page and will run this function on the
  server-side. The context argument is an object that has many keys such as req
  which is the HTTP IncomingMessage object, res which is the HTTP response
  object and many other useful things that can be seen
  <a
    href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering"
    >here</a
  >. However we want to forward the cookies onto the authentication service so.
  we&#x27;re concerned with what is in the req object (the HTTP IncomingMessage
  object) as this will contain the request headers and therefore any cookies
  that are on it. To get the cookies would look something like following.
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) => {
  // get the cookies from the headers in the request object
  const reqCookies = context.req.headers && context.req.headers.cookie;
};
```

<p>
  Now we simply make a request to the backend with the cookies set in the
  headers using your favourite Node HTTP library.
</p>
<p>
  <strong>Using graphql-request</strong>
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) => {
  const reqCookies = context.req.headers && context.req.headers.cookie;

  // The only way to set headers in graphql-request is by creating a GraphQLClient Class
  const client = new GraphQLClient(`${process.env.BACKEND_URL}/graphql`, {
    headers: { cookie: reqCookies },
  });

  // Send the request
  await client.request(`query IsAuthenticated { isAuthenticated }`);
};
```

<p>
  <strong>Using Axios</strong>
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) =&gt; {
  const reqCookies = context.req.headers &amp;&amp; context.req.headers.cookie

  // send the request with the cookies
  await axios.get(`${process.env.BACKEND_URL}/auth`, {headers: {Cookie: reqCookies}})
}
```

<p>
  <strong>Using node-fetch</strong>
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) =&gt; {
  const reqCookies = context.req.headers &amp;&amp; context.req.headers.cookie

  // send the request with the cookies
  await fetch(`${process.env.BACKEND_URL}/auth`, {headers: {cookie: reqCookies}})
}
```

<p>
  However there is one more thing. What do you do when the user is not
  authenticated? I like to direct them to a login page by wrapping the http
  request to the backend in a try catch and using the res object in the context
  to redirect as follows. (I&#x27;m going to use the Axios example as it&#x27;s
  probably the most popular and least code).
</p>

```javascript
// some-protected-route.js
export const getServerSideProps = async (context) =&gt; {
  try {
    const reqCookies = context.req.headers &amp;&amp; context.req.headers.cookie

    const user = await axios.get(
      `${process.env.BACKEND_URL}/auth`,
      {headers: {Cookie: reqCookies}}
    )

   // return  initial props with user object (user obj optional)
    return {
      props: {user}
    }
  } catch {
    // Redirect to the login page
    context.res.writeHead(303, { Location: &#x27;/login&#x27; })
    context.res.end()

   // return no initial props
    return {
      props: {}
    }

  }
}
```

<p>
  You&#x27;ll also notice that I have returned an object with props and inside
  the props I either have a user object or nothing. This isn&#x27;t essential
  however the getServerSideProps route does expect that you return an object
  with a props key that has an object value inside of it.
</p>

<p>
  Now whenever a user isn&#x27;t authenticated they will simply be redirected to
  the login page before they even receive any page data. On my site in
  production the user is redirected to the login page in 100ms, whereas if you
  was to do the authentication on the client side the HTML would have to be
  rendered by the server etc and could be multiple times slower.
</p>

<p>
  I hope someone found this useful and as always any feedback or questions leave
  them in the comments and I&#x27;ll be sure to get back to you!
</p>
