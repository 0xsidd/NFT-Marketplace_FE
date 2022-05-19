import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './button.css'



function button() {
    
    const history = useNavigate();
    const nftMintPage = () => {
        history("/mintNFT")
    }
    const nftBuyPage = () => {
        history("/sellNFT")
    }
    const nftResellPage=()=>{
        history("/reSellNFT")
    }
    const nftCollection=()=>{
        history("/myNFTCollection")
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
export default button




// class button extends Component {
    
//     nftMintPage(e)  {
//         const history = useNavigate();
//         history("/mintNFT")
//     }
//   render() {
//     return (
//                 <div className="text-center">
//                     <button type="button" className="btn btn-primary btn-lg btn-block " onClick={this.nftMintPage}>Mint NFT</button>
//                     <button type="button" className="btn btn-secondary btn-lg btn-block" >Buy NFT</button>
//                 </div>
//     )
//   }
// }

// export default button