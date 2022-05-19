import React from 'react'
import {useState, useEffect} from "react"
import { createMarketSale,getItemListed,init,tokenURI } from './contractCall';
import './buyNFT.css'

function  buyNFT() {
    const [formData, setFormData] = useState({
	  });
    const [tokenPrice, setTokenPrice] = useState({
	  });
    const [tokenId, setTokenId] = useState({
	  });
    const [tokenOwner, setTokenOwner] = useState({
	  });
    const [dataSize, setDataSize] = useState({
    });
    const [dataURI, setDataURI] = useState({
    });
    const [currentCount, setCurrentCount] = useState(0);

    let tokenPriceData = [];
    let tokenIdData = [];
    let tokenOwnerData = [];
    let dataLength;
    let dataArray = [];
    let dataURIArray = [];
    const listNewItems =  [];
    let itemImageSrc = `https://${ formData.image}.ipfs.dweb.link`

    useEffect(()=>{
      fetchTokenData();
    },[])


    const fetchTokenData = async()=>{ 
      await init();
      await getItemListed().then(function(data){
        for(let i=0;i<data.length;i++){
          tokenPriceData[i] = (data[i].price)/1e18;
          tokenIdData[i] = data[i].tokenId;
          tokenOwnerData[i] = data[i].owner;
          dataLength = data.length;
          setTokenPrice(tokenPriceData);
          setTokenId(tokenIdData);
          setTokenOwner(tokenOwnerData);
          setDataSize(data.length);
        }
      }) 
      for(let i=0;i<dataLength;i++){
        let dataFinalSize = [];
        await tokenURI(parseInt(tokenIdData[i])).then(function(data){
          dataFinalSize[i] = (data) 
          dataArray.push(dataFinalSize[i]);
        })
      }
      for(let i=0;i<(dataArray.length);i+= 2){
        dataURIArray.push(dataArray[i])  
    }
    let processedData = dataURIArray.slice(0,dataLength);
      await setDataURI(processedData);
      await fetch(processedData[0])
      .then((res) => res.json())
      .then((data) => {
        setFormData(data)
    })
    };


  const handleCheckForBuy = async(e)=>{
    await init();
    e.preventDefault();
    await createMarketSale(currentCount+1);
    alert("Bought token sucessfully");
    e.preventDefault();
  }

  const handleCheckForNext =async()=>{
    if(currentCount<tokenId.length-1){
        await fetch(dataURI[currentCount+1])
            .then((res) => res.json())
            .then((data) => {
              if(currentCount<tokenId.length-1){
                setCurrentCount(currentCount+1);
                setFormData(data)
              }
              if(currentCount==tokenId.length-1){
                setCurrentCount(0);
              }  
          })
    }
    else if(currentCount==tokenId.length-1){
      alert(`This collection has only ${currentCount+1} NFT's please go backward`)
    }      
  }

  const handleCheckForBack =()=>{
    if(currentCount>0){
      setCurrentCount(currentCount-1);
      fetch(dataURI[currentCount-1])
            .then((res) => res.json())
            .then((data) => {
              setFormData(data)    
          })
    }
    if(currentCount==0){
      alert(`This is the first NFT`)
    }     
  }

  const currentItem = 
    <div className="card">
      <img src={itemImageSrc}></img>
      <p className="Name">{formData.name}</p>
      <p className="About">{formData.description}</p>
      <p className="Price">Price is {tokenPrice[currentCount+1]} Matic</p>
      <p><button onClick={handleCheckForBuy}>Buy this NFT</button></p>
      <p><button onClick={handleCheckForNext}>Next</button></p>
      <p><button onClick={handleCheckForBack}>Back</button></p>
    </div>


    
  return (
    currentItem

    
  )
}

export default buyNFT