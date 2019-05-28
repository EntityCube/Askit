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



list = document.getElementById("surveys-listing-container")







firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser)
        document.getElementById("accountButtons").innerHTML = `<button class="btn-outline" onclick="logout()">Logout</button>`

        firebase.database().ref().child("Users").child(firebaseUser.uid).child("surveys").on('value', snap => {
            console.log(snap.val())
            var data = snap.val()

            if (data == null) {
                list.innerHTML = "<h2>you have no surveys</h2>"
            }

            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    //console.log(key + " -> " + data[key]);
                    console.log(key);
                    list.innerHTML += `<a style="border:3px solid white; margin:2px; padding:10px ; display:inline-block" href="https://askit.netlify.com/results#` + key + `">` + key + `</a>`
                }
            }

        })

    } else {
        alert("no account")
        console.log('not logged in')
        document.getElementById("accountButtons").innerHTML = `<a href="signup.html"><button>Sign Up</button></a>
          <a href="login.html"><button class="btn-outline">Sign In</button></a>`
    }
})

function logout() {
    console.log("logged out")
    firebase.auth().signOut()
}