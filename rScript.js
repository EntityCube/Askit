QStack = document.getElementById("result")
NameMension = document.getElementById("NameMention")


Questions = ["fav color?", "fav car?", "fav city?"]




answerData = []
CurrentAnswerBlock = ""
bgColor = " "
AbgColor = []

//Range function to stack in order

const range = (start, end) => {
    const length = end - start;
    return Array.from({
        length
    }, (_, i) => start + i);
}


// Stack Question and Answers

function StackOne(i) {
    Qstart = "<p class='question'>"
    Astart = "<p class='answer' " + "style='background:" + "red" + "'" + ">"
    Pclose = " </p> "
    Panswer = answerData[0][i - 1]
    NumberOfAnswers = answerData.length
    PQuestion = QStack.innerHTML + Qstart + i + ". " + Questions[i - 1] + Pclose
    PAnswer = Astart + Panswer + Pclose

    for (k of range(0, NumberOfAnswers)) {
        Astart = "<p class='answer' " + "style='background:" + AbgColor[k] + "'" + ">"

        PAnswer = Astart + answerData[k][i - 1] + Pclose
        CurrentAnswerBlock = CurrentAnswerBlock + PAnswer
    }

    QStack.innerHTML = PQuestion + CurrentAnswerBlock
    CurrentAnswerBlock = ""
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
    if (AttendedUsers !== null) {
        NameMension.innerText = "Answers of"
        MensionNames()
    } else {
        NameMension.innerText = "No Results"
    }

})



// Get Survey Questions
const QuestionsRef = firebase.database().ref().child(dbDataLocation).child('questions');
QuestionsRef.on('value', snap => Questions = snap.val())
"</p> <p class='answer'>"
QuestionsRef.on('value', function () {
    if (Questions !== null) {
        StartStacking()
    }
})


// Call to Stack by Questions length
function StartStacking() {
    for (i of range(1, Questions.length + 1)) {
        StackOne(i)
    }
}

// Get All Users who attended the survey
function MensionNames() {

    j = 0



    for (property in AttendedUsers) {

        red = Math.floor(Math.random() * 100) + 0;
        green = Math.floor(Math.random() * 200) + 100;
        blue = Math.floor(Math.random() * 255) + 200;
        bgColor = "rgba(" + red + "," + green + "," + blue + ",0.3)"
        console.log(bgColor)

        AbgColor[j] = bgColor

        NameMension.innerHTML = NameMension.innerHTML + " <span style='background:" + bgColor + ";border-radius:0.2em;padding:1px'>" + property + "</span>  ,"
        const AnswersRef = firebase.database().ref().child(dbDataLocation).child('Results').child(property).child('answers')
        AnswersRef.on('value', snap => answerData[j] = snap.val())
        j++;
    }
    NameMension.innerHTML = NameMension.innerHTML.slice(0, -2)
    for (var s = 0; s < answerData.length; s++) {

    }
}