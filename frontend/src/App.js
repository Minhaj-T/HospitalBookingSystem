import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/User/Signup/Signup';

//Utilities and Components
// const Loader = React.lazy(() => import("./components/Loader/Loader"));
import Spinner from './components/User/Spinner/Spinner';


// Pages

//Homepage
const HomePage = React.lazy(() =>import('./pages/user/LandingPage/Landingpage'));
const Login = React.lazy(() => import('./components/User/Login/Login'));
const SignupPage2 = React.lazy(() =>import('./components/User/Signup/SignupPage2'));
const SignupPage3 = React.lazy(() =>import('./components/User/Signup/SignupPage3'));
const SignupPage4 = React.lazy(() =>import('./components/User/Signup/SignupPage4'));

// Admin
const AdminLogin = React.lazy(() =>import('./components/Admin/AdminLogni/AdminLogin'));
const Layout = React.lazy(()=> import("./pages/Admin/Layout"));
const AdminDashboard = React.lazy(() =>import('./pages/Admin/admindashboard/adminDashboard'));
const List = React.lazy(() => import('./pages/Admin/Lists/List'));
const AddDoctor = React.lazy(() => import('./pages/Admin/AddDoctor/AddDoctor'));
const Specialties = React.lazy(() => import('./pages/Admin/Specialties/Specialties'));

// Doctors
const DoctorLogin = React.lazy(() => import('./components/Doctor/Login/DoctorLogin'));
const DoctorLayout = React.lazy(() => import('./pages/Doctor/DoctorLayout'));
const DoctorDashboard= React.lazy(() => import('./components/Doctor/Dashboard/DoctorDashboard'));


function App() {
  // const user = useSelector((state) => state.auth.user);
  const admin = useSelector((state) => state.adminAuth.admin);
  const doctor=useSelector((state) =>state.doctorAuth.doctor);
  
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signup2" element={<SignupPage2 />} />
            <Route exact path="/signup3" element={<SignupPage3 />} />
            <Route exact path="/signup4" element={<SignupPage4 />} />

            <Route exact path="/admin">
            <Route path="" element={ admin 
              ? <Layout children={<AdminDashboard/>}/> 
              : <AdminLogin/> }/>
              <Route path="users" element={ admin 
              ? <Layout children={<List/>} /> 
              : <AdminLogin/> }/>
              <Route path="doctor" element={ admin 
              ? <Layout children={<AddDoctor/>}  /> 
              : <AdminLogin/> }/>
              <Route path="specialties" element={ admin 
              ? <Layout children={<Specialties/>}  /> 
              : <AdminLogin/> }/>
            </Route>

            <Route exact path="/doctor">
            <Route path="" element={ doctor 
              ? <DoctorLayout children={<DoctorDashboard/>}/> 
              : <DoctorLogin/> }/>
            </Route>

          </Routes>
        </Router>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
