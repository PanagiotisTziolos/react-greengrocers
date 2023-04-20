import Grocery from "./Grocery"

export default function CartItem({ item, cart, updateCart }) {
    const handleRemove = () => {
		const newCart = [...cart]
		const indexOfItem = newCart.findIndex(cartItem => cartItem.grocery.id === item.grocery.id)
		
		if (newCart[indexOfItem].count > 1)
			newCart[indexOfItem].count--
		else
			newCart.splice(indexOfItem, 1)
			
		updateCart(newCart)
    }

    const handleAdd = () => {
		updateCart(cart.map(cartItem => {
			if (cartItem.grocery.id === item.grocery.id)
				cartItem.count++
			return cartItem
		}))
    }
    
    return (
        <li>
            <Grocery key={item.grocery.id} imageName={item.grocery.id} />

            <p>{item.grocery.name}</p>

            <button onClick={handleRemove} className="quantity-btn remove-btn center">-</button>

            <span className="quantity-text center">{item.count}</span>

            <button onClick={handleAdd} className="quantity-btn add-btn center">+</button>
        </li>
    )
}
