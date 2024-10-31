"use client"

import React from "react"
import Header from "./Components/Header"
import Herosection from "./Components/Herosection"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Agents from "./Components/Agents"
import Footer from "./Components/Footer"


const Page = () => {
    return (
        <>
            <main>
              <Header/>
              <Herosection/>
              <About/>
              <Projects/>
              <Agents/>
              <Footer/>
            </main>
        </>
    )
}

export default Page;