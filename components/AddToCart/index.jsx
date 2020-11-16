export default function AddToCart() {
  return (
    <div className="input-group mb-3">
      <input type="number" className="form-control" placeholder="Quantity" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn btn-primary" type="button" id="button-addon2">Add to Cart</button>
    </div>
  )
}
