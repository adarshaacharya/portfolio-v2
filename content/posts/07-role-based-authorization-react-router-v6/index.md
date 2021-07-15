---
id: 7
title: 'Role Based Authorization with React Router v6 and Typescript'
author: Aadarsha Acharya
slug: role-based-auth-with-react-router-v6
description: 'Building auth route in react router v6 with role based authorization.'
tags: ['react-router', 'typescript', 'redux', 'react']
date: 2021-07-01
---

<img  src="banner.png"    alt="banner" />

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

interface Props {
  element: React.ReactElement;
  path?: string;
}

const PrivateElement<Props> = ({ element }) => {
  let location = useLocation();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if(loading) return <p>Loading.. </p>

  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} />;
};

export const PrivateRoute<Props> = ({ element, ...rest }) => {
  return <Route {...rest} element={<PrivateElement element={element} />} />;
};

export default PrivateRoute;
```

I hope looking at the code you may have already understand it, it is as simple. You just create create a component named `PrivateRoute` which receives the props named element and {...rest} represents the rest of the props so we can pass it into the custom react component we made. In the element props in `<Route />` compoennt we pass the wrapper component named `PrivateElement` which has all the logic which elemnt to render.

Now lets look at the container or wrapper component named `PrivateElement` which recives the `element` props to be rendered if the property satisfies. Here we check if user if logged in or not using `isAuthenticated` state that we created in`react-redux`store, but you can use any state maangement solution that may be contexts, or your custom hooks to check the user auth state. Now, if user `isAuthenticated === true` render the elemnt aka Component we want to render else Navigate to `/login` path.

Everything is simple except you amy be confused on props like element or Navigate that doesn't used to be there on v5. Check this [blog](https://reacttraining.com/blog/react-router-v6-pre/) about new api changes.

#### How to use it ?

Go t you App or the component where you manage your routes and use PrivateRoute component instead of normal `Route` component.

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
      <PrivateRoute path="/dashboard" element={<Dashboard />} /> {/* Private Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

Here, you simply as protect the `Dashboard` by using `PrivateRoute` instead of normal `Route` component.

Don't forget to wrap your `App` component with BrowserRouter in your `index.tsx` file.

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
```

If you only want protected route without role based authorization then that's it.

But... what about cehecking the role of user and redirecting to particular dashboard.

### Role based Authentication

First create file named `roles.ts` where we can define the enum of roles and can use it everywhere.

```ts
export enum ROLE {
	Admin = "Admin",
    User = "User"
```

Secondly, lets modify our `PrivateRoute` component which checks what type of user it is.

```tsx
// PrivateRoute.tsx

import { ROLE } from './roles';
import { useSelector } from 'react-redux';
import { Navigate, Route, useLocation } from 'react-router-dom';

interface Props {
  element: React.ReactElement;
  requiredRoles: Array<ROLE>;
  path?: string;
}

const PrivateElement: React.FC<Props> = ({ element, requiredRoles }) => {
  let location = useLocation();
  const { isAuthenticated, user, loading } = useSelector(state => state.auth);

  if (loading) return <p className="container">Checking auth..</p>;

  const userHasRequiredRole = requiredRoles.includes(user.role);

  return isAuthenticated && userHasRequiredRole ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export const PrivateRoute: React.FC<Props> = ({
  element,
  requiredRoles,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      element={
        <PrivateElement element={element} requiredRoles={requiredRoles} />
      }
    />
  );
};
```

Everything is same as above, except the props we receive :

- `requiredRoles` : takes the array of roles which user role should be authorized.

In PrivateElement we check the `user` from redux store which has roles within it. If the
passed `requiredRoles` contains the `user.role` then render that element, else redirect to `/login` route.

In App component we pass the required roles for each component:

```tsx
import { ROLE } from './roles';
import { Route, Routes } from 'react-router-dom';
import {
  CreateAccount,
  Home,
  Login,
  NotFound,
  Student,
  Teacher,
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
      <PrivateRoute
        path="admin-dashboard"
        element={<Student />}
        requiredRoles={[ROLE.Admin]}
      />
      <PrivateRoute
        path="user-dashboard"
        element={<UserPage />}
        requiredRoles={[ROLE.User]}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
```

Now user isn't only authenticated but also they are authorized with right to view that particular page that too using new react-router v6. 👍

I've been working on exciting side project which requires role based authorization and thought to share how I approach things. If I found anything nteresting I will share it on other posts. If you have any suggestion regarding this approach, feel free to comment down below.

Also, if you face any problem in setting up above feature on your project comment down below or you can directly message me on twiiter via : [@aadarshatweets](https://twitter.com/aadarshatweets)

Thanks !

Also, if you see any kind of mistake/typo on above post [edit it on GitHub](https://github.com/adarshaacharya/adarshaacharya.com.np/edit/master/content/posts/07-role-based-authorization-react-router-v6/index.md).

### More resources:

- [Michael Jackson on React Router v6 and Empathy in Open Source
  ](https://dev.to/reactpodcast/85-michael-jackson-on-react-router-v6-and-empathy-in-open-source)
- [React Router v6 Preview](https://reacttraining.com/blog/react-router-v6-pre/)
