dbDataLocation = "demo"

dbDataLocation = window.location.hash.substring(1)
console.log(" DB LOCATION : " + dbDataLocation)

data = []
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNchpc1VOQO9RRuY_LRvb-eCbzK6Uva7E",
  authDomain: "askit-2f176.firebaseapp.com",
  databaseURL: "https://askit-2f176.firebaseio.com",
  projectId: "askit-2f176",
  storageBucket: "askit-2f176.appspot.com",
  messagingSenderId: "653490212793",
  appId: "1:653490212793:web:6c97202ffc216578"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const dbRefObject = firebase.database().ref().child('object');



const dataRef = firebase.database().ref().child(dbDataLocation);
dataRef.on('value', snap => data = snap.val())
dataRef.on('value', function () {
  Label_Question.innerHTML = data[0]
  Btn_Next.disabled = false;
})
