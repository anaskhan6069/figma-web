"use client"

import React from "react"

const Herosection = () => {
    return (
        <>
            <section className="hero-section">
                <div className="content">
                    <p>Welcome to Realstate</p>
                    <h1>Manage Your Property</h1>
                    <p className="home-para">Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>
                    <form action="">
                        <input type="email" placeholder="Enter your email" />
                        <button>Get a Quote</button>
                    </form>
                </div>

                <div className="poster">
                    <img src="poster.png" alt="poster" />
                </div>
            </section>
        </>
    )
}

export default Herosection;