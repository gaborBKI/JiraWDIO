const assert = require('assert');
const loginPage = new (require('./model/LoginPage'))();
const creds = require('./config/creds');

describe('Codecool Jira environment', () => {

    const expectedText = 'User profile for User 7';

    beforeEach(() => {
        loginPage.open();
    });

    it('Should NOT let me log in with invalid credentials', () => {
        loginPage.tryLogin("wrongUser", "worsePassword");
        assert.equal(true, loginPage.errorMessage.isDisplayed(), 'Error was NOT thrown for wrong username / password login attempt.');
    });

    it('Should NOT let me log in with empty credentials', () => {
        loginPage.tryLogin('','');
        assert.equal(true, loginPage.errorMessage.isDisplayed(), 'Error was NOT thrown for trying to log in with empty credentials.');
    });

    it('Should let me log in with valid credentials', () => {
        loginPage.tryLogin(creds.user, creds.password);
        loginPage.profileIcon.waitForDisplayed();
        assert.equal(expectedText, loginPage.getProfileText(), 'FAILED to log in with valid username and password.');
    });

});