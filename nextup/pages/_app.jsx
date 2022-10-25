import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component  {...pageProps} />
    </Layout>

  )
}

export default MyApp
