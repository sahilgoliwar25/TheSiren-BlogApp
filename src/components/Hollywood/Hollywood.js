import React, { useContext } from 'react'
import { Store } from '../ContextAPI'


function Hollywood () {
  const [DData] = useContext(Store);
  console.log(DData);
  return (
    <>
    <div>Hollywood</div>
    {DData.filter((item)=> item.cat ==='Hollywood').map((data, index) =>{
      return(
        <div key={index}>
        <h1>{data.heading}</h1>
        <img src={data.image} alt='Not Found'/>
        </div>
      )
    })}
    </>
  )
}

export default Hollywood