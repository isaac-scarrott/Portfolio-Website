import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function HelmetWrapper() {
  const { site } = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          authorName
          description
          image
          siteLanguage
          siteLocale
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Primary Meta Tags */}
      <title defer={false}>{site.siteMetadata.title}</title>
      <meta name="title" content={site.siteMetadata.title} />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta
        property="og:image"
        content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta property="twitter:title" content={site.siteMetadata.title} />
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta
        property="twitter:image"
        content={`${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`}
      />
    </Helmet>
  );
}
