export default function CartItemList({ items, removeFromCart }) {
  if (items.length === 0) {
    return (
      <div className="alert alert-warning" role="alert">
        <h4 className="alert-heading">Your cart is empty</h4>
        <p>You will need to add some items to the cart before you can checkout.</p>
      </div>
    )
  }

  return (
    <>
      {items.map((cartItem) => {
        const { id, name, quantity, price, image } = cartItem

        return (
          <div key={id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-2">
                <img src={image} alt={name} title={name} className='img-fluid' />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{`${quantity} X ${price}`}</p>
                  <p className="card-text"><small className="text-muted">Some more information goes here....</small></p>
                  <button type="button" className="btn btn-outline-secondary d-flex" onClick={() => removeFromCart(cartItem)}>Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
