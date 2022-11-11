import React, {useState, useEffect } from 'react'
import AllProducts from './AllProducts'

const url=`https://fakestoreapi.com/products`

const Products = () => {

    const [products, setProducts]=useState([])
    // const [category]=useParams();

    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setProducts(data))
        ;
    },[])
    
  return (
    <div>
        {products?.map(products=><AllProducts products={products} />)}
    </div>
  )
}

export default Products
