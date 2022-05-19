//import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import Button from './components/Button';
import MintNFT from './components/MintNFT';
import BuyNFT from './components/BuyNFT';
import ReSellNFT from './components/ReSellNFT';
import MyNFTCollection from './components/MyNFTCollection';
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
                    <Route exact path="/MintNFT" 
                        element={<MintNFT/>} />
                    <Route exact path="/BuyNFT" 
                        element={<BuyNFT/>} />    
                    <Route exact path="/ReSellNFT" 
                        element={<ReSellNFT/>} />   
                    <Route exact path="/MyNFTCollection" 
                        element={<MyNFTCollection/>} />  
                </Routes >
            </Router>
            
    </div>
  ) 
}

export default App;
