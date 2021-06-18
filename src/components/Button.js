import React from 'react'
import firebase from '../utils/firebase'
import randomWords from 'random-words'

function Button() {
    const createNotification = (e) => {
        let title = randomWords({
            exactly: 1,
            wordsPerString: 5,
            formatter: (word, index) => {
                return index === 0 ? word.slice(0, 1).toUpperCase().concat(word.slice(1)) : word;
            }
        })
        title = title[0]

        let notificationRef = firebase.database().ref("Notifications")
        let notif = {
            title,
            read: false
        }
        notificationRef.push(notif).then(() => {
            console.log(notif)
        })
    }

    return (
        <div onClick={createNotification} className="sendNotificationBtn">+</div>
    )
}

export default Button