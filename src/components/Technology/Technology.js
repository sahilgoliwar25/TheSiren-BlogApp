import React, { useContext } from 'react'
import { Store } from '../ContextAPI';

const Technology = () => {
  const [DData] = useContext(Store);
  console.log(DData);
  return (
    <>
    <div>Technology</div>
    {DData.filter((item)=> item.cat ==='Technology').map((data, index) =>{
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

export default Technology