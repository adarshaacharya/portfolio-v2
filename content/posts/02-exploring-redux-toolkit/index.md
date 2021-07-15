---
id: 2
title: 'Exploring Redux Toolkit'
author: Aadarsha Acharya
slug: exploring-redux-toolkit
description: 'Learn how to use Redux toolkit - next generation tools for building the apps with react-redux.'
tags: ['redux', 'redux-toolkit', 'react']
date: 2020-11-20
---

I've been using Redux for managing and updating the global state in my React apps for a while. Redux makes way easier for managing the gobal state and automatically implements complex performance optimizations, so that your own component only re-renders when the data it needs has actually changed ; the major complaint about the React-Redux is **Boilerplate**. 🍽️

From configuring store to configuring with redux dev tools and maintaining actions, dispatch and reducers is quite hectic.

To overcome these problems we might choose two solutions :

**1. Stop using REDUX !! ⚠️**

Yes ! you might not even need Redux . There is inbuild Context API with React where we can basically inject the state data into the different components. Honestly, most of the simpler apps doesn't even need redux. You can use library like [react-query](https://react-query.tanstack.com/) for caching data with Context for passing data among components.

**2. Use Redux Toolkit(RTK):**

Redux toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.

Redux Toolkit was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"

It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more. Also, it follows the DUCK 🦆 pattern which has way less of the boiler-plate code.

> 🧠 Redux addons are builtin like Redux DevTools Extension & Redux Thunk in RTK. 🤯🤯

Before heading towards the code part you must have the basic knowledge of Redux terminologies like :

- store
- actions
- reducer
- Provider component

If you haven't already checkout the latest [basic tutorial](https://redux-toolkit.js.org/introduction/quick-start) section in React-Redux docs. They have recently updated it and make fantastics tutorial for getting started with redux.

### Installation

Start with the official Redux+JS template for Create React App, which takes advantage of React Redux's integration with React components.

```bash
npx create-react-app my-app --template redux
```

_or,_

You can add the following packages in existing React application.

```bash
 yarn add redux react-redux @reduxjs/toolkit
```

Here we are going the visualize the basic todo app and demonostrate the redux part of it.

### configureStore()

This API wraps `createStore` to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the `Redux DevTools Extension`. Yep ! you heard it right, it configures Redux dev tools out of box.

```jsx
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

Here we're importing `configureStore()` then
pass the `todoReducer` into the root reducer and configure root reducer to store. We need to call `state.todos` to access all the values in todos.

### createSlice()

<img src="slice.gif" width="480" height="269" />

`creatSlice()` is basically collection of Redux reducer logic and actions for single feature in your app. It automatically creates the action types strings, so no action types need to be created for reducers.

```jsx
// todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: {},
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

It basically takes three things:

- name : A string name for this slice of state. Generated action type constants will use this as a prefix.
- initial State : set the todolist to an empty array
- reducers object

Finally we export the actions and reducer.

### AddTodo Reducer

Basically, it takes the state, action and push the payload into the state.

```jsx
  addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
    },

```

Previously, what we used to do is not mutating the state cuz' state in redux is immutable.
But `Redux Toolkit` uses `Immer` under the hood so we can directly mutate the data. So, here we are directly pushing the data from payload in the todolist.

### useDispatch()

When we call the data in out component we use the hook `useDispatch()`.

I'm just showing the sample code here how to use it.

```jsx
// AddTodo Component
const dispatch = useDispatch();
import { addTodo } from '../../redux/slices/todoSlice';

const handleSubmit = () => {
  dispatch(addTodo(value));
};
```

Here we are using `useDispatch()` hook to dispatch the addTodo action.

Now, we have added the Todo in the state successfully. 🕺

<img src="dance.gif" height="100"  />

### Add other fields to payload

In react if we want to keep the list sync with the state, then we have to add the key to each list. For that we have to add the `prepare callback`.

```jsx
// todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            key: nanoid(),
            value: value,
          },
        };
      },
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

Import `nanoid()` from redux toolkit and add the prepare callback where we pass the key as `nanoid()` and `value` as todo-value.

### useSelector()

If you are familiar with redux hooks then `useSelector()` hooks basically selects the state from store and load it into the component.

```jsx
// TodoList component
import { useSelector } from 'react-redux';

const todoListdata = useSelector(state => state.todos.todoList);

//... map the todoListdata
```

## Fetch Data from an Api

Previously, we have to use the middlewares like `redux-thunk` or `redux-saga` for fetching the data from external api. Redux toolkit simplifies it by using the built in `redux-thunk` unde the hood and using `createAsyncThunk` function.

`createAsyncThunk` is a function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.

`createAsyncThunk` creates three types of actions automatically:

- pending ⏳
- fulfilled ✅
- rejected ❌

```jsx
// todoSlice.js
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  return data;
});
```

Here we use `Axios` to fetch the data and `createAsyncThunk`. `createAsyncThunk` is taking two params :

- **name of action type** : `'todos/fetchTodos'` which appends the three action types (pending, fullfilled & rejected).
- **callback function** which does the async actions and returns the todos data.

### Adding Status and Error to Initial State

We add two `status` state and `error` to the initial state to check if the action is idle and if there is any error in result.

```jsx
// todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/'
  );
  return response.data.todoList;
});

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todoList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.todoList.push(...action.payload);
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

Create async thunk is creating its own actions we need extraReducers as fourth parameter in `createSlice()` which can take those actions and update the state correspondigly. It basically check the status of the state and map the status and error in the state accordingly. If the data is fetched successfully, then push it into todolist.

Now we can check the status of data and map the data in the corresponding component.

That's it ! 👋

Tbh, Redux toolkit seems little bit confusing at first but once you get hands on it it will reducer lot of boiler plate in application.
