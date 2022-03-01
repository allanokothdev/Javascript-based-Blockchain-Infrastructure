const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('56f6df97a3c7d2e61ef39905bd00ab8c28e14af5d72e979322931469bbfaaf5c');
const myWalletAddress = myKey.getPublic('hex');

let allanCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
allanCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
allanCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of allan is', allanCoin.getBalanceOfAddress(myWalletAddress));
