// test database result variable
data = ["what is my age?", "do i like cats or dogs more?", "which is my favourite car?"]

answers = []

// Linking
Btn_Next = document.getElementById("next-button")
Label_Question = document.getElementsByClassName("survey-question-label")[0]
Label_Question_num = document.getElementById("survey-question-number")
Input_Answer = document.getElementsByClassName("answer-input")[0]
Box_Answer = document.getElementById("answer-box")

// Adding Event listeners
Btn_Next.addEventListener("click", LoadNextQuestion)


//loading first value to question
Label_Question.innerHTML = data[0]


function LoadNextQuestion() {
    if (data.length != answers.length) {
    if (Input_Answer.value == false) {
        alert("please write the answer")
    } else if (Input_Answer.value.length > 101) {
        alert("character limit exceeded")
    } else {
        console.log(Input_Answer.value)
        answers.push(Input_Answer)
        Input_Answer.value = ""
        console.log(answers.length)
        Label_Question_num.innerHTML = "Question " + (answers.length + 1)
        Label_Question.innerHTML = data[answers.length]

        if (data.length == answers.length) {
            console.log("completed")
            Box_Answer.style.display = "block"

        }

    }}
}