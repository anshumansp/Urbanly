import React from 'react'
import { list } from '../../data/Data'

const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
            const {cover, category, name, location, price, type} = val;
            return (
                <div className='box shadow' key={index} >
                    <div className="img">
                        <img src={cover} alt="" />
                    </div>
                </div>
            )
        })}
      </div>
    </>
  )
}

export default RecentCard
