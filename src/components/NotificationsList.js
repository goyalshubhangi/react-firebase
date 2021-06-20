import React from 'react'
import { useEffect, useState } from 'react';
import firebase from '../utils/firebase'
import Notification from './Notification';

function NotificationsList() {
    const [notificationsList, setNotificationsList] = useState()

    useEffect(() => {
        const notificationRef = firebase.database().ref("Notifications")
        notificationRef.limitToLast(10).on("value", (snap) => {
            let notifications = snap.val()
            let notificationsList = []
            for (let id in notifications) {
                notificationsList.push({ id, ...notifications[id] })
            }
            notificationsList.reverse()

            console.log(notificationsList)
            setNotificationsList(notificationsList)
        })
    }, [])

    return (
        <ul>
            {notificationsList
                ? notificationsList.map((notification, index) => <Notification notification={notification} key={index} />)
                : <li className="none">No notifications yet!</li>}
        </ul>
    )
}

export default NotificationsList