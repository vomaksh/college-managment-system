import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBFmLScrj0KLd7AmW-ROpyEPXbRjWmLPTU",
  authDomain: "nit-hackathon.firebaseapp.com",
  databaseURL: "https://nit-hackathon.firebaseio.com",
  projectId: "nit-hackathon",
  storageBucket: "nit-hackathon.appspot.com",
  messagingSenderId: "160914449048"
};

export default firebase.initializeApp(config);

