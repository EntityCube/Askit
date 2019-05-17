QStack = document.getElementById("result")
NameMension = document.getElementById("NameMention")


Questions = ["fav color?", "fav car?", "fav city?"]

//Range function to stack in order

const range = (start, end) => {
    const length = end - start;
    return Array.from({
        length
    }, (_, i) => start + i);
}



function StackOne(i) {
    QStack.innerHTML = QStack.innerHTML + " <p class='question'>" + i + ". " + Questions[i - 1] + "</p> <p class='answer'>Answer of Question x </p> "
}

dbDataLocation = "demo"

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

// Get Survey attended users
const AttendedUsersRef = firebase.database().ref().child(dbDataLocation).child('Results');
AttendedUsersRef.on('value', snap => AttendedUsers = snap.val())
AttendedUsersRef.on('value', function () {
    MensionNames()
})



// Get Survey Questions
const QuestionsRef = firebase.database().ref().child(dbDataLocation).child('questions');
QuestionsRef.on('value', snap => Questions = snap.val())
QuestionsRef.on('value', function () {
    StartStacking()
})



function StartStacking() {
    for (i of range(1, Questions.length + 1)) {
        StackOne(i)
    }
}

function MensionNames() {

    for (property in AttendedUsers) {
        console.log(property.property)
        NameMension.innerText = NameMension.innerText + " " + property + " ,"
    }
    NameMension.innerText = NameMension.innerText.slice(0, -2)
}