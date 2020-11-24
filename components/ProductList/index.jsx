import Link from 'next/link'

export default function ProductList({ products }) {
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product) => (
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
          ))}
      </div>
    </div>
  )
}
