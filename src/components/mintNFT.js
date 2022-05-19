import React, { Component,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './mintNFT.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, fachevron } from '@fortawesome/fontawesome-free-solid'
import {createToken,getListingPrice,init} from './contractCall'



function mintNFT() {
	const [formData, setFormData] = useState({
		title: "",
		body: "",
	  });
	  const handleSubmit = async(e) => {
		  await init();
		  let tokenURI = formData.title;
		  let tokenPrice = parseInt(formData.body);
		  e.preventDefault();
		  console.log( await getListingPrice);
		  await createToken(tokenURI,tokenPrice);
		  alert("Token created sucessfully")
		  e.preventDefault();
	
	}
    return (
		<div className='sellReSell'>
			<div className="login-form-1 ">
				<form id="login-form" className="text-left" onSubmit={handleSubmit}>
					<div className="login-form-main-message"></div>
						<div className="main-login-form">
							<div className="login-group">
								<div className="form-group">
									<label >Token URI</label>
									<input type="text" className="form-control" id="lg_username" name="lg_username" placeholder="token uri" onChange= {(e) => setFormData({...formData, title: e.target.value})} value={formData.title} ></input>
								</div>
								<div className="form-group">
									<label >Set token price</label>
									<input type="number"step="any" className="form-control" id="lg_password" name="lg_password" placeholder="set price in Matic" onChange= {(e) => setFormData({...formData, body: e.target.value})} value={formData.body}></input>
								</div>
						</div>
						<button type="submit" className="login-button"><FontAwesomeIcon icon="fa fa-play"/></button>
					</div>
				</form>
			</div>
		</div>


    )
}

export default mintNFT





