module.exports = class IssueModal {

    get successPopUp(){
        return $('#aui-flag-container > div > div > a');
    }

    get okButton(){
        return $('#create-issue-submit');
    }

    get projectName(){
        return $('#project-field');
    }

    get issueSummary(){
        return $('#summary');
    }

    get issueTypeField(){
        return $('#issuetype-field');
    }

    get updateBtn(){
        return $('#edit-issue-submit');
    }

    getChosenIssueType(){
        return this.issueTypeField.getValue();
    }

    createIssue(issueType, projectName, summary){
        this.selectProject(projectName);
        this.selectIssueType(issueType);
        this.addSummary(summary);
        this.okButton.waitForEnabled();
        this.okButton.click();
        this.successPopUp.waitForExist();
    }

    selectIssueType(issueType){
        this.issueTypeField.waitForEnabled();
        this.issueTypeField.click();
        this.issueTypeField.addValue(issueType);
        browser.keys('Tab');
    }

    selectProject(projectName){
        this.projectName.waitForEnabled();
        this.projectName.click();
        this.projectName.addValue(projectName);
        browser.keys('Tab');
    }

    addSummary(summary){
        this.issueSummary.waitForEnabled();
        this.issueSummary.click();
        this.issueSummary.addValue(summary);
        browser.keys('Tab');
    }

    confirmChanges(){
        this.updateBtn.waitForEnabled();
        this.updateBtn.click();
    }

};