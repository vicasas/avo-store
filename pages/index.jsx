import Link from 'next/link'
import TitleHome from "@components/TitleHome"
import ProductList from "@components/ProductList"
// import { useEffect, useState } from "react"

export default function Home({ productList }) {
  // const [products, setProducts] = useState([])
  // const [loading, setLoading] = useState(false)

  // CSR
  //
  // useEffect(() => {
  //   setLoading(true)

  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data, length }) => {
  //       setProducts(data)
  //       setLoading(false)
  //     })
  // }, [])

  return (
    <>
      <TitleHome />
      <section className="container text-center my-4">
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
    </>
  )
}

// SSG
export const getStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList } = await response.json()

  return {
    props: {
      productList,
    },
  }
}
