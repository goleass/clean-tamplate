import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// View Components
import Home from './views/home'
import Errors from "./views/Errors";
import Candidates from "./views/Candidates";
import CandidatesAnalysis from "./views/CandidatesAnalysis";
import CandidateInterview from "./views/CandiadatesIterview";

// Route Views
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Home
  },
  {
    path: "/candidatos",
    layout: DefaultLayout,
    component: Candidates,
  },
  {
    path: "/analise-candidatos",
    layout: DefaultLayout,
    component: CandidatesAnalysis
  },
  {
    path: "/entrevista-candidatos",
    layout: DefaultLayout,
    component: CandidateInterview
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
];
