import styles from "./Layout.module.scss"

import Navigation from "../Navigation/Navigation"

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
     
      <main>{children}</main>
    </div>
  )
}
