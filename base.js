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

if (getCookie('data') != "") {
    console.log(getCookie('data'))

    cookie_Data = getCookie('data')


    var win = window.open('https://askit.netlify/results.html#' + cookie_Data, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        window.location.href = window.location.href = "/results.html#" + cookie_Data
    }

    createCookie('data', '', 1000);
}