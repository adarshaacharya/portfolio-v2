---
id: 00
title: 'Auto Generate Social Cards on your Website'
author: Aadarsha Acharya
slug: auto-generate-social-cards
description: 'Learn how to automate the process of generating the dynamic social media cards for website pages and blog posts.'
tags: ['react', 'cards', 'gatsby']
date: 2020-09-25
---

So, few months back I was building my [portfolio site](http://adarshaacharya.com.np/) which you are in right now. Almost everything was completed, integrated blog, added some SEO stuffs _(although I'm very bad at it).😳_ I was checking preview of my site on twitter I notice that preview wasn't that good — it was just a blank link with some meta-description. I used to think Twitter would automatically generate social cards for my site 🤪.

I used to see [dev.to](https://dev.to/) articles shared quite often on social media, which previewed social card with author name, title, social media links, neat background with focused title.

Hmmm.. then I started looking at some Gatsby plugins 🖱️, I found some good ones but I didn't really like them tbh. They require a lot of configuration which I didn't want to do. I was searching for the plugin with minimum configuraion, setup one time and leave it for rest of my life ! 🚀🔥

I bumped into this [awesome article](https://www.learnwithjason.dev/blog/auto-generate-social-image/) where Jason describes How to generate social image using Cloudinary. Luckily he created npm package [get-share-image](https://www.npmjs.com/package/@jlengstorf/get-share-image) so I don't have to write everything from scratch.So, in this article I wanna share my experience how I integrate it in my site especially where I have to address two big things :

- Generate social cards for website pages like home, contact.
- Generate social cards for blog pages that means I have to generate title dynamically for each pages.

## Before we start

Before we get started we need to setup just few things:

> 🚨 Signup for Cloudinary account [with this link](https://jason.af/cloudinary). — It's absoultely free, and using affiliated link will also help creator of package.

We are going to use package [`get-share-image`](https://www.npmjs.com/package/@jlengstorf/get-share-image) to generate the social cards using Cloudinary API.

## Installation

First let's install the required packages.

```bash
# install using npm
npm install --save @jlengstorf/get-share-image

# install using yarn
yarn add @jlengstorf/get-share-image
```

You should also install [react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/#install) as we will be injecting cards as Seo using this plugin.

> We will be using Gatsby site as the example in this project you can use it with CRA or in Next.js site too.
> You can see the the example used in [this site source code](https://github.com/adarshaacharya/adarshaacharya.com.np/blob/master/src/components/Seo/Seo.js) and follow along.

---

## Usage

Now you must have the cloudinary name which is the username you entered while creating account. Check that by going to [console of cloudinary account](https://cloudinary.com/console) . I prefer to put it as env variables but there is no harm in exposing to the user.

Now go to media library section, create directory named `portfolio` and upload the cover photo and name it `website-card` _(convention)_. You can use the same photo for blog too but we are going to upload next one with and name it `blog-card` _(convention)_.

My cover photo looks something like this : 👇
![Website Card](website-card.png)

I recommend you to put much cover photo as blank as possible with some social link so that there will be ample space for text.

---

### Social Card for Website Pages

In the file where you put all your SEO objects *(commonly Seo.js)*import the hooks provided by package and pass object as parameter as below.
At first we are going to create social image for overall website so,

```js
import getShareImage from '@jlengstorf/get-share-image';

const socialImage = getShareImage({
  title: 'Aadarsha Acharya',

  cloudName: 'YOUR_CLOUDINARY_NAME',

  imagePublicID: 'portfolio/website-card',

  font: 'futura',

  textColor: '232129',
});
```

It will return the URL of website-card from cloudinary for the website pages.

You can modify and add the above properties by checking the [options in the docs](https://github.com/jlengstorf/get-share-image#options) , I've added a bit more in my site [check source code here](https://github.com/adarshaacharya/adarshaacharya.com.np/blob/c229d6341ae76d0c49b5cd6e969640aee44e799c/src/components/Seo/Seo.js#L15).

## Social Card for Blog Post

For individual blog post we are going to create another variable to store the url for the blog-post .Lets write code for that too.

```js
const socialImage = getShareImage({
  title: metaTitle,

  tagline: metaKeywords.map(tag => `#${tag}`).join(' '),

  cloudName: 'YOUR_CLOUDINARY_NAME',

  imagePublicID: 'portfolio/blog-card',

  font: 'futura',

  textColor: '232129',
});
```

You can modify and add the above properties by checking the [options in the docs](https://github.com/jlengstorf/get-share-image#options) , I've added a bit more in my site check [source code here](https://github.com/adarshaacharya/adarshaacharya.com.np/blob/c229d6341ae76d0c49b5cd6e969640aee44e799c/src/components/Seo/Seo.js#L31).

> You have notice two major object properties in above code that's title and tagline. What's that ? 🤔
> These are dynamically generated tags & title for each blog post. Honestly, I've to make new post regarding SEO using Helmet which isn't possible in this post. You can check [source code](https://github.com/adarshaacharya/adarshaacharya.com.np/blob/c229d6341ae76d0c49b5cd6e969640aee44e799c/src/components/Seo/Seo.js) I'm pretty sure you will get it. 🧠

---

## Rendering Cards Conditionally

Pass `isBlogPost={true}` or `isBlogPost={false}` as props to SEO component from every component that's using `Seo.js`.

Inside `Seo` functional component check the below condition to choose which card to use between blogPostCard or websiteCard:

```js
const socialImage = isBlogPost ? blogPostCard : websiteCard;
```

---

## Almost done

Now use it everywhere you can 😹 😹 _(joking)_. Pass the following props in the Helmet component.

```jsx
<Helmet
  meta={[
    {
      name: `image`,
      content: socialImage,
    },
    {
      property: `og:image`,
      content: socialImage,
    },
    {
      name: 'twitter:image',
      content: socialImage,
    },
  ]}
/>
```

This will inject the card images as the content in meta tags... we are done ! 🤙

Test the above work by deploying the site in production environment _( this won't work in dev environment)._

---

## Adding more features

You might encounter some problems _yeah, I also felt same_, feel free to drop comment if you face any issue. I will be happy to help you.

Also, learn by reading source code, docs. Check below resources & source code of production site using this package to explore more and customizing it.

**🔥 Docs :**

- https://github.com/jlengstorf/get-share-image

**🔥 Production sites :**

- [learnwithjason.dev source code](https://github.com/jlengstorf/learnwithjason.dev)

- [adarshaacharya.com.np source code](https://github.com/adarshaacharya/adarshaacharya.com.np)

That's it 👍 Please give feedback to the blog. You can always [send PR](https://github.com/adarshaacharya/adarshaacharya.com.np/edit/master/content/posts/00-auto-generate-social-card/index.md) if you find any error/typo in blog. Join my newsletter and I’ll share what I’ve learned about building modern web apps right into your mail box.
