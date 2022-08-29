import styles from "./Layout.module.scss"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { SwitchTransition, Transition } from "react-transition-group"
import { useRouter } from "next/router"
import gsap from "gsap"

export default function Layout({ children }) {
  const [isActive, setActive] = useState(false)
  const [currentItem, setCurrentItem] = useState()
  const [navItems, setNavItem] = useState()
  const navRef = useRef(null)
  const burgerRef = useRef(null)
  const router = useRouter()

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
      icon: "/assets/ICONS/google-docs.png",
      text: "documentation",
      address: "https://docs.magusnodes.com",
      target: "_blank",
      rel: "noopener noreferrer"
    },
     {
       icon: "/assets/ICONS/bank.png",
       text: "Github",
       address: "https://github.com/stqc/magus",
       target: "_blank",
       rel: "noopener noreferrer"
     }
  ]

  const navActive = (e) => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove(styles.active)
    }

    if (e.target.nodeName == "LI") {
      //e.target.classList.toggle(styles.active)
      setCurrentItem(e.target)
    } else {
      //e.target.parentNode.classList.toggle(styles.active)
      setCurrentItem(e.target.parentNode)
    }
    toggleNav()
  }

  const toggleNav = () => {
    navRef.current.classList.toggle(styles.navActive)
    burgerRef.current.classList.toggle(styles.burgerActive)
  }

  const setHover = (e) => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove(styles.active)
    }
    if (e.target.nodeName == "LI") {
      e.target.classList.toggle(styles.active)
    } else {
      e.target.parentNode.classList.toggle(styles.active)
    }
  }

  const setActiveMenu = () => {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove(styles.active)
    }
    currentItem.classList.add(styles.active)
  }

  function enter(node) {
    let tl = new gsap.timeline()
    tl.fromTo(
      node,
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    )
  }

  function exit(node) {
    let tl = new gsap.timeline()
    tl.fromTo(
      node,
      {
        opacity: 1
      },
      {
        opacity: 0
      }
    )
  }

  useEffect(() => {
    if (!navItems) return
    if (router.pathname == "/") {
      setCurrentItem(navItems[0])
    } else if (router.pathname == "/p2p") {
      setCurrentItem(navItems[1])
    } else if (router.pathname == "/nodes") {
      setCurrentItem(navItems[2])
    } else if (router.pathname == "/docs") {
      setCurrentItem(navItems[3])
    } else if (router.pathname == "/treasury") {
       setCurrentItem(navItems[4])
     }
  })

  useEffect(() => {
    setNavItem(document.querySelectorAll(".nav-item"))
  }, [])

  useEffect(() => {
    if (!currentItem) return
    currentItem.classList.add(styles.active)
  }, [currentItem])

  return (
    <div className={styles.layout}>
      <div className={styles.burger} onClick={toggleNav} ref={burgerRef}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.navigation} ref={navRef}>
        <div className={styles.logo}>
          <img src="/assets/LOGOS/LOGO_SOLO_BIG_WHITE.png" alt="..." />
          <div className={styles.logoText}>
            <span>Magus</span>
            <span>Nodes</span>
          </div>
        </div>
        <nav className={styles.navigationNav}>
          <ul onMouseLeave={setActiveMenu}>
            {navData.map((item) => (
              <Link
                key={item.text}
                href={item.address}
                target={item.target ? item.target : ""}
                rel={item.rel ? item.rel : ""}
              >
                <a target={item.target ? item.target : ""} style={{ textDecoration: "none" }}>
                  <li onClick={navActive} className="nav-item" onMouseEnter={setHover}>
                    <img src={item.icon} alt="" />
                    <p>{item.text}</p>
                  </li>
                </a>
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
      <SwitchTransition>
        <Transition
          key={router.pathname}
          timeout={500}
          in={true}
          onEnter={enter}
          onExit={exit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
    </div>
  )
}
