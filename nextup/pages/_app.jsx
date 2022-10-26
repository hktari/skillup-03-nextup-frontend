import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const specialLayout = Component.getLayout
  if (specialLayout) {
    return specialLayout(<Component {...pageProps} />)
  } else {
    <Layout>
      <Component  {...pageProps} />
    </Layout>
  }
}

export default MyApp
