import IconAvocado from '@components/Icons/IconAvocado'
import IconBasket from '@components/Icons/IconBasket'
import Link from 'next/link'

export default function Navbar() {
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
            <IconBasket />
            <span className='ml-2'>
              Canasta
              <span className='ml-1'>0</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  )
}
