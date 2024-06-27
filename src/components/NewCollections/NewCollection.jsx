import React from 'react'
import './NewCollection.css'
import new_collection from "../Assets/new_collections"
import Item from "../items/item"

const NewCollection = () => {


  
  return (
    <div className='new-collection'>


        <h1>New Collections</h1>
        <hr />

        <div className="collections">

            {
                new_collection.map((item,i)=>{

                    return <Item key={i} image={item.image} name={item.name} id={item.id} new_price={item.new_price} old_price={item.old_price} />
                })
            }

        </div>



    </div>
  )
}

export default NewCollection