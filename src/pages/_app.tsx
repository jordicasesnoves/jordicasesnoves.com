import GlobalStylesComponent from '../components/GlobalStyles/GlobalStyles'
import '../styles/index.css'
import { Layout } from '../components'

interface AppProps {
  Component: any
  pageProps: any
}

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <GlobalStylesComponent />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
)

export default App
