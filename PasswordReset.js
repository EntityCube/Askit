ResetEmail = document.getElementById("resetEmail");
ResetBtn = document.getElementById("btnReset");
topContainer = document.getElementById("top-container")

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




ResetEmail.addEventListener('input', e => {
    if (ResetEmail.value != "") {
        ResetBtn.disabled = false;
    } else {
        ResetBtn.disabled = true;
    }
})


ResetBtn.addEventListener('click', e => {


    const email = ResetEmail.value;
    if (validateEmail(email)) {
        firebase.auth().sendPasswordResetEmail(email);
        topContainer.innerHTML = "<h3>If this email address is associated with your account, then a password reset email will be sent.</h3>"


    } else {
        alert("make sure your email is valid");
    }

})



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}