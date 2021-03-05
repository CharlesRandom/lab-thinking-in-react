import React from 'react'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
  return (
    <div>
      Products
      {products.map((product,idx) => <ProductRow key={idx} {...product} />)}
    </div>
  )
}

export default ProductTable