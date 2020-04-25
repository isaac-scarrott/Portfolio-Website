---
path: '/blog/toggle-prism-theme-at-runtime-in-gatsby'
title: 'Toggle PrismJs Themes At Runtime in Gatsby'
createdTime: '2020-04-19T20:14:06.339Z'
featuredImage: './thumbnail.png'
tags: 'reactjs,react,javascript,prism,gatsby,theme'
---

<p>Gatsby-remark-Prismajs is the most popular Gatsby package to add syntax highlighting to code blocks in markdown files and is the method that I use to embed code blocks in my blog posts. Like many websites I have a dark mode and a light mode that can be toggled on or off at the users discretion. When researching how to toggled this at runtime I couldn't find an answer on how to toggle the theme at runtime in Gatsby. With the only thread I could find was this <a href='https://github.com/gatsbyjs/gatsby/issues/19155'>Github issue on the Gatsby repository</a>.</p>

<p>So in this blog post I am going to show you how I implemented a toggle-able Prisma theme at runtime in Gatsby using styled components and also another method that you could implement it without styled components.</p>

<h2>Using Styled Components</h2>

<p>This is the method I decided to use in my website as I believe it is the cleanest method. This is essentially going to be toggling in a styled component function called [createGlobalStyle](https://styled-components.com/docs/api#createglobalstyle) helper function which will inject the correct CSS to the whole website at runtime.</p>

<p>First find your theme's CSS that you wish to download. A lot of themes can be found <a href='https://github.com/PrismJS/prism-themes'>here</a>. I'm going to choose the <a href='https://github.com/PrismJS/prism-themes/blob/master/themes/prism-duotone-light.css'>duotone-light</a> to use in my dark theme and <a href='https://github.com/PrismJS/prism-themes/blob/master/themes/prism-xonokai.css'>xonokai</a> to use in my light theme so they contrast the background. Create a file for each of these themes in a sensible place in your project.</p>

<p>Once the files have been created, create a new global style component similar to as follows</p>

```javascript
import { createGlobalStyle } from 'styled-components';

export const lightTheme = createGlobalStyle``;

export const darkTheme = createGlobalStyle``;
```

<p>Simply paste the raw css inside the back-ticks. You can see a <a href='https://github.com/isaac-scarrott/Portfolio-Website/blob/master/src/styles/prism-xonokai.js'>full example</a> of how I did it on my repo. Now go into the component where the state is toggled to toggle the theme. This can be anywhere in your project as it is going to be injected as a global style. Import the two themes in a create a function that returns a the correct component based on the state, similar to as follows.</p>

```javascript
import { LightModePrismTheme, DarkModePrismTheme } from '../styles/prismThemes';

function GetPrismTheme(isDarkMode) {
  if (isDarkMode) {
    return <LightModePrismTheme />;
  }

  return <DarkModePrismTheme />;
}
```

<p>Now your code snippets should be styled based on the component you return.</p>

<h2>Modify The Theme's CSS</h2>

<p>Modifying the theme's CSS is my least preferred method, however if you don't currently use styled components in your project there is no point in adding it for the sake of this. This simply works by copying and modifying two or more prisma themes css and wrapping each of them in a descriptive class name and adding the class name to a wrapper of where the code snippets appear.</p>

<p>First find your theme's CSS that you wish to download. A lot of themes can be found <a href='https://github.com/PrismJS/prism-themes'>here</a>. I'm going to choose the <a href='https://github.com/PrismJS/prism-themes/blob/master/themes/prism-duotone-light.css'>duotone-light</a> to use in my dark theme and <a href='https://github.com/PrismJS/prism-themes/blob/master/themes/prism-xonokai.css'>xonokai</a> to use in my light theme so they contrast the background. Create an CSS (or corresponding CSS framework) file to house these styles. Create a class wrapper for each theme. In my case I'm simply going to have a dark or light theme (also if you wrap your element tree in a class depending on the theme you can use that class name).</p>

```css
.dark-mode-prisma {
}

.light-mode-prisma {
}
```

<p>Copy your chosen css into the enclosing tags of the corresponding theme. My example can be seen [here](https://github.com/isaac-scarrott/Portfolio-Website/blob/prisma-css-snippets/src/styles/prismaThemes.css). Now in your elements that wrap any code snippets use state to toggle the className in and out and therefore the corresponding theme.</p>

<h2>Overall Thoughts</h2>

<p>So there are my two solutions to this problem. I prefer the first method using styled components as I believe it is a lot cleaner and easier to manage. I have also just added a comment system to my blog so feel free to leave your ideas on this and any thoughts you have :). Anyway thanks for reading and I hope you found this helpful!</p>
