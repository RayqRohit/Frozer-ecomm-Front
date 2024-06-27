import React from 'react'
import './Popular.css'
import data_product from "../components/Assets/data"
import Item from "../components/items/item"

const Popular = () => {
  return (
    <div className='popular'>

    <h1>Popular In Women</h1>
    <hr />

    <div className="popular-item">
        {
            data_product.map((item,i)=>{

                return <Item key={i} image={item.image} name={item.name} id={item.id} new_price={item.new_price} old_price={item.old_price} />
            })
        }
    </div>

    </div>
  )
}

export default Popular