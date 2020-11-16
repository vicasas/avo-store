import AddToCart from "@components/AddToCart";

export default function ProductSummary({ product }) {
  return (
    <section className='row mb-4'>
      <div className='col-sm-5'>
        <img src={product.image} className='img-fluid' alt='' title='' width={340} height={340} />
      </div>
      <div className='col-sm-7'>
        <h1 className='h4'>{product.name}</h1>
        <div>
          <div>{product.price}</div>
          <div className='py-1 text-uppercase d-inline-block'>
            <span>{`sku: ${product.sku}`}</span>
          </div>
        </div>
        <AddToCart />
      </div>
    </section>
  )
}
