import styles from "./Transaction.module.scss"

export default function Transaction() {
  return (
    <tr className={styles.row}>
      <td>
        <div>
          <div className={styles.avatar}>
            <img src="/assets/Magus5.png" alt="" />
          </div>
          <div className={styles.info}>
            <p>KrakenFX</p>
            <p>717 orders | 100% completion</p>
          </div>
        </div>
      </td>
      <td>
        <div>
          <p>$1000.00</p>
          <p>10 $MAGUS</p>
        </div>
      </td>
      <td>
        <div>9 Nodes</div>
      </td>
      <td>
        <div>
          <button>Buy USDC</button>
          <button>Buy MAGUS</button>
        </div>
      </td>
    </tr>
  )
}
