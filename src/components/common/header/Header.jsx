import React, { useState, useEffect } from "react";
import './header.css';
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";

const Header = () => {
    const [navlist, setNavList] = useState(false);
    const [headerStyle, setHeaderStyle] = useState(null);
    const [linkStyle, setLinkStyle] = useState(null);
    
    const hstyles = {
      backgroundColor: "#fff",
      boxShadow: "0 5px 30px rgb(0 22 84 / 10%)",
    }

    const astyles = {
      color: "#000"
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setHeaderStyle(hstyles)
        setLinkStyle(astyles)
      } else {
        setHeaderStyle(null)
        setLinkStyle(null)
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };

      // eslint-disable-next-line
    }, []);

  return (
    <>
      <header id="header" style={headerStyle}>
        <div className="container flex">
            
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="nav">
            <ul className={navlist ? "small" : "flex" }>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} style={linkStyle} >{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="button flex">
              <button className="btn1">
                <i className="fa fa-sign-out"></i>
                Sign In
              </button>
            </div>
          </div>

          <div className="toggle">
            <button onClick={()=> setNavList(!navlist)}>
                {navlist ? <i className=" fa fa-times"></i> : <i className="fa fa-bars"></i> }
            </button>
          </div> 

        </div>
      </header>
    </>
  );
};

export default Header;
