import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

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
    <div>
      <ul>
        <li>{product.name}</li>
      </ul>
    </div>
  )
}
