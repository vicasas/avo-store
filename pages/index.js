import Link from 'next/link'
import TitleHome from "@components/TitleHome"
import ProductList from "@components/ProductList"
import { useEffect, useState } from "react"

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProducts(data)
        setLoading(false)
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
      <ProductList products={products} loading={loading} />
    </>
  )
}
