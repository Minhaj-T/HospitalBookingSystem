import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import SignupPage2 from "./components/Signup/SignupPage2";
import SignupPage3 from "./components/Signup/SignupPage3";
import SignupPage4 from "./components/Signup/SignupPage4";


//Utilities and Components
// const Loader = React.lazy(() => import("./components/Loader/Loader"));
import Loader from "./components/Loader/Loader";
// Pages

//Homepage
const HomePage = React.lazy(() => import("./pages/LandingPage/Landingpage"));
const Login = React.lazy(()=>import('./components/Login/Login'))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
