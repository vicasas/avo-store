import Navbar from "@components/Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
