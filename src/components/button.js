import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './button.css'



function Button() {
    
    const history = useNavigate();
    const nftMintPage = () => {
        history("/MintNFT")
    }
    const nftBuyPage = () => {
        history("/BuyNFT")
    }
    const nftResellPage=()=>{
        history("/ReSellNFT")
    }
    const nftCollection=()=>{
        history("/MyNFTCollection")
    }
    return (
        <div className="text-center">
            <button type="button" className="btn1 btn-primary btn-lg btn-block "  onClick={nftMintPage}>Mint NFT</button>
            <button type="button" className="btn2 btn-secondary btn-lg btn-block" onClick={nftBuyPage}>Buy NFT</button>
            <button type="button" className="btn1 btn-primary btn-lg btn-block" onClick={nftResellPage}>Re-Sell NFT</button>
            <button type="button" className="btn3 btn-secondary btn-lg btn-block" onClick={nftCollection}>My NFT's</button>
        </div>
    )
}
export default Button
