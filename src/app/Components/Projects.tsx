"use client"

import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Projects = () => {
    return (
        <>
            <section className="projects" id="projects">
                <div className="heading">
                    <p>Best Projects of the Years</p>
                    <div className="inside-heading">
                        <h1>Our Recent Projects</h1>
                        <div className="arrow">
                            <FontAwesomeIcon className="left-arrow" icon={faChevronLeft} />
                            <FontAwesomeIcon className="right-arrow" icon={faChevronRight} />
                        </div>
                    </div>
                </div>

                <div className="project-cards">
                    <div className="card card1">
                        <img src="house1.png" alt="house" />
                        <div className="content">
                            <h3>Sobha Hearland || Villas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium.</p>
                            <img src="ratings.png" alt="ratings" />
                        </div>
                    </div>

                    <div className="card card2">
                        <div className="image-container">
                            <img src="house2.png" alt="house" />
                            <div className="wrapper"></div>
                        </div>

                        <div className="content">
                            <h3>Sobha Hearland || Villas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium.</p>
                            <img src="ratings.png" alt="ratings" />
                        </div>

                    </div>

                    <div className="card card3">
                        <div className="image-container">
                            <img src="house3.png" alt="house" />
                            <div className="wrapper"></div>
                        </div>

                        <div className="content">
                            <h3>Sobha Hearland || Villas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam praesentium.</p>
                            <img src="ratings.png" alt="ratings" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;