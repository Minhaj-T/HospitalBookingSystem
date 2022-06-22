import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";



//Utilities and Components
// const Loader = React.lazy(() => import("./components/Loader/Loader"));
import Spinner from "./components/Spinner/Spinner";
// Pages

//Homepage
const HomePage = React.lazy(() => import("./pages/LandingPage/Landingpage"));
const Login = React.lazy(()=>import('./components/Login/Login'))

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Suspense>
      <ToastContainer/>
    </>
  );
}

export default App;
