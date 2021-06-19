import React from 'react'
import { useEffect, useState } from 'react';
import firebase from '../utils/firebase'
import Notification from './Notification';

function NotificationsList() {
    const [notificationsList, setNotificationsList] = useState()
    const [snackbar, setSnackbar] = useState({snackbar:false})
    const [notificationCount, setNotificationCount] = useState(0)


    useEffect(() => {
        const notificationRef = firebase.database().ref("Notifications")
        notificationRef.limitToLast(10).on("value", (snap) => {
            let notifications = snap.val()
            let notificationsList = []
            for (let id in notifications) {
                notificationsList.push({ id, ...notifications[id] })
            }
            setNotificationCount(notificationsList.length)
            notificationsList.reverse()
            setNotificationsList(notificationsList)
            setSnackbar(false)
            setTimeout(() => {
                setSnackbar(true)
            }, 1000);
        })
    }, [])

    return (
        <div>
        <ul>
            {notificationsList
                ? notificationsList.map((notification, index) => <Notification notification={notification} key={index} />)
                : <li className="none">No notifications yet!</li>}
        </ul>
        <div className={snackbar?"snackbar":"snackbar open"}>
            You have {notificationCount} new notification(s)!!
        </div>
        </div>
    )
}

export default NotificationsList