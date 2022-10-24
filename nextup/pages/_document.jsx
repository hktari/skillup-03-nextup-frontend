import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/layout/footer/footer'
import Header from '../components/layout/header/header'

export default function Document() {
    return (
        <Html>
            <Head >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />


                <script src="https://use.fontawesome.com/c26e5e752a.js"></script>

                {/* <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
                <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet" />
                <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet" />            
                 */}
                </Head>
            <body id="appRoot">
                <Header/>
                <Main />
                <Footer />
                <NextScript />
            </body>
        </Html>
    )
}
