import React from 'react'
import './Styles/index.css'

function Navbar() {
  return (
    <>
    <nav>
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <h1>
                        LOGO
                    </h1>
                </div>
                <div className="navbar-link-wrapper">
                    <div className="navbar-links">
                        <ul className='nav-link-wrapper'>
                            <li className='nav-link'>
                                <button>
                                    <a href="/">Home</a>
                                </button>
                            </li>
                            <li className='nav-link'>
                                <button>
                                    <a href="/">About</a>
                                </button>
                            </li>
                            <li className='nav-link'>
                                <button>
                                    <a href="/">Plans</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-signup-btn">
                        <li className='nav-signup-btn-li'>
                                <button>
                                    <a href="/">Sign Up</a>
                                </button>
                        </li>
                    </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar