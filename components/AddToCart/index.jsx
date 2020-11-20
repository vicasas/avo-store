import { useState } from "react"
import { useCartMutations } from "@store/Cart"

// Fake a server Response, we don't care on this project
// about data persistency, but you may add it :)
const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { addToCart } = useCartMutations()

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)

      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
        })
        .catch((err) => {
          setError(`Error: ${err}` || 'Something went wrong')
          setLoading(false)
        })
    }
  }

  const handleChange = ({ target }) =>
    setQuantity(parseInt(target.value, 10))

  return (
    <>
    <div className="input-group mb-1">
      <input type="number" className="form-control" placeholder="Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleChange} />
      <button className="btn btn-primary" type="button" id="button-addon2" onClick={handleSubmit} disabled={!!loading}>Add to Cart</button>
    </div>
    {!error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )
}
