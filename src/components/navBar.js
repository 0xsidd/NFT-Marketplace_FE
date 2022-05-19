import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png'
import './navBar.css'
import Mlogo from './MetaMask.png'
import {Init} from './ContractCall'



export class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       connect:"Connect to MetaMask",
    }
  }
  handleChangeForMetaMaskConnection=async(event)=>{
    await Init();
    this.setState({
        connect:"Connected to MetaMask"
    })
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">      
          <a className="navbar-brand">
            <img className='logo' src={Logo}></img> NFT Marketplace <button type="button" className="btn btn-danger" onClick={this.handleChangeForMetaMaskConnection}><img className='MetaMaskLogo' src={Mlogo}></img>
            {this.state.connect}</button>
          </a>
          
    </nav>
  )
  }
}

export default NavBar