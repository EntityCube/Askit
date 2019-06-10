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

//get elements

txtEmail = document.getElementById("email");
txtPassword = document.getElementById("password")
btnLogin = document.getElementById("btnLogin")

btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message))

})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        if (window.location.hash.substring(1) == "cs") {

            alert("cs")
            // window.location.href = "/create-survey.html"

        } else
        if (window.location.hash[1] == "-") {

            alert("-")
            //window.location.href = "/survey.html#" + window.location.hash.substring(1)

        }
        if (window.location.hash[1] == "d") {

            alert("d")
            // window.location.href = "/dashboard.html#"

        } else

        {
            alert("no match")
            alert(window.location.hash.substring(1))
            //window.location.href = "/"
        }
    } else {
        console.log('not logged in')
    }
})