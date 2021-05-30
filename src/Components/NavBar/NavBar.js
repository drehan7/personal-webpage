import classes from './NavBar.module.css'
import React, { useState } from 'react'
const NavBar = () => {
    const [click, setClick] = useState(false)


    const handleClick = () => setClick(!click)

    const mobileMenuClick = () => { setClick(false) }

    return (
        <div className={classes.NavBar}>
            <nav>
                <div>
                    <ul className={click ? classes.NavMenuActive : classes.NavMenu} >
                        <li onClick={mobileMenuClick}>
                            <a href="/#home">Home</a>
                        </li>
                        <li onClick={mobileMenuClick}>
                            <a href="/#about">About</a>
                        </li>
                        <li onClick={mobileMenuClick}>
                            <a href="/#projects">Projects</a>
                        </li>
                        <li onClick={mobileMenuClick} >
                            <a href="/#resume">Resume</a>
                        </li>
                        <li onClick={mobileMenuClick}>
                            <a href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button onClick={handleClick}><i className={click ? 'fa fa-times' : 'fa fa-bars'}></i></button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
