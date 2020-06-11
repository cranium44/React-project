import React from 'react'
import Mac from '../../images/mac.png'
import './ItemInfoCard.css'

const ItemInfoCard = (props) => {
  return (
    <div className="cardthumb">
      <div className="cardthumb_image">
        <img src={Mac} alt="macbook"/>
      </div>
      <div className="cardthumb_contents">
          <p>{props.product}</p>
          <div className="stars">
              <i class="fa fa-star yellow" aria-hidden="true"></i>
              <i class="fa fa-star yellow" aria-hidden="true"></i>
              <i class="fa fa-star yellow" aria-hidden="true"></i>
              <i class="fa fa-star yellow" aria-hidden="true"></i>
              <i class="fa fa-star grey" aria-hidden="true"></i>
          </div>
          <div className="prices">
              <div className="newprice">$ {props.newPrice}</div>
              <div className="oldprice">$ {props.oldPrice}</div>
          </div>
      </div>
    </div>
  )
}

ItemInfoCard.defaultProps = {
    hot: true,
    product: "Apple Macbook Pro",
    oldPrice: 699,
    newPrice: 499
}

export default ItemInfoCard
