import React from "react";
import { footer } from "../../data/Data";
import './footer.css'

const Footer = () => {
  return (
    <>

      <footer>
        <div className="container">
            <div className="box">
                <div className="logo">
                    <img src="../images/new-logo.png" alt="" />
                    <h2>Do You Need Help With Anything?</h2>
                    <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>


                    <div className="input flex">
                        <input type="text" placeholder="Email Address" name="" id="" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            { footer.map((val, index)=> {
                return (
                    <div className="box" key={index}>
                        <h3>{val.title}</h3>
                        <ul>
                            {val.text.map((items, index)=> {
                                return (
                                    <li key={index}>{items.list}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }) }
        </div>
      </footer>

      <div className="legal">
        <span>© 2021 RentUP. Designd By Anshuman Parmar.</span>
      </div>
    </>
  );
};

export default Footer;
