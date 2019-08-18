const base = require('../config/base');

module.exports = class BasePage {

    get searchBar(){
        return $('#quickSearchInput');
    }

    open(){
        browser.url(base.baseUrl);
    }

    search(text){
        this.searchBar.waitForEnabled();
        this.searchBar.addValue(text);
        browser.keys('Enter');
    }

};