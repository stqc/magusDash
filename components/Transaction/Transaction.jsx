import styles from "./Transaction.module.scss"

export default function Transaction(props) {

  return (
    (props.placed &&
    <tr className={styles.row}>
      <td>
        <div>
          <div className={styles.avatar}>
            <img src="/assets/Magus5.png" alt="" />
            
          </div>
          <div className={styles.info}>
            {props.address}
          </div>
        </div>
      </td>
      <td>
        <div>
          <p></p>
          <p>${props.orderData['USDPrice']/10**6}</p>
        </div>
      </td>
      <td>
        <div>{props.orderData['nodeAmount']} Nodes</div>
      </td>
      <td>
        <div>
         
          {(!props.cancelO && <> <button onClick={()=>{
            props.appr(props.orderData['USDPrice'],props.connectedAd)
          }}>Approve</button> <button onClick={()=>{
            props.pur(props.address)
            }}>Buy Node</button></>)}
            {(props.cancelO && <button onClick={()=>{{props.cancelO(props.connectedAd)}}}>Cancel</button>)}
        </div>
      </td>
    </tr>
  ))
}
