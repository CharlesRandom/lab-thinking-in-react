import React from 'react'

const ProductRow = ({ name, price, stocked }) => {
  return (
    <div>
      <span style={{color:`${stocked ? 'black' : 'red'}`}}>{name}</span>
      <span>.....</span>
      <span>{price}</span>
    </div>
  )
}

export default ProductRow