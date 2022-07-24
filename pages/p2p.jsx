import styles from "../styles/p2p.module.scss"
import { Tab, Tabs, Table } from "react-bootstrap"
import stylesT from "./Transaction.module.scss"
import Transaction from "../components/Transaction/Transaction"
import { useState, createRef, useEffect } from "react"
import Web3 from "web3"
export default function P2P() {
  const abi = [
    {
      inputs: [],
      name: "cancelAnOrder",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newDaddy",
          type: "address"
        }
      ],
      name: "changeBigDaddy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newFee",
          type: "uint256"
        }
      ],
      name: "changeFee",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newAddress",
          type: "address"
        }
      ],
      name: "changeMagusAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "seller",
          type: "address"
        }
      ],
      name: "completeTheOrder",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      name: "orderCanceled",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address"
        },
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address"
        }
      ],
      name: "orderCompleted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      name: "orderPlaced",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "nodeAmount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "USDPrice",
          type: "uint256"
        }
      ],
      name: "placeAnOrder",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "BigDaddy",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "MagusAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "orderPlacers",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      name: "orders",
      outputs: [
        {
          internalType: "uint256",
          name: "nodeAmount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "USDPrice",
          type: "uint256"
        },
        {
          internalType: "bool",
          name: "orderPlaced",
          type: "bool"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "USDC",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "viewAllOrders",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]"
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "nodeAmount",
              type: "uint256"
            },
            {
              internalType: "uint256",
              name: "USDPrice",
              type: "uint256"
            },
            {
              internalType: "bool",
              name: "orderPlaced",
              type: "bool"
            }
          ],
          internalType: "struct magusNodePeerExchange.orderData[]",
          name: "",
          type: "tuple[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    }
  ]
  const address = "0xdaf444f97f635702ec43cc361c11d44114a2f065"
  var nodeSaleNum = createRef()
  var nodeSalePrice = createRef()
  var web3
  const [contract, updateContract] = useState(null)
  const [connectedAccount, updateConnectedAccount] = useState()
  const [allOrders, changeAllOrders] = useState()
  const [myOrders, updateMyOrders] = useState()
  useEffect(() => {
    web3 = new Web3(window.ethereum)
    getOrders()
  }, [])
  const getOrders = async () => {
    web3 = new Web3(window.ethereum)
    var con = await new web3.eth.Contract(abi, address)
    console.log(con._address)
    updateContract(con)
    var orders = await con.methods.viewAllOrders().call()
    console.log("0", orders[0])
    console.log("1", orders[1])
    var or = []
    for (let i = 0; i < orders[0].length; i++) {
      or.push(
        <Transaction
          appr={approveUSD}
          address={orders[0][i]}
          key={i}
          orderData={orders[1][i]}
          connectedAd={connectedAccount}
          pur={buy}
          placed={orders[1][i]["orderPlaced"]}
        />
      )
    }
    console.log(or)
    changeAllOrders(or)
    await con.methods.MagusAddress().call()
  }
  const withWeb3 = async () => {
    web3 = new Web3(window.ethereum)
    await window.ethereum.request({ method: "eth_requestAccounts" })

    var conAccount = await new web3.eth.getAccounts()
    updateConnectedAccount(conAccount)
    console.log(conAccount)
    var o = await contract.methods.orders(conAccount[0]).call()
    console.log(o)
    var myOrder = (
      <Transaction
        address={conAccount[0]}
        orderData={o}
        connectedAd={conAccount[0]}
        cancelO={cancelOrder}
        placed={o["orderPlaced"]}
      />
    )
    console.log(myOrder)
    updateMyOrders(myOrder)
    await updateConnectedAccount(conAccount)
    console.log(connectedAccount)
  }
  const buy = async (addressToBuyFrom) => {
    try {
      var con = await new web3.eth.Contract(abi, address)
      var conAccount = await new web3.eth.getAccounts()
      console.log(addressToBuyFrom);
      await con.methods.completeTheOrder(addressToBuyFrom).send({ from: conAccount[0] })
      getOrders()
      alert("Purchase Successful")
    } catch (exception) {
      console.log(exception)
    }
  }
  const approveUSD = async (amt, ad) => {
    var USD = "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59"
    var USDABI = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          }
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "getOwner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ]

    try {
      web3 = new Web3(window.ethereum)
      var usdCon = await new web3.eth.Contract(USDABI, USD)
      console.log(usdCon._address)
      var acc = await new web3.eth.getAccounts()
      await usdCon.methods.approve(address, amt).send({ from: acc[0] })
      alert("Approved")
    } catch (exception) {
      console.log(exception)
    }
  }
  const placeOrder = async () => {
    console.log(nodeSaleNum.current.value)
    console.log(nodeSalePrice.current.value * 10 ** 6)
    await contract.methods
      .placeAnOrder(nodeSaleNum.current.value, String(nodeSalePrice.current.value * 10 ** 6))
      .send({ from: connectedAccount[0] })
    var o = await contract.methods.orders(connectedAccount[0]).call()
    console.log(o)
    var myOrder = (
      <Transaction
        address={connectedAccount[0]}
        orderData={o}
        connectedAd={connectedAccount[0]}
        cancelO={cancelOrder}
        placed={o["orderPlaced"]}
      />
    )
    console.log(myOrder)
    updateMyOrders(myOrder)
    getOrders()
  }
  const cancelOrder = async (ad) => {
    try {
      console.log(ad)
      await contract.methods.cancelAnOrder().send({ from: ad })
      alert("canceled")

      var o = await contract.methods.orders(ad).call()
      var myOrder = <Transaction address={ad} orderData={o} connectedAd={ad} />

      updateMyOrders(myOrder)
      getOrders()
    } catch (exception) {
      console.log(exception)
    }
  }
  
  return (
    <div className={styles.p2p}>
      <div className={styles.overview + " row"}>
        <div className="col-xl-6">
          <div className={styles.video}>
          <iframe width="100%" height={"100%"} src="https://www.youtube.com/embed/W5ElPopfgFM" title={"YouTube video player"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p>Video tutorial: How to use P2P Marketplace</p>
          
        </div>
        <div className="col-xl-6">
          {!connectedAccount && (
            <button className="connect" onClick={withWeb3}>
              Connect Wallet
            </button>
          )}
          <div className={styles.avatar}>
            <img src="/assets/Magus5.png" alt="" />
          </div>
          <div className={styles.info}>
            {connectedAccount && (
              <>
                <p>Connected to:</p>
                <p>{"..." + connectedAccount[0].substr(connectedAccount.length - 7)}</p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <Tabs defaultActiveKey="buy" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="buy" title="Buy" className={styles.tab}>
            <Table responsive="lg">
              <thead>
                <tr>
                  <th>Advertisers</th>
                  <th>Price</th>
                  <th>Available</th>
                  <th>Trade</th>
                </tr>
              </thead>
              <tbody>{allOrders}</tbody>
            </Table>
          </Tab>
          <Tab eventKey="sell" title="Sell">
            <Table responsive="lg">
              <thead>
                <tr>
                  <th width="35%">Enter Node Amount</th>
                  <th>Enter Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr className={styles.row}>
                    <td>
                      <div>
                        <input type="number" defaultValue={1} min="0" ref={nodeSaleNum} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="number" defaultValue={1} min="0" ref={nodeSalePrice} />
                      </div>
                    </td>
                    <td>
                      <div>
                        <button onClick={placeOrder} className={styles.orderButton}>
                          Place Order
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
                {myOrders}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
      <style type="text/css">
        {`
        .nav-tabs {
          padding: 0.5rem;
          border: 1px solid #eeeeee;
          max-width: fit-content;
          border-radius: 1rem;
        }
        .nav-tabs li button{
          padding: 0.5rem 4rem;
          border: none !important;

        }
        .nav-tabs .nav-item .active{
          background-color: #3c7e00;
          border-radius: 1rem
          border: 1px solid #000 !important;
          color: #fff;
          border-radius: 1rem;
        }
        .table{
          margin-top: 3rem;
          white-space: nowrap;
        }
        thead tr{
          border-bottom-width: 2px !important;
        }
        `}
      </style>
    </div>
  )
}

{
  /**
<tr className={styles.row}>
                    <td>
                      <div>
                        <div className={styles.sellerAvatar}>
                          <input type="number" defaultValue={1} min="0" ref={nodeSaleNum} />
                        </div>
                        <div className={styles.sellerInfo}></div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <input type="number" defaultValue={1} min="0" ref={nodeSalePrice} />
                      </div>
                    </td>
                    <td></td>
                    <td>
                      <div>
                        <button onClick={placeOrder}>Place Order</button>
                      </div>
                    </td>
                  </tr> */
}
