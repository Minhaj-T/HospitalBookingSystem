import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Test from '../../../components/Atest.js/Test';
import Header from '../../../components/User/Header/Header';
import HomePage from '../../../components/User/HomePage/HomePage'

function Landingpage() {
  const navigate=useNavigate()
  const { user} = useSelector(
    (state) => state.auth);
    console.log("this is the users",user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate,user]);


  return (
    <>
    <Header/>
    <HomePage/>
    <Test/>
    </>
  )
}

export default Landingpage;