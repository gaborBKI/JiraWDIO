module.exports = class LoginPage {

    get username() {
        return $('#login-form-username');
    }

    get password() {
        return $('#login-form-password');
    }

    get loginButton() {
        return $('#login');
    }

    get profileIcon() {
        return $('#header-details-user-fullname > span > span > img');
    }

    get errorMessage() {
        return $('#usernameerror');
    }

    open() {
        browser.url('https://jira.codecool.codecanvas.hu/secure/Dashboard.jspa');
    }

    tryLogin(username, password) {
        this.username.addValue(username);
        this.password.addValue(password);
        this.loginButton.click();
    }

    getProfileText() {
        return this.profileIcon.getAttribute('alt');
    }

};