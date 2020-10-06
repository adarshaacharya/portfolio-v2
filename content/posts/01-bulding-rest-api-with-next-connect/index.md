---
id: 01
title: 'Building Rest API In Next.js using next-connect'
author: Aadarsha Acharya
slug: building-rest-api-with-next-connect
description: 'Use next-connect package to create Express js like routing in Next.js.'
tags: ['nextjs', 'restapi', 'react']
date: 2020-10-06
---

Next.js is probably the best thing happened to the React community. Features like SSG & SSR, File system routing , automatic code splitting that comes out of box which helps in building features-enriched web application. 💰

But the thing that hype me so about is that you can build full stack solution only using Next. 🤯 No need of [Express](http://expressjs.com/) server or any other backend solutions, you can build every thing within `Next.js`. It provides the straight forward solution to build your API routes with zero-config. 😲

Tbh, Next.js has pretty solid [docs about api-routes](https://nextjs.org/docs/api-routes/introduction) but the solution isn't quite clean for larger apps. Here I'm going to describe the better & flexible solution to make the REST API.

<video src="monkey.mp4" width="700" height="270" autoplay loop></video>

For this tutorial, I'm going to use the basic boilerplate provided by Next.js.
It sets up `nextjs-blog` directory with typescript configuration. Again, this is totally optional, you can just start with your current project or you can grab any boilerplate that uses javascript from next docs. 🗒️

---

### Clone Starter Repo

```bash
git clone https://github.com/vercel/next-learn-starter/tree/master/typescript-final
```

We are going to use `next-connect` — a tiny npm package which provides method for routing and middleware for [Next.js](https://nextjs.org/).

---

### Installation

```bash
npm install next-connect

// or

yarn add next-connect
```

---

### What we are building 🔨

We are building four API end points that perform basic operations `GET`, `PUT`, `POST`, `DELETE`. For sake of simplicity, I'm just going to display the random text without any business logic 🧠, but you can take this as reference for building end points for larger apps with asynchronous operation.

Inside `pages` directory create directory named `api` i.e. _pages/api._

> 🚨 **Note:**
> Since Next.js uses file-system routing, naming convention is important.

Now create a folder named `todos` inside `api` directory and create file called `index.ts`.
So, we can fetch the data in `getServerSideProps()` as `/api/todos`.

---

### Usage

Inside `/api/todos/index.ts` let's create the endpoints.

```tsx
	import { NextApiReques, NextApiResponse } from 'next';
	import  nc  from  'next-connect';

	const handler = nc()
		.get((_: NextApiRequest, res: NextApiResponse) => {
			res.json({ msg : "Get Todos" });
		})
		.post((_: NextApiRequest, res: NextApiResponse) => {
			res.json({ msg: "Todo created" });
		});
		.put((_: NextApiRequest, res: NextApiResponse) => {
			res.json({ msg: "Todo edited" });
		});
		.delete((_: NextApiRequest, res: NextApiResponse) => {
			res.json({ msg: "Todo deleted" });
		});

	export default handler;

```

Here we are just creating four endpoint for `GET` , `PUT`, `POST` and `DELETE` request.

---

### Using getServerSideProps 👷

For using the above data in **pages** we will use _getServerSideProps_ method provided by Next.js that , where Next.js will pre-render the page on each request using the data returned by `getServerSideProps.`

```tsx
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.END_POINT}/api/todos/`);
  const { data } = await res.json();
  return {
    props: { todos: data },
  };
};
```

It will get the _todos_ data as props in the respective component.

---

### That's it ! ⚡

We've created basic Express.js like routing in Next.js. For more understanding about `next-connect` check out the [official docs](https://www.npmjs.com/package/next-connect). Also for usage with database check [this example](https://github.com/hoangvvo/nextjs-mongodb-app).
