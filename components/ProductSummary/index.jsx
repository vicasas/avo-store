import AddToCart from "@components/AddToCart"

export default function ProductSummary({ product }) {
  return (
    <section className='row mb-4'>
      <div className='col-sm-5 d-flex justify-content-center'>
        <img src={product.image} className='img-fluid' alt='' title='' width={340} height={340} />
      </div>
      <div className='col-sm-7'>
        <h1 className='h4'>{product.name}</h1>
        <div>
          <div className='mb-1'>{product.price}</div>
          <div className='py-1 mb-3 text-uppercase'>
            <span className='chip'>{`sku: ${product.sku}`}</span>
          </div>
        </div>
        <AddToCart product={product} />
      </div>
      <style jsx>{`
        .chip {
          vertical-align: baseline;
          margin: 0 .14285714em;
          background-color: #e8e8e8;
          padding: .3833em .433em;
          color: rgba(0,0,0,.6);
          text-transform: uppercase;
          font-size: .75714286rem;
          border-radius: .28571429rem;
        }
      `}</style>
    </section>
  )
}
