// Linking Buttons (Add Question, Submit), input , Question number , submit box (hidden), survey submit button , survey topic input, survey.html next button, survey answer input
Btn_Add_Question = document.getElementsByClassName("add-question-button")[0]
Btn_Submit = document.getElementById("submit-button")
Input_Question = document.getElementsByClassName("question-input")[0]
Number_Question = document.getElementsByClassName("label")[0]
Box_Submit = document.getElementById("submit-box")
Box_Submit_Container = document.getElementById("pop-up-container")
Btn_Create_Survey = document.getElementById("create-survey-button")
Input_Survey_Topic = document.getElementById("survey-topic-input")
Label_Heading = document.getElementById("heading")
Btn_Show_Results = document.getElementById("ShowResultsBtn")
Btn_Copy_Link = document.getElementById("CopyBtn")







//Adding Event listener (Add Question, Submit, Create Survey)
Btn_Submit.addEventListener("click", Submit)
Btn_Create_Survey.addEventListener("click", CreateSurvey)
Btn_Add_Question.addEventListener("click", AddQuestion)
Btn_Copy_Link.addEventListener("click", CopyToClipboard)

// Variables
Questions = []



//////Cookies

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

// check whether user has old surveys made from this website


if (getCookie('data') != "") {

    cookie_Data = getCookie('data')
    document.getElementById("Last_Results_Popup_Box").style.display = "block"
    //createCookie('data', '', 1000)
}

function closeLastResultsPopupBox() {
    document.getElementById("Last_Results_Popup_Box").style.display = "none"
}

function openLastResults() {
    window.location.href = window.location.href = "/results.html#" + cookie_Data
}

// OpenResultsPopupBox
function closeLastResultsPopupBox() {
    document.getElementById("Last_Results_Popup_Box").style.display = "none"
}

function openLastResults() {
    window.location.href = window.location.href = "/results.html#" + cookie_Data
}


// Functions for buttons
function AddQuestion() {
    if (Input_Question.value == false) {
        alert("there nothing written here")
    } else if (Input_Question.value.length > 101) {
        alert("exceeded character limit of question (max: 100)")
    } else {
        Questions.push(Input_Question.value)
        Input_Question.value = ""
        Number_Question.innerHTML = "Question " + (Questions.length + 1)
    }
}

function Submit() {
    if (Questions.length == false) {
        alert("please add a question for your survey")
    } else {
        Box_Submit.style.display = "block"
        Box_Submit_Container.style.display = "block"
    }
}

function CreateSurvey() {
    if (Input_Survey_Topic.value == false) {
        alert("please add your name")
    } else {
        // upload all questions to db with topic as reference
        storeQuestions(Questions)

    }
}

function CopyToClipboard() {
    const el = document.createElement('textarea');
    el.value = survey_url;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

}

function showKey(code) {
    createCookie('data', code, 1000)

    Box_Submit.style.display = "none"
    Box_Submit_Container.style.display = "none"
    hideAll()
    Btn_Copy_Link.style.display = "inline-block"

    Number_Question.innerHTML = "share this url to your friends"
    survey_url = "https://askit.netlify.com/survey.html#" + code
    results_url = "https://askit.netlify.com/results.html#" + code
    Label_Heading.innerHTML = "<a href=" + survey_url + " target='_blank' >" + survey_url + "</a>"
    Btn_Show_Results.innerHTML = "<a href=" + results_url + " target='_blank' >" + " <button> Show Results </button> </a > "
}

function hideAll() {
    Btn_Add_Question.style.display = "none"
    Btn_Submit.style.display = "none"
    Box_Submit_Container.style.display = "none"
    Input_Question.style.display = "none"
    //Number_Question.style.display = "none"
    Box_Submit.style.display = "none"
    Btn_Create_Survey.style.display = "none"
    Input_Survey_Topic.style.display = "none"
}