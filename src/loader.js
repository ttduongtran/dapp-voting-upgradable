const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');

async function main() {
// Set up web3 object, connected to the local development network
const web3 = new Web3('http://localhost:8545');
const loader = setupLoader({ provider: web3 }).web3;

// Set up a web3 contract, representing our deployed Box instance, using the contract loader
const address = '0x50a9843D2e8453608c8c932619CEe1e6968B894a';
const box = loader.fromArtifact('Box', address);

// Retrieve accounts from the local node, we'll use the first one to send the transaction
const accounts = await web3.eth.getAccounts();
console.log({accounts});

// Send a transaction to store() a new value in the Box
await box.methods.store(20)
.send({ from: accounts[0], gas: 50000, gasPrice: 1e6 });

// Call the retrieve() function of the deployed Box contract
const value = await box.methods.retrieve().call();
console.log({value})
console.log("Box value is", value);
}

main();