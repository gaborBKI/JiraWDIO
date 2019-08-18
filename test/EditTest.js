const assert = require('assert');
const creds = require('./config/creds');
const issueData = require('./config/issueData');
const basePage = new (require('./model/BasePage'))();
const loginPage = new (require('./model/LoginPage'))();
const createPage = new (require('./model/CreatePage'))();
const issuePage = new (require('./model/IssuePage'))();
const issueModal = new (require('./model/IssueModal'))();

describe('Codecool Jira create Issue tests', () => {

    let editedSummary = 'Edited summary #1908';
    let editedType = 'Task';

    before(() => {
        basePage.open();
        loginPage.tryLogin(creds.user, creds.password);
        createPage.openCreateModal();
        issueModal.createIssue(issueData.projectName, issueData.type, issueData.summary);
        basePage.search(issueData.summary);
    });

    it('Should let me change the title of an issue', () => {
        issuePage.editSummary(editedSummary);
        assert.equal(editedSummary, issuePage.getIssueSummary().getText(),
            'Issue was not renamed, it is: ' + issuePage.getIssueSummary().getText() + 'insted of: ' + editedSummary);
    });

    it('Should let me change the type of an issue', () => {
        issuePage.openEditModal();
        issueModal.selectIssueType('Task');
        issueModal.confirmChanges();
        assert.equal(editedType, issuePage.getIssueTypeValue(),
            'Issue type was not changed, it is: ' + issuePage.getIssueTypeValue());
    });

    it('Should let me delete an issue', () => {
        issuePage.deleteViewedIssue();
        assert.equal(true, issuePage.checkDeleteSuccessStatus(), 'Issue was not removed');
    });

});