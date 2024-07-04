import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1>Redux Shopping Cart</h1>
      </header>
      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  )
}

export default App