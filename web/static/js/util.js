export function getCSRFToken() {
    return window.langue_csrf_token;
}

// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
export function emailIsValid(email) {
    var re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    return re.test(email);
}
