import React from 'react'
import { useEffect, useState } from 'react';
import firebase from '../utils/firebase'
import NotificationItem from './NotificationItem';

function NotificationsList() {
    const [notificationsList, setNotificationsList] = useState()

    let showNotification = (count) => {
        if (Notification.permission !== "granted") {
            console.log("Browser has denied notification permission\nPlease provide it so you can receive updates on our services")
            return
        }

        let notif = new Notification("New notification!", {
            body: count <= 10 ? "You have " + count + " new notifications!" : "You have 10+ new notifications!",
            icon: "/favicon.ico"
        })
        notif.onclick = () => {
            notif.close()
            window.parent.focus()
        }
    }

    useEffect(() => {
        const notificationRef = firebase.database().ref("Notifications")
        notificationRef.limitToLast(11).on("value", (snap) => {
            let notifications = snap.val()
            let notificationsList = []
            let count = 0
            for (let id in notifications) {
                count++
                if (count === 11) break
                notificationsList.push({ id, ...notifications[id] })
            }
            notificationsList.reverse()

            showNotification(count)
            setNotificationsList(notificationsList)
        })
    }, [])

    return (
        <ul>
            {notificationsList
                ? notificationsList.map((notification, index) => <NotificationItem notification={notification} key={index} />)
                : <li className="none">No notifications yet!</li>}
        </ul>
    )
}

export default NotificationsList