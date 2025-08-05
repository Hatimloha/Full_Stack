// 2. Build a ProductsList component that takes an array of products and displays each title and price.

import React from 'react'

const ProductsList = () => {
    
const products = [
        {id:"mango", price: 80},
        {id: "oil", price: 150},
        {id: "banana", price: 30}, 
        {id: "curd", price: 40},
        {id: "milk", price: 65} 
      ];
      
  return (
    <>
    <ul>
        {products.map((item) => {
            return <li key={item.id}>{`${item.id}:${item.price}`}</li>
        })}
    </ul>
    </>
  )
}

export default ProductsList