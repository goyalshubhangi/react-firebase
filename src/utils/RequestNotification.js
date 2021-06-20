import React, { Component } from 'react'

export default class RequestNotification extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    requestNotificationPermission() {
        Notification.requestPermission()
            .then(permission => {
                alert("Permission : " + permission)
            })
    }

    render() {
        return (
            <button onClick={this.requestNotificationPermission}>Request notification permission</button>
        )
    }
}
