import React from 'react'
import ReactDom from 'react-dopm'
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lastWinner : 0,
      numberOfBets : 0,
      minimumBet : 0,
      totalBet : 0,
      maximumAmountOfBets: 0

    };

    if (typeof web3 != 'undifined') {
      console.log('Using web3 from Metamask');
      this.web3 = new Web3(web3.currentProvider);
    }else{
      this.web3 = new Web3(new Web3.HttpProvider("http://localhost:8545"));
    }

    const MyContract = web3.eth.contract([
      {
        "constant": true,
        "inputs": [],
        "name": "numberOfBets",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalBet",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "player",
            "type": "address"
          }
        ],
        "name": "checkPlayerExists",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "players",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "playerInfo",
        "outputs": [
          {
            "name": "amountBet",
            "type": "uint256"
          },
          {
            "name": "numberSelected",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "maximumBetsNr",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "minimumBet",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_minimumBet",
            "type": "uint256"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "numberSelected",
            "type": "uint256"
          }
        ],
        "name": "bet",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "resetData",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "numberWinner",
            "type": "uint256"
          }
        ],
        "name": "distributePrizes",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "generateNumberWinner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      }
    ])

    this.state.contractInstance = MyContract.at("0xb1bbc45fc78b817061af66c45fca6ed0a9ec616b");
  };

  voteNumber(number){
    console.log(number);
  }

   render(){
     return (
      <div className="main-container">
        <h1> Bet the amount on your lucky number and win ether Prizez </h1>
        <div className="block">
          <h4> Timer:</h4> &bnsp
          <span ref='timer'>{state.this.timer}</span>
        </div>

        <hr/>

        <h2> Bet one of the following numbers </h2>
          <ul>
            <li onClick={() => this.voteNumber(1)}> 1 </li>
            <li onClick={() => this.voteNumber(2)}> 2 </li>
            <li onClick={() => this.voteNumber(3)}> 3 </li>
            <li onClick={() => this.voteNumber(4)}> 4 </li>
            <li onClick={() => this.voteNumber(5)}> 5 </li>
            <li onClick={() => this.voteNumber(6)}> 6 </li>
            <li onClick={() => this.voteNumber(7)}> 7 </li>
            <li onClick={() => this.voteNumber(8)}> 8 </li>
            <li onClick={() => this.voteNumber(9)}> 9 </li>
            <li onClick={() => this.voteNumber(10)}> 10 </li>
          </ul>
      </div>
    )
  }

}

ReactDom.render (
  <App />,
  document.querySelector('#root')

);
