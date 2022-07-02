import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/User/Signup/Signup';

//Utilities and Components
// const Loader = React.lazy(() => import("./components/Loader/Loader"));
import Spinner from './components/User/Spinner/Spinner';


// Pages

//Homepage
const HomePage = React.lazy(() =>
  import('./pages/user/LandingPage/Landingpage')
);
const Login = React.lazy(() => import('./components/User/Login/Login'));
const SignupPage2 = React.lazy(() =>
  import('./components/User/Signup/SignupPage2')
);
const SignupPage3 = React.lazy(() =>
  import('./components/User/Signup/SignupPage3')
);
const SignupPage4 = React.lazy(() =>
  import('./components/User/Signup/SignupPage4')
);

// Admin
const AdminLogin = React.lazy(() =>
  import('./components/Admin/AdminLogni/AdminLogin')
);
const AdminDashboard = React.lazy(() =>
  import('./pages/Admin/admindashboard/adminDashboard')
);
const List = React.lazy(() => import('./pages/Admin/Lists/List'));
const AddDoctor = React.lazy(() => import('./pages/Admin/AddDoctor/AddDoctor'));
const Specialties = React.lazy(() => import('./pages/Admin/Specialties/Specialties'));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signup2" element={<SignupPage2 />} />
            <Route exact path="/signup3" element={<SignupPage3 />} />
            <Route exact path="/signup4" element={<SignupPage4 />} />
            <Route exact path="/adminLogin" element={<AdminLogin />} />
            {/* <Route exact path="/adminDashboard" element={<AdminDashboard />} /> */}

            <Route exact path="/adminDashboard">
              <Route path="" element={<AdminDashboard />} />
              <Route path="users" element={<List />} />
              <Route path="add-doctor" element={<AddDoctor />} />
              <Route path="specialties" element={<Specialties />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
