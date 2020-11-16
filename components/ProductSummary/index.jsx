import AddToCart from "@components/AddToCart";
import styles from './product-summary.module.css'

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
            <span className={styles.chip}>{`sku: ${product.sku}`}</span>
          </div>
        </div>
        <AddToCart />
      </div>
    </section>
  )
}
