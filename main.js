function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

var createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

if (getCookie('data') != "") {

    cookie_Data = getCookie('data')
    //document.getElementById("Last_Results_Popup_Box").style.display = "block"
    //createCookie('data', '', 1000)

}

function closeLastResultsPopupBox() {
    document.getElementById("Last_Results_Popup_Box").style.display = "none"
}

function openLastResults() {
    window.location.href = window.location.href = "/results.html#" + cookie_Data
}


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


firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser)
        document.getElementById("accountButtons").innerHTML = `<a href="results.html"><button>Results</button></a>
        <button class="btn-outline" onclick="logout()">Logout</button>`
    } else {
        console.log('not logged in')
        document.getElementById("accountButtons").innerHTML = `<a href="signup.html"><button>Sign Up</button></a>
        <a href="login.html"><button class="btn-outline">Sign In</button></a>`
    }
})

function logout() {
    console.log("logged out")
    firebase.auth().signOut()
}