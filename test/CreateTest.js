const assert = require('assert');
const creds = require('./config/creds');
const issueData = require('./config/issueData');
const basePage = new (require('./model/BasePage'))();
const loginPage = new (require('./model/LoginPage'))();
const createPage = new (require('./model/CreatePage'))();
const issuePage = new (require('./model/IssuePage'))();
const issueModal = new (require('./model/IssueModal'))();

describe('Codecool Jira create Issue tests', () => {

    let issueType;

    before(() => {
        basePage.open();
        loginPage.tryLogin(creds.user, creds.password);
        createPage.openCreateModal();
        issueModal.selectProject(issueData.workingProject);
    });

    it('Should let me create BUG type issues', () => {
        issueType = 'Bug';
        issueModal.selectIssueType(issueType);
        assert.equal(issueType, issueModal.getChosenIssueType(), 'Could not select BUG type issue.');
    });

    it('Should let me create Task type issues', () => {
        issueType = 'Task';
        issueModal.selectIssueType(issueType);
        assert.equal(issueType, issueModal.getChosenIssueType(), 'Could not select TASK type issue.');
    });

    it('Should let me create Story type issues', () => {
        issueType = 'Story';
        issueModal.selectIssueType(issueType);
        assert.equal(issueType, issueModal.getChosenIssueType(), 'Could not select STORY type issue.');
    });

    it('Should save an issue once I fill the required fields and click the create button in the modal', () => {
        issueModal.createIssue(issueData.type, issueData.projectName, issueData.summary);
        basePage.search(issueData.summary);
        assert.equal(issueData.summary, issuePage.getIssueSummary().getText(), 'Issue was not created');
    });

    after(() => {
        issuePage.deleteViewedIssue();
    })

});