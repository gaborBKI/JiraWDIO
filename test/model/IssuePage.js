module.exports = class BasePage {

    get issueSummary(){
        return $('#summary-val');
    }

    get editBtn(){
        return $('#edit-issue > span.trigger-label');
    }

    get confirmSummaryChangeBtn(){
        return $('#summary-form > div.save-options > button.aui-button.submit > span')
    }

    get issueType(){
        return $('#type-val');
    }

    get editableSummaryField(){
        return $('#summary');
    }

    get moreOptions(){
        return $('#opsbar-operations_more');
    }

    get deleteButton(){
        return $('#delete-issue > a > span');
    }

    get deleteConfirmForm(){
        return $('#delete-issue');
    }

    get confirmDeleteButton(){
        return $('#delete-issue-submit');
    }

    get deleteSuccesPopUp(){
        return $('#aui-flag-container > div > div');
    }

    getIssueSummary(){
        this.issueSummary.waitForEnabled();
        return this.issueSummary;
    }

    deleteViewedIssue(){
        this.moreOptions.click();
        this.deleteButton.waitForEnabled();
        this.deleteButton.click();
        this.deleteConfirmForm.waitForExist();
        this.confirmDeleteButton.click();
    }

    editSummary(editedSummary){
        this.issueSummary.waitForEnabled();
        this.issueSummary.click();
        this.editableSummaryField.setValue(editedSummary);
        this.confirmSummaryChangeBtn.waitForEnabled();
        this.confirmSummaryChangeBtn.click();
    }

    openEditModal(){
        this.editBtn.waitForEnabled();
        this.editBtn.click();
    }

    checkDeleteSuccessStatus(){
        return this.deleteSuccesPopUp.isExisting();
    }

    getIssueTypeValue(){
        this.issueType.waitForEnabled();
        return this.issueType;
    }

};