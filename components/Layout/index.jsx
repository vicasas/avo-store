import Navbar from "@components/Navbar"
import Footer from "@components/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
