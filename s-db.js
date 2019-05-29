dbDataLocation = "demo"
acname = ""

dbDataLocation = window.location.hash.substring(1)

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





const dataRef = firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child('questions');
/*
dataRef.on('value', snap => data = snap.val())
dataRef.on('value', function () {
  console.log(data)
  Label_Question.innerHTML = data[0]
  Btn_Next.disabled = false;
}) 
*/
dataRef.on('value', snap => {
  data = snap.val()
  if (data == null) {
    alert("you are trying to find a survey that has been removed")
    return
  }
  Label_Question.innerHTML = data[0]
  Btn_Next.disabled = false;
})

const creatorRef = firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child('creator');
creatorRef.on('value', snap => document.getElementById("creator_name").innerHTML = snap.val())


function SendAnswersToDB(username, result) {
  firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child("Results").child(username).set(username)
  firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child("Results").child(username).child("answers").set(result)
  firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child("Results").child(username).child("time").set(Date())

  if (acname != "") {
    firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child("Results").child(username).child("account").set("true", function (error) {
      if (error) {
        console.log("Data could not be saved." + error);
      } else {
        setTimeout(function () {
          window.location.href = "/"
        }, 500)
      }
    })


  } else {
    firebase.database().ref().child("PublicSurveys").child(dbDataLocation).child("Results").child(username).child("account").set("false", function (error) {
      if (error) {
        console.log("Data could not be saved." + error);
      } else {
        setTimeout(function () {
          window.location.href = "/"
        }, 500)
      }
    })
  }

  hideAll()
  Label_Question_num.innerHTML = "Submitted"

}

function hideAll() {

  Btn_Next.style.display = "none"
  Label_Question.style.display = "none"
  Input_Answer.style.display = "none"
  Box_Answer.style.display = "none"
  Btn_Submit.style.display = "none"
  Input_Attended_User_Name.style.display = "none"
}


firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    firebase.database().ref().child("Users").child(firebaseUser.uid).child("Credentials").on('value', snap => acname = snap.val()[0])
    console.log(firebaseUser)
    document.getElementById("accountButtons").innerHTML = `<a href="dashboard.html"><button>Results</button></a>
        <button class="btn-outline" onclick="logout()">Logout</button>`


    document.getElementById("answering-user-name-input").style.display = "none"
    document.getElementById("answer-submit-button").style.marginTop = "0px"

  } else {
    console.log('not logged in')
    document.getElementById("accountButtons").innerHTML = `<a href="signup.html"><button>Sign Up</button></a>
        <a href="login.html"><button class="btn-outline">Sign In</button></a>`
  }
})

function logout() {
  console.log("logged out")
  firebase.auth().signOut()
  acname = ""
}