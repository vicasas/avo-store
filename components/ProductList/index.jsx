export default function ProductList({ products }) {
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-sm-6 col-md-4'>
            <div className='card mb-5'>
              <img src={product.image} className='card-img-top' alt='' />
              <div className="card-body border-top">
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
