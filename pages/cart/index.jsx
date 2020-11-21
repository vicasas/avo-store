import CartItemList from "@components/CartItemList"
import CartSummary from "@components/CartSummary"
import { useCartMutations } from "@store/Cart"
import { useCart } from "@store/Cart"

export default function Cart() {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()

  return (
    <div className='container'>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <CartSummary totalAmount={count} />
    </div>
  )
}
