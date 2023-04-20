import './styles/reset.css'
import './styles/index.css'

import { useState } from 'react'

import initialStoreItems from './store-items'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
[
  {
    storeItem,
    count
  }
]
*/

console.log(initialStoreItems)

export default function App() {
    const [storeItems, setStoreItems] = useState(initialStoreItems)
    const [cartItems, setCartItems] = useState([])

	return (
        <>
            <Header
              greengrocers={storeItems}
              cartItems={cartItems}
              updateCart={setCartItems}
            />

            <Main
              cart={cartItems}
              updateCart={setCartItems}
            />

            <Footer />
		</>
	)
}
