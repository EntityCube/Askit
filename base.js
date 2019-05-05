Btn_loadSurveyPage = document.getElementsByClassName("survey_submit_button")[0]
Btn_loadSurveyPage.addEventListener("click", loadSurveyPage)

Input_surveyCode = document.getElementsByClassName("link_box")[0]

function loadSurveyPage() {
    if (Input_surveyCode.value == false) {
        alert("please paste the code of survey")
    } else {
        window.location.href = "survey.html" + "#" + Input_surveyCode.value
    }
}