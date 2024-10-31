"use client"

import React from "react"

const Agents = () => {
    return (
        <>
            <section className="agents" id="agents">
                <div className="heading">
                    <h1>We are a global, boutique real estate brokerage</h1>
                </div>

                <div className="cover">
                    <div className="content">
                        <h2>The transfer of real estate</h2>
                        <p className="agents-paragraph">Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.</p>
                        
                        <div className="btn">
                            <button>Book Now!</button>
                            <button>Read more</button>
                        </div>

                        <div className="details">
                            <div className="customers">
                                <p className="bold-text">12+</p>
                                <p className="names">Customers</p>
                            </div>

                            <div className="offices">
                                <p className="bold-text">14+</p>
                                <p className="names">Offices</p>

                            </div>

                            <div className="students">
                                <p className="bold-text">10+</p>
                                <p className="names">Students</p>
                            </div>
                        </div>
                    </div>

                    <div className="image">
                        <img src="agents.png" alt="Agents" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Agents;