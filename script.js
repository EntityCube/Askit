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







//Adding Event listener (Add Question, Submit, Create Survey)
Btn_Submit.addEventListener("click", Submit)
Btn_Create_Survey.addEventListener("click", CreateSurvey)
Btn_Add_Question.addEventListener("click", AddQuestion)

// Variables
Questions = []

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

function showKey(code) {
    Box_Submit.style.display = "none"
	Box_Submit_Container.style.display = "none"
    hideAll()
    Number_Question.innerHTML = "share this url to your friends"
    survey_url = "https://askit.netlify.com/survey.html#" + code
    Label_Heading.innerHTML = "<a href=" + survey_url + ">" + survey_url + "</a>" 
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