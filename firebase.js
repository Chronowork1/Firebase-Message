const firebaseConfig = {
    apiKey: "AIzaSyAd-mFe7hyWqS5HUSrYqp0a406v1J7weFo",
    authDomain: "message-version-2.firebaseapp.com",
    databaseURL: "https://message-version-2.firebaseio.com",
    projectId: "message-version-2",
    storageBucket: "message-version-2.appspot.com",
    messagingSenderId: "828896186089",
    appId: "1:828896186089:web:a9afde7c8956dad0caea78"
};

firebase.initializeApp(firebaseConfig);

const dbRefObject = firebase.database().ref().child("object");