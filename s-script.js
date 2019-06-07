answers = [];
// Linking
Btn_Next = document.getElementById("next-button");
Label_Question = document.getElementsByClassName("survey-question")[0];
Label_Question_num = document.getElementById("survey-question-number");
Input_Answer = document.getElementsByClassName("answer-input")[0];
Box_Answer = document.getElementById("answer-box");
Box_Answer_Background = document.getElementById("pop-up-container");
Btn_Submit = document.getElementById("answer-submit-button");
Input_Attended_User_Name = document.getElementById("answering-user-name-input");
popupActionLogout = document.getElementById("popup-action-logout");
accountSigninSignup = document.getElementById("account-signin-signup")
popupActionAlreadyAttempted = document.getElementById("popup-action-already-attempted")

Btn_Next.disabled = true;

accountSigninSignup.innerHTML = `		Already have account?<br>
<a href="login.html#` + window.location.hash.substring(1) + `"><button>Sign in</button></a> <br>
Create an account<br>
<a href="signup.html#` +
    window.location.hash.substring(1) +
    `"><button>Sign Up</button></a>
`

// Adding Event listeners
Btn_Next.addEventListener("click", LoadNextQuestion);
Btn_Submit.addEventListener("click", SubmitAnswers);

// Execute a function when the user releases a key on the keyboard
Input_Answer.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        Btn_Next.click();
    }
});


// dispable next button until data loads
Btn_Next.disabled = true;

function LoadNextQuestion() {

    if (data.length != answers.length) {
        if (Input_Answer.value == false) {
            Input_Answer.focus();
        } else if (Input_Answer.value.length > 101) {
            alert("character limit exceeded (max 100 characters)");
        } else {
            answers.push(Input_Answer.value);

            Input_Answer.value = "";

            if (data.length == answers.length) {
                Box_Answer_Background.style.display = "block";
                Box_Answer.style.display = "block";


                var divsToHide = document.getElementsByClassName("step");
                for (var i = 0; i < divsToHide.length; i++) {
                    //divsToHide[i].style.visibility = "hidden";
                    divsToHide[i].style.display = "none";
                }

            } else {
                Label_Question_num.innerHTML = "Question " + (answers.length + 1);
                Label_Question.innerHTML = data[answers.length];
            }

        }
    }
}

function SubmitAnswers() {
    // Need to upload answers to database
    if (acname == "") {
        if (Input_Attended_User_Name.value != false) {
            SendAnswersToDB(Input_Attended_User_Name.value, answers);
        } else {
            alert(" ");
        }
    } else {
        SendAnswersToDB(acname, answers);
    }

}

function logout() {
    popupActionLogout.style.display = "block";
}

function logoutNo() {
    popupActionLogout.style.display = "none";
}

function logoutYes() {
    actionLogout = true;
    firebase.auth().signOut()
    popupActionLogout.style.display = "none";
    window.location.href = "/";
}