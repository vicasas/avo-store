import Navbar from "../Navbar"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}
