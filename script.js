// Linking Buttons (Add Question, Submit), input , Question number , submit box (hidden), survey submit button , survey topic input, survey.html next button, survey answer input
Btn_Add_Question = document.getElementsByClassName("add-question-button")[0]
Btn_Submit = document.getElementById("submit-button")
Input_Question = document.getElementsByClassName("question-input")[0]
Number_Question = document.getElementsByClassName("label")[0]
Box_Submit = document.getElementById("submit-box")
Btn_Create_Survey = document.getElementById("create-survey-button")
Input_Survey_Topic = document.getElementById("survey-topic-input")





//Adding Event listener (Add Question, Submit, Create Survey)
Btn_Submit.addEventListener("click", Submit)
Btn_Create_Survey.addEventListener("click", CreateSurvey)
Btn_Add_Question.addEventListener("click", AddQuestion)

// Variables


// Functions for buttons
function AddQuestion() {
    if (Input_Question.value == false) {
        alert("there nothing written here")
    } else if (Input_Question.value.length > 101) {
        alert("exceeded character limit of question")
    }
    
    else {
        Questions.push(Input_Question.value)
        Input_Question.value = ""
        console.log(Questions)
        console.log(Questions.length)
        Number_Question.innerHTML = "Question " + (Questions.length + 1)
    }
}

function Submit() {
    if (Questions.length == false) {
        alert("please add a question for your survey")
    } else {
        Box_Submit.style.display = "block"
    }
}

function CreateSurvey() {
    if (Input_Survey_Topic.value == false) {
        alert("please add a topic")
    } else {
        // upload all questions to db with topic as reference
        Box_Submit.style.display = "none"
    }
}