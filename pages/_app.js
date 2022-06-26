import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.scss"
import Layout from "../components/Layout/Layout"
import "../styles/node.css"

import { StateProvider } from "../components/Context"

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  )
}

export default MyApp
