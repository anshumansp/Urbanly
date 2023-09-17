import React from 'react'
import Heading from '../../common/Heading'
import RecentCard from './RecentCard'
import './Recent.css'

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
            <Heading title="Recent Property Listed" subtitle="Explore the latest additions to our property listings, featuring a diverse range of homes, apartments, and investment opportunities." />
            <RecentCard />
        </div>
      </section>
    </>
  ) 
}

export default Recent