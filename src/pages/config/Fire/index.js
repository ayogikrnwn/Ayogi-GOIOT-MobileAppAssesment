import firebase from 'firebase';


const config={
    apiKey: "AIzaSyD-2CI9NBu6DyOfIH7eBBcHnphqSFDj72o",
    authDomain: "myhouz-64315.firebaseapp.com",
    projectId: "myhouz-64315",
    storageBucket: "myhouz-64315.appspot.com",
    messagingSenderId: "1055596161576",
    appId: "1:1055596161576:web:d0424f0121d917b03ce31d",
    databaseURL: "https://myhouz-64315-default-rtdb.firebaseio.com",


}

const Fire = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default Fire;
