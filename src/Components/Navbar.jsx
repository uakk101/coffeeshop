import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [showSearchField, setShowSearchField] = useState(false);

    const toggleSearchField = () => {
        setShowSearchField(!showSearchField);
    };
    return (
        <div className='Navbar'>
            <div className="logo"></div>

            <ul className='Manu'>
                <li className="list">Home</li>
                <li className="list">About</li>
                <li className="list">Services</li>
                <li className="list">Contact</li>
            </ul>

            <div className='Icon'>
                <button className="search-button" onClick={toggleSearchField}>
                    Search
                </button>
                {showSearchField && (
                    <input
                        type="text"
                        className="search-field"
                        placeholder="Enter your search"
                    />
                )}
                <div>icon</div>
            </div>
        </div>
    )
}

export default Navbar