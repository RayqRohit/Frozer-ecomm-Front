import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {

  const {all_product} = React.useContext(ShopContext);
  const {productID} = useParams();

  const product = all_product.find((e) => e.id === Number(productID))

  return (
    <div>

      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />


        
    </div>
  )
}

export default Product