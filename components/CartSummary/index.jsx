export default function CartSummary({ totalAmount }) {
  const disabled = totalAmount > 0 ? false : true

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <span className='align-self-center'>
          <strong>Sub Total</strong>
          {` $${totalAmount}`}
        </span>
        <button type="button" className="btn btn-dark" disabled={disabled}>Checkout</button>
      </div>
    </div>
  )
}
