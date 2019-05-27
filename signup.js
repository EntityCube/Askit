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

// verify input

function verifyInput() {

}


//get elements

txtEmail = document.getElementById("email");
txtPassword = document.getElementById("password")
btnSignUp = document.getElementById("btnSignUp")

btnSignUp.addEventListener('click', e => {
    if (verifyInput()) {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message))
    } else {
        alert("bad data")
    }


})

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        firebaseUser.displayName = "Shabil"
        console.log(firebaseUser)
        console.log(firebaseUser.email)
        window.location.href = window.location.href = "/"
    } else {
        console.log('not logged in')
    }
})