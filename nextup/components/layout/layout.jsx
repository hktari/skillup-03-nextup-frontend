
import Footer from './footer/footer'
import Header from './header/header'

export default function Layout({ children }) {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}