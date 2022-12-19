import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pool from '../abis/Pool.json'
import { ethers } from "ethers";

function App() {
  const [number, setNumber] = useState(0)
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
    let poolAddress = '0x38AcCB8158ADb854B281d2A73fC364fFF3d354dA'
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

    console.log((Number(await poolContract.index())))
  }

  const setTest = async({number}) => {
    let poolAddress = '0x38AcCB8158ADb854B281d2A73fC364fFF3d354dA'
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
    await poolContract.setIndex(number)
  }

  useEffect(() => {
    connectWallet();
    getTest();
  }, []);

  return (
    <div className="App">

      <div>Hello {number}</div>

      <input placeholder='index' onChange={e => setNumber(Number(e.target.value))}></input>
      <br/>
      
      <button onClick={()=>setTest({number})}>Set test value</button> | 
      <button onClick={()=>getTest()}>Get test value</button>
    </div>
  )
}

export default App
