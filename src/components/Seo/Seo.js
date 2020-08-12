import getShareImage from '@jlengstorf/get-share-image';
import getSiteMetadata from '@lib/get-site-metadata.js';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, author, isBlogPost, slug }) => {
  const data = getSiteMetadata();

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title || data.site.siteMetadata.title;
  const metaAuthor = author || data.site.siteMetadata.author;
  const metaKeywords = keywords || data.site.siteMetadata.keywords;
  const metaUrl = `${data.site.siteMetadata.siteUrl}${slug || ''}`;

  const websiteCard = getShareImage({
    title: 'Aadarsha Acharya',
    tagline: 'http://adarshaacharya.com.np/',
    cloudName: 'rqzwagy7xnx4p34h',
    imagePublicID: 'portfolio/website-card',
    titleFont: 'futura',
    taglineFont: 'futura',
    titleBottomOffset: 330,
    taglineTopOffset: 380,
    taglineFontSize: 38,
    textLeftOffset: 330,
    textColor: '232129',
    taglineColor: '011627',
    titleColor: '362865',
  });

  const blogPostCard = getShareImage({
    title: metaTitle,
    tagline: metaKeywords.map(tag => `#${tag}`).join(' '),
    cloudName: 'rqzwagy7xnx4p34h',
    imagePublicID: 'portfolio/blog-post-card',
    titleFont: 'futura',
    taglineFont: 'futura',
    // titleExtraConfig: 'bold', // optional - set title font weight to bold
    titleBottomOffset: 384,
    taglineTopOffset: 350,
    taglineFontSize: 38,
    textColor: '232129',
    taglineColor: '011627',
    titleColor: '362865',
  });

  const socialImage = isBlogPost ? blogPostCard : websiteCard;

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        // general meta tags
        {
          name: `url`,
          content: metaUrl,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: socialImage,
        },

        // open graph tags
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: `${metaTitle} | Aadarsha Acharya`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: socialImage,
        },

        // twitter cards
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: socialImage,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: `${metaTitle} | Aadarsha Acharya`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
};


export default SEO;
