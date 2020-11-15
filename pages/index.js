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
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}
