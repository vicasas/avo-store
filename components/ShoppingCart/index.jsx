import IconBasket from "@components/Icons/IconBasket"

export default function ShoppingCart({ cartCount, name }) {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 99) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      )
    }
    return `(${cartCount})`
  }

  return (
    <>
      <IconBasket />
      <span className='ml-2'>
        {name}
        <span className='ml-1'>{showCartCount()}</span>
      </span>
    </>
  )
}
