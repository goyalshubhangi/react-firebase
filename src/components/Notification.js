import React from 'react'
// import firebase from '../utils/firebase'

function Notification({ notification }) {
    /* const deleteNotification = () => {
        const notificationRef = firebase.database().ref("Notifications").child(notification.id)
        notificationRef.remove()
    }

    const markAsRead = () => {
        const notificationRef = firebase.database().ref("Notifications").child(notification.id)
        notificationRef.update({
            read: !notification.read
        })
    } */

    return (
        <li className={notification.read ? "read" : ""}>{notification.title}</li>
    )
}

export default Notification