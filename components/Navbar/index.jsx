import Link from 'next/link'
import IconAvocado from '@components/Icons/IconAvocado'
import ShoppingCart from '@components/ShoppingCart'
import { useCart } from '@store/Cart'

export default function Navbar() {
  const { count: cartCount } = useCart()

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">
            <IconAvocado />
            <span className='ml-2'>Avo Store</span>
          </a>
        </Link>
        <Link href='/cart'>
          <a>
            <ShoppingCart cartCount={cartCount} name="Canasta" />
          </a>
        </Link>
      </div>
    </nav>
  )
}
