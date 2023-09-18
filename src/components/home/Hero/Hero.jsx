import React from 'react'
import "./hero.css"
import Heading from '../../common/Heading';
import background from "../../../assets/background-1.mp4"

const Hero = () => {
  return (
    <>
        <section className="hero">
        <div className="overlay"></div>
        <video src={background} autoPlay loop muted style={{outline: "none", border: "none"}}>
        </video>
            <div className="container">
                <Heading title="Explore your Best Property" subtitle="Find New and Featured Property in your Desired Location" />
                <form className='flex'>
                    <div className="box">
                        <span>City/Street</span>
                        <input type="text" placeholder='Location'/>
                    </div>

                    <div className="box">
                        <span>Bedroom</span>
                        <input type="text" placeholder='No. of Bedrooms'/>
                    </div>

                    <div className="box">
                        <span>Price Range</span>
                        <input type="text" placeholder='Select a Range'/>
                    </div>

                    <div className="box">
                        <h4>Advance Filter</h4>
                    </div>

                    <button className='btn'>
                        <i className='fa fa-search'></i>
                    </button>

                </form>
            </div>
        </section>
    </>
  )
}

export default Hero
