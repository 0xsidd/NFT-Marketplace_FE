import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './md.css'
import NavBar from './navBar';
import Footer from './footer';
import Button from './button';
import { BrowserRouter, } from 'react-router-dom';
import SideBar from './sideBar'

function mainPage() {
  return (
    <div>
      
      <NavBar></NavBar>
      <Button></Button>
      <Footer></Footer>
      {/* <SideBar></SideBar> */}
    </div>
  ) 
}

export default mainPage