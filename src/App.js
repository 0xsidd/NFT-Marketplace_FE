//import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navBar';
import Footer from './components/footer';
import Button from './components/button';
import MintNFT from './components/mintNFT';
import BuyNFT from './components/buyNFT';
import SideBar from './components/sideBar';
import ReSellNFT from './components/reSellNFT';
import MyNFTCollection from './components/myNFTCollection';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <NavBar></NavBar>
      <Router>
                <Routes >
                    <Route exact path="/" 
                        element={<Button/>} />
                    <Route exact path="/mintNFT" 
                        element={<MintNFT/>} />
                    <Route exact path="/sellNFT" 
                        element={<BuyNFT/>} />    
                    <Route exact path="/reSellNFT" 
                        element={<ReSellNFT/>} />   
                    <Route exact path="/myNFTCollection" 
                        element={<MyNFTCollection/>} />  
                </Routes >
            </Router>
            
    </div>
  ) 
}

export default App;
