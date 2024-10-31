"use client"

import React from "react"

const Footer = () => {
    return (
        <>
            <section className="footer">
                <div className="content">
                    <h1>Subscribe Our Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.</p>

                    <form action="">
                    <input type="email" placeholder="Enter your email"/>
                    <button>Get a Quote</button>
                </form>
                </div>

                <div className="poster">
                    <img src="footer-house.png" alt="Footer image" />
                </div>
            </section>
        </>
    )
}

export default Footer;