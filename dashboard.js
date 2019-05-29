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



function CopyToClipboard(value) {
    const el = document.createElement('textarea');
    el.value = "https://askit.netlify.com/survey#" + value
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}

function deleteSurvey(value) {
    firebase.database().ref().child("PublicSurveys").child(value).set(null)
    firebase.database().ref().child("Users").child(userId).child("surveys").child(value).set(null)
}



firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        userId = firebaseUser.uid
        document.getElementById("accountButtons").innerHTML = `<a href="dashboard.html" style="visibility:hidden"><button>Results</button></a>
        <button class="btn-outline" onclick="logout()">Logout</button>`
        firebase.database().ref().child("Users").child(firebaseUser.uid).child("surveys").on('value', snap => {
            //list.innerHTML = ""
            console.log(snap.val())
            var data = snap.val()

            if (data == null) {
                list.innerHTML = "<h2>you have no surveys</h2>"
            }

            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    //console.log(key + " -> " + data[key]);
                    console.log(key);
                    console.log(data[key])


                    var date = new Date(data[key][0])

                    var options = {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    };

                    var time = date.toLocaleTimeString('en-US', options);
                    var day = date.toLocaleDateString('en-GB', {
                        timeZone: 'UTC'
                    });
                    list.innerHTML += `<div class="surveys-listing"><a href="https://askit.netlify.com/results#` + key + `">` + `<button>` + data[key][1] + `</button>` + `</a> <br> ` + time + `<br>` + day + `<br>` + `<button onclick="CopyToClipboard('` + key + `')">` + "Copy url" + `</button>` + `<br>` + `<button onclick="deleteSurvey('` + key + `')">` + "Delete Survey" + `</button>` + `</div>`
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