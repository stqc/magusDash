import styles from "../styles/p2p.module.scss"
import { Tab, Tabs, Table } from "react-bootstrap"

import Transaction from "../components/Transaction/Transaction"

export default function P2P() {
  return (
    <div className={styles.p2p}>
      <div className={styles.overview + " row"}>
        <div className="col-xl-6">
          <div className={styles.video}></div>
          <p>Video tutorial: How to use P2P Marketplace</p>
        </div>
        <div className="col-xl-6">
          <button className="connect">Connect Wallet</button>
          <div className={styles.avatar}>
            <img src="/assets/Magus5.png" alt="" />
          </div>
          <div className={styles.info}>
            <p>...0XE5125</p>
            <p>BAL: 100 $MAGUS</p>
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
              <tbody>
                <Transaction />
                <Transaction />
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="sell" title="Sell">
            <Table responsive="lg">
              <thead>
                <tr>
                  <th width="35%">Advertisers</th>
                  <th>Price</th>
                  <th>Available</th>
                  <th>Trade</th>
                </tr>
              </thead>
              <tbody>
                <Transaction />
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
