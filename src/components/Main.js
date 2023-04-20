import CartItem from './CartItem'

export default function Main({ cart, updateCart }) {

    return (
        <main id="cart">
            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {
                    	cart.map(item => 
                    		<CartItem 
                    			key={item.grocery.id}
                    			item={item}
                    			cart={cart}
                    			updateCart={updateCart}
                    		/>
                    	)
                    }
                </ul>
            </div>

            <div className="total-section">
                <div>
                    <h3>Total</h3>
                </div>

                <div>
                    <span className="total-number">
                    	£{cart.reduce((sum, item) => sum + item.count*item.grocery.price, 0).toFixed(2)}
                    </span>
                </div>
            </div>
        </main>
    )
}
