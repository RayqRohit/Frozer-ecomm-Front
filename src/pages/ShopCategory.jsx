import React from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from "../context/ShopContext"
import { useContext } from "react"
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import Item from "../components/items/item"


const ShopCategory = (props) => {

  // using all products from context
  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category'>

      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing 1-12
          </span>
          of 36 results
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>


      <div className='shopcategory-products'>
        {
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} image={item.image} name={item.name} id={item.id} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null
            }
          })
        }
      </div>


      <div className="shopcategory-loadmore">
        <button>Explore More</button>
      </div>

    </div>
  )
}

export default ShopCategory