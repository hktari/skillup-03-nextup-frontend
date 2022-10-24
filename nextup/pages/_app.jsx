import '../styles/globals.css'
import Modal from 'react-modal'

Modal.setAppElement('#appRoot');

function MyApp({ Component, pageProps }) {
  return <Component id="appRoot" {...pageProps} />
}

export default MyApp
