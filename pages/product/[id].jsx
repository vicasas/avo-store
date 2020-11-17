import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import ProductSummary from "@components/ProductSummary"
import ProductAttributes from "@components/ProductAttributes"

export default function Home() {
  const { query } = useRouter()
  const [product, setProduct] = useState({})

  const param = query?.id

  useEffect(() => {
    if (param !== undefined) { // query.id
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
        })
    }
  }, [param]) // query.id

  return (
    <>
      <div className='container'>
        <ProductSummary product={product} />
      </div>
      <ProductAttributes
        description={product.attributes?.description}
        shape={product.attributes?.shape}
        hardiness={product.attributes?.hardiness}
        taste={product.attributes?.taste}
      />
    </>
  )
}
