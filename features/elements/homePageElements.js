const { ClientFunction, Selector } = require('testcafe');

class homePageElements {
    constructor() {
        this.dashboardCards = Selector('.dashboard-card-section');
        this.profileSection = Selector('.main-header__right-profile-name');
        this.logoutBtn = Selector('.main-header__dropdown-menu').child(2).find('.fa-sign-out').parent().parent();
        this.xpand = Selector('div').withText('XPAND').nth(6).find('img');
        this.vote = Selector('#voteIcon');
        this.alert = Selector('#alertIcon');
        this.scheduleMsg = Selector('#scheduleIcon');
        this.contact = Selector('#contactIcon');
        this.inzpire = Selector('div').withText('INZPIRE').nth(6).find('img');
        this.username = Selector('.main-header__right-profile-name');

        //complete profile modal elements
        this.completeBtn = Selector('button').withText("Complete");
        this.completeProfileTopic = Selector('.main-topic');
        this.completeProfileSubTxt = Selector('.sub-text');
    }
}

module.exports = homePageElements;