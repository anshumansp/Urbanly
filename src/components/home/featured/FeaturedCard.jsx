import React from 'react'
import { featured } from '../../data/Data'

const FeaturedCard = () => {
  return (
    <>
        <div className="content grid5 mtop">
            {featured.map((items, index)=> (
                <div className='box scale' key={index}>
                    <img src={items.cover} alt="featured" />
                    <h4>{items.name}</h4>
                    <label>{items.total}</label>
                </div>
            ))}
        </div> 
    </>
  )
}

export default FeaturedCard
