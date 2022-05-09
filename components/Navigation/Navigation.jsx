import styles from "./Navigation.module.scss"
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isActive, setActive] = useState(false)

  /**
   * * This is an array for all the items for the navigation menu
   * * Add or remove items accordingly
   * * The assets for the icons are in /assets/ICONS/
   */
  const navData = [
    {
      icon: "/assets/ICONS/dashboard.png",
      text: "dashboard",
      address: "/"
    },
    {
      icon: "/assets/ICONS/p2p.png",
      text: "P2P market (Coming soon)",
      address: "/"
    },
    {
      icon: "/assets/ICONS/blockchain.png",
      text: "nodes",
      address: "/nodes"
    },

    {
      icon: "/assets/ICONS/google-docs.png",
      text: "documentation",
      address: "/"
    },
    {
      icon: "/assets/ICONS/bank.png",
      text: "treasury",
      address: "/"
    }
  ]

  const navActive = (e) => {
    const items = document.querySelectorAll(".nav-item")
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(styles.active)
    }
    e.target.classList.toggle(styles.active)
  }
  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>
        <img src="/assets/LOGOS/LOGO_SOLO_BIG_WHITE.png" alt="..." />
        <div className={styles.logoText}>
          <span>Magnus</span>
          <span>Nodes</span>
        </div>
      </div>
      <nav className={styles.navigationNav}>
        <ul>
          {navData.map((item) => (
            <Link key={item.text} href={item.address}>
              <li onClick={navActive} className="nav-item">
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className={styles.socials}>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
