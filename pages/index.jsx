import styles from "../styles/Index.module.scss"
import Layout from "../components/Layout/Layout"
import Cards from "../components/Cards/Cards"

export default function Home() {
  const cardData = [
    {
      first: "live nodes",
      second: "/assets/ICONS/blockchain.png",
      third: "running nodes: "
    },
    {
      first: "$magus price",
      second: "/assets/LOGOS/LOGO_SOLO_BIG_BLUE.png",
      third: ""
    },
    {
      first: "daily roi",
      second: "/assets/ICONS/return-of-investment.png",
      third: "1% roi"
    },
    {
      first: "node price",
      second: "/assets/ICONS/blockchain.png",
      third: "1 node: 100 magus"
    }
  ]
  return (
    <div className={styles.dashboard}>
      <img src="/assets/DAPP.png" alt="" className="background" />
      <div>
        <div className="grid">
          {cardData.map((item) => (
            <Cards key={item.first} first={item.first} second={item.second} third={item.third} />
          ))}
        </div>
      </div>
    </div>
  )
}
