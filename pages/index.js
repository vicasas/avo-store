import Link from 'next/link'
import TitleHome from "@components/TitleHome"
import ProductList from "@components/ProductList"
import { useEffect, useState } from "react"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProducts(data)
      })
  }, [])

  return (
    <>
      <div className='text-center my-4'>
        <TitleHome />
        <Link href='/yes-or-no' passHref>
          <a className='mt-5'>¿Deberia comer un avo hoy?</a>
        </Link>
      </div>
      <ProductList products={products} />
    </>
  )
}
