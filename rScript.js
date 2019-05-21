QStack = document.getElementById("result")
NameMension = document.getElementById("NameMention")


Questions = ["fav color?", "fav car?", "fav city?"]




answerData = []
CurrentAnswerBlock = ""
bgColor = " "
AbgColor = []
AbgColor2 = []

Users = []

testLoad = false

//Range function to stack in order

const range = (start, end) => {
    const length = end - start;
    return Array.from({
        length
    }, (_, i) => start + i);
}


// Stack Question and Answers
function StackOne(i) {
    Qstart = "<div class='question'>"
    Astart = "<p class='answer' >"
    Pclose = " </div>"
    Panswer = answerData[0][i - 1]
    NumberOfAnswers = answerData.length
    PQuestion = QStack.innerHTML + Qstart + '<div class="Qnumber">' + i + ". " + '</div>' + '<div class="Qcontent">' + Questions[i - 1] + '</div>' + Pclose
    PAnswer = Astart + Panswer + Pclose

    for (k of range(0, NumberOfAnswers)) {
        Astart = "<div class='answer'>"

        PAnswer = Astart + `<div class='OneAnswerWrapper'><div class='Ublock' style='background:linear-gradient( 45deg ,` + AbgColor[k] + "," + AbgColor2[k] + `); padding: 2px; border-radius:0.3em; padding-left:5px;padding-right:5px'>` + Users[k] + ":" + "</div>" + "<div class='rainbow'>" + answerData[k][i - 1] + "</div></div>" + Pclose
        CurrentAnswerBlock = CurrentAnswerBlock + PAnswer
    }

    QStack.innerHTML = PQuestion + CurrentAnswerBlock
    CurrentAnswerBlock = ""
}

function StackReload(i) {

    Qstart = "<p class='question'>"
    Astart = "<p class='answer' >"
    Pclose = " </div>"

    if (answerData[0][i - 1] == null) {
        Panswer = ""
    } else {
        Panswer = answerData[0][i - 1]
    }
    NumberOfAnswers = answerData.length
    PQuestion = QStack.innerHTML + Qstart + i + ". " + Questions[i - 1] + Pclose
    PAnswer = Astart + Panswer + Pclose



    for (k of range(0, NumberOfAnswers - 1)) {
        Astart = "<div class='answer'>"

        PAnswer = Astart + `<div class='OneAnswerWrapper'><div class='Ublock' style='background:linear-gradient( 45deg ,` + AbgColor[k] + "," + AbgColor2[k] + `); padding: 2px; border-radius:0.3em; padding-left:5px;padding-right:5px'>` + Users[k] + ":" + "</div>" + "<div class='rainbow'>" + answerData[k][i - 1] + "</div></div>" + Pclose
        CurrentAnswerBlock = CurrentAnswerBlock + PAnswer
    }

    QStack.innerHTML = PQuestion + CurrentAnswerBlock
    CurrentAnswerBlock = ""
}

function StackQuestionsOnly(i) {

    Qstart = "<p class='question'>"
    Pclose = " </div>"
    PQuestion = QStack.innerHTML + Qstart + i + ". " + Questions[i - 1] + Pclose

    QStack.innerHTML = PQuestion
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

// Create Buttons
function createButtons() {
    document.getElementById("surveyLink").innerHTML = " <button style='margin-bottom:35px' onclick='CopyToClipboard()'>Copy Survey Link</button> "
}



// Randomiser
function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// Get Survey Questions
const QuestionsRef = firebase.database().ref().child(dbDataLocation).child('questions');
QuestionsRef.on('value', snap => Questions = snap.val())
"</p><p class='answer'>"
QuestionsRef.on('value', function () {
    if (Questions !== null) {
        //StartStacking()
        console.log(" ")
    }
})

// Get Survey attended users
const AttendedUsersRef = firebase.database().ref().child(dbDataLocation).child('Results');
AttendedUsersRef.on('value', snap => AttendedUsers = snap.val())
AttendedUsersRef.on('value', function () {
    if (AttendedUsers !== null) {
        NameMension.innerText = "Answers of"

        MensionNames()

        if (testLoad == false) {
            QStack.innerHTML = ""
            StartStacking()
        } else {
            QStack.innerHTML = ""
            StartReloading()
        }



        testLoad = true


    } else {
        NameMension.innerHTML = "<span style='font-weight:10'>No Results Right Now , <br> Share <a href='https://askit.netlify.com/survey.html#" + dbDataLocation + "'>this</a> url to your friends to see results</span>";
        createButtons()
        StartQuestionsOnly()
    }

})


// Call to Stack by Questions length
function StartStacking() {
    for (i of range(1, Questions.length + 1)) {
        StackOne(i)
    }
}

function StartReloading() {
    QStack.innerHTML = ""
    for (i of range(1, Questions.length + 1)) {
        StackReload(i)

    }
}

function StartQuestionsOnly() {
    testLoad = true
    for (i of range(1, Questions.length + 1)) {
        StackQuestionsOnly(i)

    }
}

function CopyToClipboard() {
    const el = document.createElement('textarea');
    el.value = "https://askit.netlify.com/survey.html#" + dbDataLocation;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}


// Get All Users who attended the survey
function MensionNames() {

    j = 0


    createButtons()


    for (property in AttendedUsers) {

        red = getRandomInteger(5, 250)
        green = getRandomInteger(5, 80)
        blue = getRandomInteger(5, 200)
        bgColor = "rgba(" + red + "," + green + "," + blue + ",0.6)"

        red2 = red + 50
        if (red2 > 255) {
            red2 -= getRandomInteger(10, 50) + 50
        }
        green2 = green
        blue2 = blue
        bgColor2 = "rgba(" + red2 + "," + green2 + "," + blue2 + ",0.3)"



        AbgColor[j] = bgColor
        AbgColor2[j] = bgColor2

        Users[j] = property
        NameMension.innerHTML = "Survey Results"
        //NameMension.innerHTML = NameMension.innerHTML + /*" <span style='background:linear-gradient( 45deg ," + bgColor + "," + bgColor2 + ");border-radius:0.2em;padding:1px'>" */ " <span style='padding:1px'>" + property + "</span>  ,"
        const AnswersRef = firebase.database().ref().child(dbDataLocation).child('Results').child(property).child('answers')
        AnswersRef.on('value', snap => answerData[j] = snap.val())
        AnswersRef.on('value', function () {
            console.log("hello")
        })
        j++;
    }
    //NameMension.innerHTML = NameMension.innerHTML.slice(0, -2)

}

///////// Cookie functions below

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