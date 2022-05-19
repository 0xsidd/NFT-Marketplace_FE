// import Web3 from 'web3';

// export const init=async()=>{
//     provider = window.ethereum;

//     if(typeof provider!=='undefined'){
      
//      await provider
//       .request({method:'eth_requestAccounts'})
//       .then(accounts=>{
//           selectedAccount = accounts[0];
//           console.log(`Connected to ${ selectedAccount} account`);})
//       .catch(err=>{
//         console.log(err);
//       });
//       window.ethereum.on('accountsChanged',function(accounts){
//         selectedAccount = accounts[0];
//         console.log(`Changed to ${ selectedAccount} account`)
//       });
//     }    
//     // web3 = new Web3(provider);
//     // DEXContract = new web3.eth.Contract(uniswapAbi,uniswapContractAddress);
// 	// console.log(`Contract 1 loaded`);
//     // CMPContract = new web3.eth.Contract(CMPAbi,CMPAddress);
// 	// console.log(`Contract 2 loaded`);
// 	// WETHContract = new web3.eth.Contract(WETHAbi,tokenOutWeth);
//     // console.log(`Contract 3 loaded`);
// };