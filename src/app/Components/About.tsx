"use client"

import React from "react"

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="heading">
                    <p>Three steps, Three minutes.</p>
                    <h1>Everything should be this easy</h1>
                </div>

                <div className="about-cards">
                    <div className="answer">
                        <img src="messages.png" alt="Messages icon" />
                        <h2>Answer Question</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae laboriosam magnam.</p>
                    </div>
                    <div className="quote">
                        <img src="sms.png" alt="sms icon" />
                        <h2>Select a quote</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae laboriosam magnam.</p>
                        
                    </div>
                    <div className="register">
                        <img src="edit.png" alt="edit icon" />
                        <h2>Get registered</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae laboriosam magnam.</p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About;