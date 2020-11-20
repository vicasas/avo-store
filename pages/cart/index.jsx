export default function Cart() {
  return (
    <div className='container'>
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Your cart is empty</h4>
        <p>You will need to add some items to the cart before you can checkout.</p>
      </div>
    </div>
  )
}
