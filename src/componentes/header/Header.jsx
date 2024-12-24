import React from 'react'
import './Header.css'
import Icono from '../assets/Icon.png'

const Home = () => {
   
    return(
        <header>
            <nav>
                <div className="Icon">
                    <img src={Icono} className="Icono" />
                </div>
                <ul>
                    <li>Get inspired</li>
                    <li>Start creating</li>
                    <li>Past recipes</li>
                </ul>
                <button>start now</button>
            </nav>
        </header>
        
    )
}

export default Home