# React Firebase

## Problem statement

    Make a navbar with dummy buttons, there should be a notification
    icon among others, when a user clicks on this icon a sort of drop
    down list should appear with notifications sent from firebase, the
    body down below just needs to have 1 button that pushes a document
    to a collection in firestore. When this doc is added, a notification
    should appear. This navbar and drop-down should also be styled with
    normal css.

    The pushed doc can contain any type of random non recurring data

## Further improvements

- No of notifications to be shown on top of notifications icon (0 to 9+)
- Handle slow connections (Add loading animations on loading data)
- Handle offline app (Add you're offline, retry)
- Mark as read and delete notification (Add buttons at the right-end: [tick] [cross])

## Dev

First of all, install packages using `npm install`

The `firebase.js` file is removed from because of security reasons.
To run the app
1. Create file `firebase.js` in `/src/util`
2. Copy your firebase configurations from firebase console
3. Put the configurations in this file in the following pattern

```javascript
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}
firebase.initializeApp(firebaseConfig)

export default firebase
```