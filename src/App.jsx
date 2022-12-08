import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pool from '../abis/Pool.json'
import { ethers } from "ethers";

function App() {
  const [number, setNumber] = useState(9)
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getTest = async() => {
    let poolAddress = '0xaEefD5819f86f3BE7cA69328C44F6406121fE7d6'
    const {ethereum} = window
    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const poolContract = new ethers.Contract(
      poolAddress,
      Pool.abi,
      signer
    );

    console.log(await poolContract.test())
  }

  const setTest = async({number}) => {
    let poolAddress = '0xaEefD5819f86f3BE7cA69328C44F6406121fE7d6'
    const {ethereum} = window
    if (!ethereum) {
      alert("Please install MetaMask!");
      return;
    }
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const poolContract = new ethers.Contract(
      poolAddress,
      Pool.abi,
      signer
    );
    await poolContract.setTest(number)
  }

  useEffect(() => {
    connectWallet();
    getTest();
  }, []);

  return (
    <div className="App">
      Hello
      <button onClick={()=>setTest({number})}>Set test value</button>
    </div>
  )
}

export default App
