import React, { useEffect, useState } from 'react'

const menurl=`'https://fakestoreapi.com/products/category/men's clothing`
const MenClothing = () => {
    const [men, setMen]=useState([])
    useEffect(()=>{
        fetch(menurl).then(res=>res.json()).then(data=>setMen(data))
    })
    
  return (
    <div>
    
    
    </div>
  )
}

export default MenClothing
