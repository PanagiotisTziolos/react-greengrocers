import Grocery from "./Grocery"

export default function Header({ greengrocers, cartItems, updateCart }) {

    const newGrocery = (grocery) => {
        return {
            grocery: grocery,
            count: 1
        }
    }
    
    const addToCart = (grocery) => {
    	const cart = [...cartItems]

    	const groceryInCart = cart.find(item => item.grocery.id === grocery.id)

    	if (groceryInCart)
    		groceryInCart.count++
    	else
    		cart.push(newGrocery(grocery))

        updateCart(cart)
    }

    return (
        <header id="store">
            <h1>Greengrocers</h1>

            <ul className="item-list store--item-list">
                {
                    greengrocers.map(g => 
                        <li>
                            <Grocery key={g.id} imageName={g.id} />
                            <button key={`button ${g.id}`} onClick={() => { addToCart(g) }}>Add to cart</button>
                        </li>
                    )
                }        
            </ul>
        </header>
    )
}
