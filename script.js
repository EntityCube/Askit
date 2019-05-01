// Linking Buttons (Add Question, Submit), input , Question number
Btn_Add_Question = document.getElementsByClassName("add-question-button")[0]
Btn_Submit = document.getElementById("submit-button")
Input_Question = document.getElementsByClassName("question-input")[0]
Number_Question = document.getElementsByClassName("label")[0]

// Adding Event listener (Add Question, Submit)
Btn_Add_Question.addEventListener("click",AddQuestion)
Btn_Submit.addEventListener("click",Submit)

// Variables
Questions = []

// Functions for buttons
function AddQuestion() {
    Questions.push(Input_Question.value)
    Input_Question.value = ""
    console.log(Questions)
    console.log(Questions.length)
    Number_Question.innerHTML = "Question " + (Questions.length + 1)
}

function Submit() {
    alert("Survey Heading : \n create link")
}

