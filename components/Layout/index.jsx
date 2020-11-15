import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  )
}
