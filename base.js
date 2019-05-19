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

    setTimeout(function () {
        window.location.href = "/results.html#" + cookie_Data
    }, 300)

    createCookie('data', '', 1000)

}