import styles from "./Cards.module.scss"
import { useRouter } from "next/router"

export default function Cards({ first, second, third, fourth, amt, apy }) {
  const router = useRouter()
  return (
    <div className={styles.cards + " " + styles.alternate}>
      <div>{first}</div>
      {second && (
        <div>
          <img src={second} alt="" />
        </div>
      )}
      {amt && <div className={styles.amt}>{amt}</div>}
      {third && <div>{third}</div>}
      {apy && <div>Daily ROI: {apy}</div>}
      {fourth && <div>REWARDS IN TOKEN DUE: {fourth}</div>}
    </div>
  )
}
