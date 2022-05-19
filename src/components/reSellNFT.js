import React, {useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ResellToken,Init} from './ContractCall'

 function ReSellNFT() {
    const [tokenData, settokenData] = useState({
		tokenId: "",
		tokenPrice: "",
	  });
	  const handleSubmitForReSell = async(e) => {
          await Init();
          e.preventDefault();
		  let tokenId = parseInt(tokenData.tokenId);
		  let tokenPrice = parseInt(tokenData.tokenPrice);
		  e.preventDefault();
		  await ResellToken(tokenId,tokenPrice);
		  alert("Token re-sold sucessfully")
		  e.preventDefault();
      }
  return (
    <div className='sellReSell'>
        <div className="login-form-1 ">
            <form id="login-form" className="text-left" onSubmit={handleSubmitForReSell}>
                <div className="login-form-main-message"></div>
                <div className="main-login-form">
                    <div className="login-group">
                        <div className="form-group">
                            <label >Token ID</label>
                            <input type="number" className="form-control" id="lg_username" name="lg_username" placeholder="token id" onChange= {(e) => settokenData({...tokenData, tokenId: e.target.value})} value={tokenData.tokenId} ></input>
                        </div>
                        <div className="form-group">
                            <label >Token Price</label>
                            <input type="number"step="any" className="form-control" id="lg_password" name="lg_password" placeholder="set price in MATIC" onChange= {(e) => settokenData({...tokenData, tokenPrice: e.target.value})} value={tokenData.tokenPrice}></input>
                        </div>
                    </div>
                    <button type="submit" className="login-button"><FontAwesomeIcon icon="fa fa-play"/></button>
                </div>
            </form>
        </div>
    </div>
  )
}


export default ReSellNFT
