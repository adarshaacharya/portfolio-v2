---
id: 07
title: 'Role Based Authorization with React Router v6 and Typescript'
author: Aadarsha Acharya
slug: role-based-auth-with-react-router-v6
description: 'Building auth route in react router v6 with role based authorization.'
tags: ['react-router', 'typescript', 'redux', 'react']
date: 2021-07-01
---

<img  src="banner.png" alt="react router banner" />

### Background

React router has almost become de-facto way of setting up routing in React application and it has really come long way with exciting features in each iteration.

Although react-router v6.0.0 is in [alpha release](https://github.com/ReactTraining/react-router/releases/tag/v6.0.0-alpha.3) right now, I've already started using it. Although it isn't final release, I don't see any breaking changes as framework like Remix are already using it.

I love how composable the new api is and best thing is it's tiny/simple api structure
which makes api more memorizable so, I don't need to switch to docs everytime.

You can read more features on [this blog post](https://reacttraining.com/blog/react-router-v6-pre/) by [Michael Jackson](https://twitter.com/mjackson).

Talking about building Private Route component it is the way by which we only allow the authenticated user to view the partuicular page by checking the user state, or the roles given to the user in the state.

### Before v6

Before react router v6 the common way to build the `PrivateRoute` component by utilizing the [render-props](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#render-func) pattern. If you are building apps with react this might be the standard way of creating PrivateRoute/ AuthRoute pattern :

```tsx
// PrivateRoute.tsx
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface Props extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<Props> = props => {
  const auth = useSelector(state => state.auth); // get auth state

  const { isAuthenticated, loading } = auth;
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
```

### React router v6

Although there wasn't anything wrong with that approach but something was missing with it, may be render props pattern looks quite unusual after moving to hooks based pattern??, I don't know.....

Let's see how we can modify above component and how easy it is to build the Private Route component:

```tsx
// PrivateRoute.tsx in v6
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  const { isAuthenticated, loading } = useSelector(state => state.auth);

  if (loading) {
    return <p>Checking authenticaton..</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
```

I hope looking at the code you may have already understand it, it is as simple. You just create create a component named `PrivateRoute` which receives the children prop. Inside the `PrivateRoute` component we check if user if logged in or not using `isAuthenticated` state that we've created in`react-redux`store, but you can use any state maangement solution that may be contexts, or your custom hooks to check the user auth state. Now, if user `isAuthenticated === false` Navigate to `/login` path else render the component inside it. Btw we are checking `loading` state so that user doesn't see blank screen while checking authentication.

Everything is simple except you amy be confused on props like element or Navigate that doesn't used to be there on v5. Check this [blog](https://reactrouter.com/docs/en/v6/upgrading/v5) about new api changes.

#### How to use it ?

Go to your App or the component where you manage your routes and use PrivateRoute component instead of normal `Route` component.

```tsx
// App.tsx

import { Route, Routes } from 'react-router-dom';
import { CreateAccount, Dashboard, Home, Login, NotFound } from 'sections';
import PrivateRoute from './PrivateRoute';

/**
 * Top level application router
 *
 * @returns {Component}
 */
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      {/* Private Route */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <StudentDashboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

Here, you simply as protect the `Dashboard` by wrapping the component with `PrivateRoute` inside of element.

Don't forget to wrap your `App` component with BrowserRouter in your `index.tsx` file.

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
```

If you only want protected route without role based authorization then that's it.

But... what about cehecking the role of user and redirecting to particular dashboard. Then welcome to second part of blog.

### Role based Authentication

First create file named `roles.ts` where we can define the enum of roles and can use it everywhere.

```ts
export enum ROLE {
  Admin = 'Admin',
  User = 'User',
}
```

Secondly, lets modify our `PrivateRoute` component which checks what type of user it is.

```tsx
// PrivateRoute.tsx

import { ROLE } from './roles';
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({
  children,
  roles,
}: {
  children: JSX.Element;
  roles: Array<Role>;
}) => {
  let location = useLocation();
  const { isAuthenticated, user, loading } = useSelector(state => state.auth);

  if (loading) {
    return <p className="container">Checking auth..</p>;
  }

  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <AccessDenied />; // build your won access denied page (sth like 404)
  }

  return children;
};
```

Everything is same as above, except the props we receive :

- `roles` : takes the array of roles which user role should be authorized.

In PrivateRoute we check the `user` from redux store which has roles within it. Then we check
passed `roles` contains/includes the `user.role` and store it in `requiredRoles` variable.

Now we have three points to consider :

- If user isn't authenticated redirected to `login` page.

- If user is authenticated but doesn't have required role specified then render `AccessDenied` page.

- Else render the children component.

Note : We have to create `AccessDenied` page manually to show if the user isn't authorized to view certain page. Example, student trying to see teacher dashboard and so on. I've created one Access Denied page using Ant Design[you can check here](https://github.com/adarshaacharya/MentorLabs/blob/main/client/src/sections/AccessDenied/index.tsx).

In App component we pass the required roles for each component:

```tsx
import { ROLE } from './roles';
import { Route, Routes } from 'react-router-dom';
import {
  CreateAccount,
  Home,
  Login,
  NotFound,
  AdminDashboard,
  UserDashboard,
} from 'sections';
import PrivateRoute from './PrivateRoute';

/**
 * Top level application router
 *
 * @returns {Component}
 */
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="login" element={<Login />} />
      <Route
        path="admin-dashboard"
        element={
          <AuthRoute roles={[Role.Admin]}>
            <AdminDashboard />
          </AuthRoute>
        }
      />
      <Route
        path="user-dashboard"
        element={
          <AuthRoute roles={[Role.User]}>
            <UserDashboard />
          </AuthRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

Now user isn't only authenticated but also they are authorized with right to view that particular page that too using new react-router v6. 👍

Here's the simple example of how to leverage react router v6 while creating the authenticated routes. If you want example on big project then checkout my project[MentorLabs](https://github.com/adarshaacharya/MentorLabs). THe project structure may be different from the above example but can be good example how to leverage it in fairly large project.

Also, if you face any problem in setting up above feature on your project comment down below or you can directly message me on twiiter via : [@aadarshatweets](https://twitter.com/aadarshatweets)

Thanks !

Also, if you see any kind of mistake/typo on above post [edit it on GitHub](https://github.com/adarshaacharya/adarshaacharya.com.np/edit/master/content/posts/07-role-based-authorization-react-router-v6/index.md).

### More resources:

- [React Router Authentication](https://reactrouter.com/docs/en/v6/examples/auth)
- [Michael Jackson on React Router v6 and Empathy in Open Source
  ](https://dev.to/reactpodcast/85-michael-jackson-on-react-router-v6-and-empathy-in-open-source)
