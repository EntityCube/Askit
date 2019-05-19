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
if (getCookie('data') != "") {

    cookie_Data = getCookie('data')
    createCookie('data', '', 1000)
    document.getElementById("Last_Results_Popup_Box").style.display = "block"


}

function closeLastResultsPopupBox() {
    document.getElementById("Last_Results_Popup_Box").style.display = "none"
}

function openLastResults() {

    window.location.href = window.location.href = "/results.html#" + cookie_Data
}