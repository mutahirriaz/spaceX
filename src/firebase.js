import firebase from 'firebase'

const Config ={
        apiKey: "AIzaSyBWtIgX0jlsdAsyYr77gIf-lLpMzsP1DzY",
        authDomain: "spacex-mutahir.firebaseapp.com",
        projectId: "spacex-mutahir",
        storageBucket: "spacex-mutahir.appspot.com",
        messagingSenderId: "35409669083",
        appId: "1:35409669083:web:562abd31b02717fda155fe",
        measurementId: "G-M5EGY846M3"
}

firebase.initializeApp(Config);

export default firebase