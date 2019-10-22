import React from 'react'
import './ItemCart.css'

const ItemCart = ({noOfItems = 0, price=0.00}) => {
  return (
    <div className="div">
      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
      <span className="items">{noOfItems} items</span>
      <span className="price">$ {price}</span>
    </div>
  )
}

export default ItemCart;