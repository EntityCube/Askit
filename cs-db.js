Input_Survey_Topic = document.getElementById("survey-topic-input").value


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


const dbRefQuestions = firebase.database().ref();


function storeQuestions(storedata) {
  //post = dbRefQuestions.push(storedata)
  post = dbRefQuestions.push()
  firebase.database().ref().child(post.key).child("questions").set(storedata)
  firebase.database().ref().child(post.key).child("creator").set(username)

  showKey(post.key)
}