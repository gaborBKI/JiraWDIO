module.exports = class CreatePage {

    get createButton() {
        return $('#create_link');
    }

    openCreateModal(){
        this.createButton.waitForEnabled();
        this.createButton.click();
    }

};