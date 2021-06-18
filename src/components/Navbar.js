import React from 'react'
import { useState } from "react"
import NotificationsList from './NotificationsList';

function Navbar() {
    const [notificationUL, setNotificationUL] = useState({ notificationUL: false })
    const [isMenuClose, setIsMenuClose] = useState({ isMenuClose: false })

    let openUL = () => {
        setNotificationUL(!notificationUL)
    }

    let toggleMenu = () => {
        setIsMenuClose(!isMenuClose)
    }

    return (
        <nav>
            <div className={isMenuClose ? "hamburger" : "hamburger open"} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="menuOption" title="Home">
                <div className="menuIcon">🏠</div>
            </div>
            <div
                className={notificationUL ? "menuOption notifications hidden" : "menuOption notifications"}
                title="Notifications">
                <div className="menuIcon" onClick={openUL}>🔔</div>
                <NotificationsList />
            </div>
            <div className="menuOption" title="Profile">
                <div className="menuIcon">🧑</div>
            </div>
        </nav>
    )
}

export default Navbar