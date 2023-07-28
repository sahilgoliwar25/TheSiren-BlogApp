import React, { useContext } from 'react'
import { Store } from '../ContextAPI';


const Food = () => {
  const [DData] = useContext(Store);
  console.log(DData);
  return (
    <>
    <div>Food</div>
    {DData.filter((item)=> item.cat ==='Food').map((data, index) =>{
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

export default Food