answers = []

// Linking
Btn_Next = document.getElementById("next-button")
Label_Question = document.getElementsByClassName("survey-question")[0]
Label_Question_num = document.getElementById("survey-question-number")
Input_Answer = document.getElementsByClassName("answer-input")[0]
Box_Answer = document.getElementById("answer-box")
Box_Answer_Background = document.getElementById("pop-up-container")
Btn_Submit = document.getElementById("answer-submit-button")
Input_Attended_User_Name = document.getElementById("answering-user-name-input")

// Adding Event listeners
Btn_Next.addEventListener("click", LoadNextQuestion)
Btn_Submit.addEventListener("click", SubmitAnswers)

// dispable next button until data loads
Btn_Next.disabled = true;

function LoadNextQuestion() {
    if (data.length != answers.length) {
        if (Input_Answer.value == false) {
            alert("please write the answer")
        } else if (Input_Answer.value.length > 101) {
            alert("character limit exceeded (max 100 characters)")
        } else {
            answers.push(Input_Answer.value)

            Input_Answer.value = ""

            if (data.length == answers.length) {
                Box_Answer_Background.style.display = "block"
                Box_Answer.style.display = "block"

                var divsToHide = document.getElementsByClassName("step");
                for (var i = 0; i < divsToHide.length; i++) {
                    //divsToHide[i].style.visibility = "hidden";
                    divsToHide[i].style.display = "none";
                }

            } else {
                Label_Question_num.innerHTML = "Question " + (answers.length + 1)
                Label_Question.innerHTML = data[answers.length]
            }

        }
    }
}

function SubmitAnswers() {
    // Need to upload answers to database
    if (Input_Attended_User_Name.value != false) {
        SendAnswersToDB(Input_Attended_User_Name.value, answers)
    } else {
        alert("type your name")
    }
}