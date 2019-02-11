import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBEAmZ3ZHYtD-ogI1vz_LCZb4yd8GpVod4',
    authDomain: 'chatbox-app-125b7.firebaseapp.com',
    databaseURL: 'https://chatbox-app-125b7.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base