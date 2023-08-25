import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'



function Navbar() {
    const [showSearchField, setShowSearchField] = useState(false);

    const toggleSearchField = () => {
        setShowSearchField(!showSearchField);
    };
    return (
        <div className='Navbar'>

            <nav class="nav">
                <img class="nav__collapser" src="https://raw.githubusercontent.com/JamminCoder/grid_navbar/master/menu.svg" alt="Collapse"/>
                <img src={logo} alt="Logo"class="nav__brand"/>

               {/*  */}
                <div class="nav__collapsable">
                    <a href="#">Cafe Menu</a>
                    <a href="#">About Us</a>
                    <a href="#">Find Us</a>
                    <a href="#">Alowishus Catering</a>
                
                    <div class="nav__cta">
                    <button class="button" >BUY GIFTS VOUCHERS</button>
                      
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar