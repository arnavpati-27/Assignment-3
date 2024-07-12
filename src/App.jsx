
import { useState } from "react"
import { Navbar, Footer } from "./components"
import './App.css'

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Welcome to a website about Java</h1>
                <h3>Some of the basic datatypes are:</h3>
                <ul class="java-content">
                    <li>Int</li>
                    <li>Double</li>
                    <li>Boolean</li>
                    <li>String</li>
                    <li>Array</li>
                </ul>
                <p>Java is a versatile and widely-used programming language known for its portability, robustness, <br></br>
                    and extensive use in building cross-platform applications, particularly for enterprise-level software
                    and Android development.</p>
                <img src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png"></img>
            </main>
            <Footer />
        </div>
    )
}

export default App