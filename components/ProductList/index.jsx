import Link from 'next/link'

export default function ProductList({ products, loading }) {
  return (
    <div className='container'>
      <div className='row'>
        {!loading ? (
          products.map((product) => (
            <div key={product.id} className='col-sm-6 col-md-4'>
              <Link href="/product/[id]" as={`/product/${product.id}`} passHref>
                <div className='card mb-5'>
                  <img src={product.image} className='card-img-top img-fluid' alt='' title='' width={340} height={340} />
                  <div className="card-body border-top">
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
            [0, 1, 2].map((num) => (
              <div key={num} className='col-sm-6 col-md-4'>
                loading...
              </div>
            ))
          )}
      </div>
    </div>
  )
}
