import styles from "../styles/Nodes.module.scss"

import Cards from "../components/Cards/Cards"
import Web3 from "web3"
import React, { createRef, useEffect, useState } from "react"
import style from "./Layout.module.scss"

export default function Nodes() {
  var web3
  useEffect(() => {
    web3 = new Web3(window.ethereum)
  })
  var ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"USDC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_interest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_lastClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addMorePresaleTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addToBlacklist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nodeOwner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"airdropNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableNodes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"add","type":"address"}],"name":"changeDevWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"changeMinAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"add","type":"address"}],"name":"changeRewardWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"add","type":"address"}],"name":"changeTreasurey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"checkBlackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimTokenAndNode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimedPre","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"confirmSaleOnP2P","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"earlySaleTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedfromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"launchTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"claimer","type":"address"}],"name":"makeClaimNodeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"manualburn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxTxAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nodeBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nodePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nodeSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presaleTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"pricePerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeFromBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"removeePresaleTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMaxTx","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"p2p","type":"address"}],"name":"setP2Paddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"setThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"threshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"total_burnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalburnt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pre","type":"address"}],"name":"updatePresaleAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
  const [connectedAccount, getAddress] = useState()
  const [isConnected, updateConnectStatus] = useState(false)
  const [magusBalance, updateMagusBalance] = useState(0)
  const [nodesBalance, updateNodeBalance] = useState("0")
  const [contract, updateContract] = useState("0")
  const [totalInterest,updateInterest] = useState("0")
  const [owed,updateOwed] = useState("0")
  const [lastClaimedTime,updateLastClaimedTime] = useState(new Date().toString())
  var inpAMT = createRef()
  var contractAddress = "0xA57ca211cd6820bd3d930978271538d07e31A212"
  const withWeb3 = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      var conAccount = await web3.eth.getAccounts()
      getAddress(conAccount)
      console.log(conAccount[0])
      updateConnectStatus(true)
      var con = await new web3.eth.Contract(ABI, contractAddress)
      updateContract(con)
      console.log(con._address)
      var magus = await con.methods.balanceOf(conAccount[0]).call()
      magus = magus/(10**6);
      console.log(magus)
      updateMagusBalance(magus)
      var nodes = await con.methods.nodeBalance(conAccount[0]).call()
      console.log(nodes)
      updateNodeBalance(nodes)
      var tInterest =String(await con.methods._interest(conAccount[0]).call()/10**6)
      updateInterest(tInterest);
      var lastClaimed = await con.methods._lastClaim(conAccount[0]).call()*1000
      console.log(lastClaimed);
      var timeNow = new Date().getTime();
      var days= Math.floor((timeNow-lastClaimed)/86400000)
      updateLastClaimedTime(new Date(lastClaimed).toString());
      if(lastClaimed==0 && nodes>0){
        updateOwed("Please make the first claim for us to calculate the amount owed")
      }else
      if(lastClaimed>0 && nodes>0){

        updateOwed(String(nodes*days))
      }else if(nodes==0){
        updateOwed("You have no nodes")
      }
    } catch (exception) {
      console.log(exception)
    }
  }

  const buyNode = async (e) => {
    e.preventDefault()
    var nodesToPurchase = (inpAMT.current.value * 100).toString()

    console.log(nodesToPurchase)

    var hash = await contract.methods.buyNode(nodesToPurchase).send({ from: connectedAccount[0] })

    console.log(hash)

    var nodes = await contract.methods.nodeBalance(connectedAccount[0]).call()
    console.log(nodes)
    updateNodeBalance(nodes)
    var tInterest =await contract.methods._interest(conAccount[0]).call()/10**6
      updateInterest(tInterest);
      var lastClaimed = await contract.methods._lastClaim(conAccount[0]).call()*1000
      console.log(lastClaimed);
      var timeNow = new Date().getTime();
      var days= Math.floor((timeNow-lastClaimed)/86400000)
      
      if(lastClaimed==0 && nodes>0){
        updateOwed("Please make the first claim for us to calculate the amount owed")
      }else
      if(lastClaimed>0 && nodes>0){

        updateOwed(String(nodes*days))
      }else if(nodes==0){
        updateOwed("You have no nodes")
      }
  }

  const claim = async (e) => {
    e.preventDefault()
    var lastClaimed = await contract.methods._lastClaim(connectedAccount[0]).call()*1000
      console.log(lastClaimed);
      var nextClaim = 86400000+lastClaimed;
      var timeNow = new Date().getTime();
      console.log(timeNow);
      console.log(nextClaim);
      var nextTime = new Date(nextClaim)
      console.log(new Date(lastClaimed)+"\n"+new Date(nextClaim))
      if(nextClaim-timeNow<0)
      {
         alert("Please ensure you have read the note section before claiming.")  
        
      var hash = await contract.methods.makeClaimNodeReward(connectedAccount[0]).send({ from: connectedAccount[0] })
      console.log(hash)
      var magus = await contract.methods.balanceOf(connectedAccount[0]).call()
      magus = magus/(10**6);
      console.log(magus)
      updateMagusBalance(magus)
      var tInterest =await contract.methods._interest(conAccount[0]).call()/10**6
      updateInterest(tInterest);}
      else{alert("Next claim available at "+nextTime)}
      var days= Math.floor((timeNow-lastClaimed)/86400000)
      
      if(lastClaimed==0 && nodesBalance>0){
        updateOwed("Please make the first claim for us to calculate the amount owed")
      }else
      if(lastClaimed>0 && nodesBalance>0){

        updateOwed(String(nodes*days))
      }else if(nodesBalance==0){
        updateOwed("You have no nodes")
      }
    
  }

  return (
    <React.Fragment>
      {!isConnected ? (
        <div className={style.navSecondary}>
          <button onClick={withWeb3}>
            <img src="" alt="" />
            <span>Connect</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="nodes" >
        <div className={styles.userContainer}>
          <div className={styles.userInfo}>
            <div className={styles.avatar + " mt-5"}>
              <img src="/assets/Magus5.png" alt="" />
            </div>
            
          </div>
        </div>
        <div className={styles.info}>
              <p>welcome</p>
              <p  className={styles.add}>{connectedAccount}</p>
              <span>
                <p>$MAGUS: {magusBalance}</p>
              </span>
            </div>
        <div className={styles.myNodes}>
          <div className="grid">
            <Cards first={"My Nodes: "+nodesBalance} amt={totalInterest} apy="1%" fourth={owed} />
          </div>
          <form className={styles.form}>
            <input
              type={"number"}
              placeholder={"Enter nodes to purchase"}
              //style={{ width: "100%", marginTop: "4%" }}
              ref={inpAMT}
              min={0}
            ></input>
           
          </form>
        </div>
        

      </div>
    </React.Fragment>
  )
}
