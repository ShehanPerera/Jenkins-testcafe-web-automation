const { Selector } = require('testcafe');

class appCreatePageElements {
    constructor() {
        this.appCreateBtn = Selector('#apps-create-new-btn');
        this.votingApp = Selector('#voteButton');
        this.appName = Selector('#create-app-name');
        this.appDescription = Selector('#create-app-description');
        this.shortCodeList = Selector('[name="smsShortCode"]');
        this.shortCodeOption = this.shortCodeList.find('option');
        this.appKeyWord = Selector('[name="appKeyWord"]');
        this.candidateCode = Selector('[name="candidateCode"]');
        this.generalSettings = Selector('b').withText('General Settings');
        this.responseSettings = Selector('b').withText('Response Settings');
        this.chargingSettings = Selector('b').withText('Charging Settings');
        this.appSubmit = Selector('#create-submit-btn');
        this.confirmBtn = Selector('button').withText('Confirm');
        this.chargeFromSelector = Selector('#alert-charge-from');
        this.contactChargeFromSelector = Selector('#contact-charge-from');
        this.chargeFromSubs = Selector('#alert-charge-subscriber');
        this.chargeFromAppUser = Selector('#contact-charge-voter');
        this.chargingModal = Selector('#alert-charge-model');
        this.chargingModalOption = this.chargingModal.find('option');

        this.appNameText = Selector('#app-name');
        this.descriptionText = Selector('#app-description-text');
        this.shortCodeText = Selector('#app-rk-shortcode');
        this.expiryDateOnSwitch = Selector('#expireDateSwitch');
        this.updateViaSMSOption = Selector('#updateContentDiv').child(1);
        this.allowedNumberTextBox = Selector('[ng-model="contentUpdaters.authors"]');
        this.responseMsgTxt = Selector('[ng-model="contactSettings.responseMessage"]');

        //Voting Errors
        this.nameEmptyError = Selector('[ng-show="appNameValidation.showError"]').child(0);
        this.descriptionEmptyError = Selector('[ng-show="appDescriptionValidation.show"]').child(0);
        this.shortCodeEmptyError = Selector('[ng-show="shortCodeValidation.showError"]').child(0);
        this.keywordEmptyError = Selector('[ng-show="rkValidation.showError"]').child(0);
        this.candidateEmptyError = Selector('[ng-show="votingCandidateValidation.show"]').child(0);
        this.allowedMobileNoError = Selector('[ng-show="contentUpdateUndefinedValidation.show"]').child(0);
        this.endDateError = Selector('[ng-show="validityPeriodUndefinedValidation.show"]').child(0)

    }
}

module.exports = appCreatePageElements