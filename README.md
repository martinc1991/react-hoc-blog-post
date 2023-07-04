# React HOCs example

This is an example for [this blog post](https://bit90s-blog.vercel.app/posts/react-higher-order-components-with-typescript).
It is a web app making use of higher-order component pattern.

## Getting Started

First, install dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

## About the example

The basic functionality is provided by the `useUserInfo` and `useUserTodos` custom hooks: they use [JSON Placeholder](https://jsonplaceholder.typicode.com/) API to fetch dummy data. The code is pretty self-explanatory.

The most important part of this example is the `withUserInfo` HOC. In it, we use `useUserInfo` hook to fetch the info and inject the results into a new component that is passed as a parameter to the HOC, as explained in the blog post.

There are 3 pages in the app: `/`, `/profile` and `/todos`.

Both `/profile` and `/todos` pages render components enhanced by `withUserInfo`. This way we don't need to repeat the code written inside the HOC in these components and our codebase stay DRY.

Also, in `/todos` page we are using the user info provided by the HOC to fetch the TODOs list from the API.
