import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Home from './views/home'
import Errors from "./views/Errors";
import Candidates from "./views/Candidates";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/candidatos",
    layout: DefaultLayout,
    component: Candidates,
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
];
