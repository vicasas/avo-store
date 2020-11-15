import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [product, setProduct] = useState({})

  const param = router.query?.id

  useEffect(() => {
    if (param !== undefined) {
      window
        .fetch(`/api/avo/${router.query.id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data)
        })
    }
  }, [param])

  return (
    <div>
      <ul>
        <li>{product.name}</li>
      </ul>
    </div>
  )
}
