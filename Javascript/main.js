const main = async() => {
    const provider = new ether.providers.Web3Provider(window.ethereum )
    const account = await provider.send("eth_requestAccounts",[])
    console.log(account);
}

// const main = async () => {
//     try {
//       // Create a new Web3 provider object
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
  
//       // Request access to the user's Metamask wallet
//       await window.ethereum.enable();
  
//       // Get the current account
//       const accounts = await provider.listAccounts();
//       const currentAccount = accounts[0];
  
//       console.log('Connected to Metamask wallet:', currentAccount);
//     } catch (error) {
//       console.error('Error connecting to Metamask:', error);
//     }
//   };
  