import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './components/User/Signup/Signup';

//Utilities and Components
// const Loader = React.lazy(() => import("./components/Loader/Loader"));
import Spinner from './components/User/Spinner/Spinner';
const ErrorPage= React.lazy(() => import('./components/User/ErrorPage/ErrorPage'));


// Pages

//Homepage
const HomePage = React.lazy(() =>import('./pages/user/LandingPage/Landingpage'));
const Login = React.lazy(() => import('./components/User/Login/Login'));
const SignupPage2 = React.lazy(() =>import('./components/User/Signup/SignupPage2'));
const SignupPage3 = React.lazy(() =>import('./components/User/Signup/SignupPage3'));
const SignupPage4 = React.lazy(() =>import('./components/User/Signup/SignupPage4'));
const DoctorSerch = React.lazy(() => import('./components/User/Doctorsearch/Doctorsearch'));


// User
const UserDashBoard = React.lazy(()=>import('./components/User/DashBoard/UserDashBoard'));
const UserLayout = React.lazy(() => import('./pages/user/UserLayout'));
const UserProfileSettings = React.lazy(()=>import('./components/User/ProfileSettings/UserProfileSettings'))
const Favourites = React.lazy(() =>import('./components/User/FavouriteDoctor/Favourites'));
const DoctorProfile = React.lazy(() => import('./components/User/DoctorProfile/DoctorProfile'));
const BookAppoinment = React.lazy(() => import('./components/User/BookAppoinment/BookAppoinment'));

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
const Appointments = React.lazy(() => import('./components/Doctor/Appointments/Appointments'));
const Mypatients = React.lazy(() => import('./components/Doctor/Mypatients/Mypatients'));
const ScheduleTiming = React.lazy(() => import('./components/Doctor/ScheduleTiming/ScheduleTiming'));
const ProfileSettings = React.lazy(() => import('./components/Doctor/ProfileSettings/ProfileSettings'));
const ChangePassword = React.lazy(() => import('./components/Doctor/ChangePassword/ChangePassword'));
const UserChangePassword = React.lazy(()=>import('./components/User/ChangePassword/UserChangePassword'));
const UserProfile = React.lazy(() =>import('./components/Doctor/UserProfile/UserProfile'));


function App() {
  const user = useSelector((state) => state.auth.user);
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
            <Route exact path="/doctor-search" element={<DoctorSerch />} />
            <Route exact path="/doctor-profile/:id" element={<DoctorProfile />} />

            

            <Route exact path="/user">
            <Route path="" element={ user 
              ? <UserLayout children={<UserDashBoard/>}/> 
              : <Login /> }/>
            <Route path="user-edit" element={ user 
              ? <UserLayout children={<UserProfileSettings/>}/> 
              : <Login/> }/>
            <Route path="change-password" element={ user 
              ? <UserLayout children={<UserChangePassword/>}/> 
              : <Login/> }/>
            <Route path="favourites" element={ user 
              ? <UserLayout children={<Favourites/>}/> 
              : <Login/> }/>
              <Route path="book-appoinment/:id" element={ user 
              ? <BookAppoinment/> 
              : <Login/> }/>
            </Route>


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
              : <DoctorLogin /> }/>
              <Route path="appointments" element={ doctor 
              ? <DoctorLayout children={<Appointments/>}/> 
              : <DoctorLogin/> }/>
              <Route path="my-patients" element={ doctor 
              ? <DoctorLayout children={<Mypatients />}/> 
              : <DoctorLogin/> }/>
              <Route path="schedule-timing" element={ doctor 
              ? <DoctorLayout children={<ScheduleTiming/>}/> 
              : <DoctorLogin/> }/>
              <Route path="profile-settings" element={ doctor 
              ? <DoctorLayout children={<ProfileSettings/>}/> 
              : <DoctorLogin/> }/>
              <Route path="change-password" element={ doctor 
              ? <DoctorLayout children={<ChangePassword/>}/> 
              : <DoctorLogin/> }/>
              <Route path="patient-profile" element={ doctor 
              ? <UserProfile/> 
              : <DoctorLogin/> }/>
            </Route>

            <Route exact path="*" element={<ErrorPage/>}></Route>

          </Routes>
        </Router>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
