"use client"

import React, { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faXmark, faPhone } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);

    return (
        <>

            <nav className="navbar">
                <div className="logo">
                    <img src="logo.png" alt="Web logo" />
                </div>
                <div className="navbar-inside">
                    <ul className="nav-anchors">
                        <li><Link href="#about" className="link">About us</Link></li>
                        <li><Link href="#projects" className="link">Projects</Link></li>
                        <li><Link href="#agents" className="link">Agents</Link></li>
                        <li><Link href="#services" className="link">Services</Link></li>
                        <li><Link href="#listings" className="link">Listings</Link></li>
                        <li  className="search-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    </ul>
                    <div className="nav-btn">
                        <button>Other services</button>
                        <button>Contact us</button>
                        <span className="contact-icon"><FontAwesomeIcon icon={faPhone} /></span>
                        <span>
                        <FontAwesomeIcon className={`${menuIcon ? `cross-icon` : `bar-icon`}`} icon={menuIcon ? faXmark : faBars} 
                        onClick={()=>{setMenuIcon(!menuIcon)}}/>
                        </span>
                    </div>
                </div>
            </nav>


            {/* MOBILE SIZE MENU */}
            <div className = {`mobile-menu ${menuIcon ? `show-mobile-menu` : `hide-mobile-menu`}`}>
                <ul>
                    <li><Link href="#about" className="mobile-link">About us</Link></li>
                    <li><Link href="#about" className="mobile-link">Projects</Link></li>
                    <li><Link href="#about" className="mobile-link">Agents</Link></li>
                    <li><Link href="#about" className="mobile-link">Services</Link></li>
                    <li><Link href="#about" className="mobile-link">Listings</Link></li>

                    <button className="other-services-btn">
                        Other Services
                    </button>
                </ul>
            </div>
        </>
    )
}

export default Header;