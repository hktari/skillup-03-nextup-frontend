import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AuthProvider from '../components/providers/authProvider';

function MyApp({ Component, pageProps }) {

  // Use the layout defined at the page level, if available
  const specialLayout = Component.getLayout


  return (
    <AuthProvider>
      {
        specialLayout ? specialLayout(<Component {...pageProps} />)
          : (
            <Layout>
              <Component  {...pageProps} />
            </Layout>)
      }
    </AuthProvider>
  )
}

export default MyApp
