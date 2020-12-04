const firebaseConfig = process.env.REACT_APP_API_KEY

firebase.initializeApp(firebaseConfig);

const dbRefObject = firebase.database().ref().child("object");