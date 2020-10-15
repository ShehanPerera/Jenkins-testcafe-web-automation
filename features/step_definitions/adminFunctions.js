const { When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const percySnapshot  = require('@percy/testcafe');
const homePageElements = require('../elements/homePageElements');
const appCreateElements = require('../elements/appCreatePageElements');
const provisioningElements = require('../elements/provisioningElements');
const commonFunctions = require('../support/commonFunctions');

let testController = null;
let homePageElement = new homePageElements();
let appCreateElement = new appCreateElements();
let provisioningElement = new provisioningElements();
let commonFunction = new commonFunctions();



Then(/^Admin click on Inzpire$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .wait(5000)
            .click(homePageElement.inzpire)
    });
});

Then(/^Admin type app name as "([^"]*)" and search the app$/, function (appName) {

    return testController
        .wait(5000)
        .typeText(provisioningElement.appSearch, appName)

});

Then(/^Admin select the app name with "([^"]*)"$/, function (appName) {

    return testController
        .click(provisioningElement.appSelect.withText(appName))

});

Then(/^Admin check details of the app$/, function () {

    return testController
        .click(provisioningElement.apiDetails, {speed: 0.05})
        .click(provisioningElement.chargingDetails)
        .click(provisioningElement.revenueShare)
        .click(provisioningElement.activityLog);
});

When(/^Admin click on change state button of the app$/, function () {

    return testController
        .click(provisioningElement.changeStateButton)
});

Then(/^Admin should be displayed verify user modal$/, function () {

    return testController
        .expect(provisioningElement.unverifiedUserModal.with({ boundTestRun: testController }).innerText).eql("Confirm Action")
        .expect(provisioningElement.unverifiedUserModalDesc.with({ boundTestRun: testController }).innerText).contains("Please")
});

Then(/^Admin should be displayed error message$/, function () {

    return testController
        .expect(provisioningElement.searchError.with({ boundTestRun: testController }).innerText).contains('Sorry, We can\'t find any applications for your search criteria, please try again');
});

Then(/^Admin type remarks as "([^"]*)"$/, function (remarks) {

    return testController
        .typeText(provisioningElement.changeStateRemarks, remarks)
});

Then(/^Admin select the status as Active Production$/, function () {

    return testController
        .typeText(provisioningElement.stateRadio)
});

Then(/^Admin click on save changes button$/, function () {

    return testController
        .typeText(provisioningElement.adminSaveChanges)
});

Then(/^Admin check active app logo$/, function () {

    return testController
        .expect(Selector(provisioningElement.activeAppLogo).exists).ok();
});

//*** General details changing

Then(/^Admin click on edit application details button of the app$/, function () {

    return testController
        .wait(1000)
        .click(provisioningElement.generaDetailsEdit)
});

Then(/^Admin click on Allowed Host Address$/, function () {

    return testController
        .click(provisioningElement.allowedHostEdit)
});

Then(/^Admin type allowed host as "([^"]*)"$/, function (allowedHostAddresses) {

    return testController
        .selectText(provisioningElement.allowedHostEdit)
        .pressKey('delete')
        .typeText(provisioningElement.allowedHostEdit, allowedHostAddresses)
});

Then(/^Admin click on Application Description$/, function () {

    return testController
        .click(provisioningElement.descriptionEdit)
});

Then(/^Admin type description as "([^"]*)"$/, function (applicationDescription) {

    return testController
        .selectText(provisioningElement.descriptionEdit)
        .pressKey('delete')
        .typeText(provisioningElement.descriptionEdit, applicationDescription)
});

Then(/^Admin click on Whitelisted Numbers$/, function () {

    return testController
        .click(provisioningElement.whitelistedNoEdit)
});

Then(/^Admin type whitelist number as "([^"]*)"$/, function (whiteListedMSISDN) {

    return testController
        .selectText(provisioningElement.whitelistedNoEdit)
        .pressKey('delete')
        .typeText(provisioningElement.whitelistedNoEdit, whiteListedMSISDN)
});

Then(/^Admin click on Blacklisted Numbers$/, function () {

    return testController
        .click(provisioningElement.blacklistedNoEdit)
});

Then(/^Admin type blacklist number as "([^"]*)"$/, function (blackListedMSISDN) {

    return testController
        .selectText(provisioningElement.blacklistedNoEdit)
        .pressKey('delete')
        .typeText(provisioningElement.blacklistedNoEdit, blackListedMSISDN)
});

Then(/^Admin click on ADVANCED$/, function () {

    return testController
        .wait(1000)
        .click(provisioningElement.generaDetailsAdvanced)
});

Then(/^Admin click on Enable Mobile Number Masking$/, function () {

    if(provisioningElement.numberMaskingEnabling.isElement){
        return testController
            .click(provisioningElement.numberMaskingEnabling)
    }

});

Then(/^Admin click on Update Application$/, function () {

    return testController
        .click(provisioningElement.generaUpdateButton)
});

//                                API details changing
//=====================================================================================
//=====================================================================================

Then(/^Admin click on API Details$/, function () {

    return testController
        .click(provisioningElement.apiDetails)
});

Then(/^Admin click on SMS API$/, function () {

    return testController
        .click(provisioningElement.smsAPI)
});

Then(/^Admin click on SMS Edit$/, function () {

    return testController
        .click(provisioningElement.smsEdit)
});

Then(/^Admin click on SMS Edit URL$/, function () {

    return testController
        .click(provisioningElement.smsEditURL)
});

Then(/^Admin type SMS Edit URL as "([^"]*)"$/, function (smsurl) {

    return testController
        .selectText(provisioningElement.smsEditURL)
        .pressKey('delete')
        .typeText(provisioningElement.smsEditURL, smsurl)
});

Then(/^Admin click on SMS Update Button$/, function () {

    return testController
        .click(provisioningElement.smsUpdateButton)
});

Then(/^Admin click on USSD API$/, function () {

    return testController
        .click(provisioningElement.ussdAPI)
});

Then(/^Admin click on USSD Edit$/, function () {

    return testController
        .click(provisioningElement.ussdEdit)
});

Then(/^Admin click on USSD Edit URL$/, function () {

    return testController
        .click(provisioningElement.ussdEditURL)
});

Then(/^Admin type USSD Edit URL as "([^"]*)"$/, function (ussdurl) {

    return testController
        .selectText(provisioningElement.ussdEditURL)
        .pressKey('delete')
        .typeText(provisioningElement.ussdEditURL, ussdurl)
});

Then(/^Admin click on USSD Update Button$/, function () {

    return testController
        .click(provisioningElement.ussdUpdateButton)
});

Then(/^Admin click on CaaS API$/, function () {

    return testController
        .click(provisioningElement.caasAPI)
});

Then(/^Admin click on CaaS Edit$/, function () {

    return testController
        .click(provisioningElement.caasEdit)
});

Then(/^Admin click on CaaS Edit URL$/, function () {

    return testController
        .click(provisioningElement.caasEditURL)
});

Then(/^Admin type CaaS Edit URL as "([^"]*)"$/, function (caasurl) {

    return testController
        .selectText(provisioningElement.caasEditURL)
        .pressKey('delete')
        .typeText(provisioningElement.caasEditURL, caasurl)
});

Then(/^Admin click on CaaS Update Button$/, function () {

    return testController
        .click(provisioningElement.caasUpdateButton)
});

Then(/^Admin click on Subscription API$/, function () {

    return testController
        .click(provisioningElement.subscriptionAPI)
});

Then(/^Admin click on Subscription Edit$/, function () {

    return testController
        .click(provisioningElement.subscriptionEdit)
});

Then(/^Admin click on Subscription URL Edit$/, function () {

    return testController
        .click(provisioningElement.subscriptionURLEdit)
});

Then(/^Admin type Subscription URL Edit as "([^"]*)"$/, function (subscriptionurl) {

    return testController
        .selectText(provisioningElement.subscriptionURLEdit)
        .pressKey('delete')
        .typeText(provisioningElement.subscriptionURLEdit, subscriptionurl)
});

Then(/^Admin click on Subscription Update Button$/, function () {

    return testController
        .click(provisioningElement.subscriptionUpdateButton)
});

//                            Charging details changing
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Charging Details$/, function () {

    return testController
        .click(provisioningElement.chargingDetails)
});

Then(/^Admin click on SMS Charging API$/, function () {

    return testController
        .click(provisioningElement.smsChargingAPI)
});

Then(/^Admin click on SMS Charging Edit$/, function () {

    return testController
        .click(provisioningElement.smsChargingEdit)
});

Then(/^Admin click on SMS Charging Amount$/, function () {

    return testController
        .click(provisioningElement.smsChargingAmount)
});

Then(/^Admin remove existing SMS Charging Amount$/, function () {

    return testController
        .selectText(provisioningElement.smsChargingAmount)
        .pressKey('delete')
});

Then(/^Admin type SMS Charging Amount as "([^"]*)"$/, function (smschargeamount) {

    return testController
        .typeText(provisioningElement.smsChargingAmount, smschargeamount)
});

Then(/^Admin click on SMS Charging Update Button$/, function () {

    return testController
        .click(provisioningElement.smsChargingUpdateButton)
});

Then(/^Admin click on USSD Charging API$/, function () {

    return testController
        .click(provisioningElement.ussdChargingAPI)
});

Then(/^Admin click on USSD Charging Edit$/, function () {

    return testController
        .click(provisioningElement.ussdChargingEdit)
});

Then(/^Admin click on USSD Charging Amount Edit$/, function () {

    return testController
        .click(provisioningElement.ussdChargingAmountEdit)
});

Then(/^Admin remove existing USSD Charging Amount$/, function () {

    return testController
        .selectText(provisioningElement.ussdChargingAmountEdit)
        .pressKey('delete')
});

Then(/^Admin type Admin click on USSD Charging Amount Edit as "([^"]*)"$/, function (ussdchargeamount) {

    return testController
        .typeText(provisioningElement.ussdChargingAmountEdit, ussdchargeamount)
});

Then(/^Admin click on USSD Charging Update Button$/, function () {

    return testController
        .click(provisioningElement.ussdChargingUpdateButton)
});

Then(/^Admin click on Subscription Charging API$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingAPI)
});

Then(/^Admin click on Subscription Charging Edit$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingEdit)
});

Then(/^Admin click on Subscription Charging Amount Postpaid Frequency Edit$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingAmountPostpaidFrequencyEdit)
});

Then(/^Admin click on Subscription Charging Amount Postpaid Frequency EditDaily$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingAmountPostpaidFrequencyEditDaily)
});

Then(/^Admin click on Subscription Charging Amount Postpaid Edit$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingAmountPostpaidEdit)
});

Then(/^Admin remove existing Subscription Charging Postpaid Amount$/, function () {

    return testController
        .selectText(provisioningElement.subscriptionChargingAmountPostpaidEdit)
        .pressKey('delete')
});

Then(/^Admin type Subscription Charging Amount Postpaid Edit as "([^"]*)"$/, function (subpostpaidchargeamount) {

    return testController
        .typeText(provisioningElement.subscriptionChargingAmountPostpaidEdit, subpostpaidchargeamount)
});

Then(/^Admin click on Subscription Charging Update Button$/, function () {

    return testController
        .click(provisioningElement.subscriptionChargingUpdateButton)
});


//                            Revenue share changes
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Revenue Share$/, function () {

    return testController
        .click(provisioningElement.revenueShare)
});

Then(/^Admin click on Revenue Share Edit$/, function () {

    return testController
        .click(provisioningElement.revenueShareEdit)
});

Then(/^Admin click on Revenue Share Percentage Edit$/, function () {

    return testController
        .click(provisioningElement.revenueSharePercentageEdit)
});

Then(/^Admin remove existing Revenue Share Precentage$/, function () {

    return testController
        .selectText(provisioningElement.revenueSharePercentageEdit)
        .pressKey('delete')
});

Then(/^Admin type Revenue Share Percentage Edit as "([^"]*)"$/, function (revenuepercentage) {

    return testController
        .typeText(provisioningElement.revenueSharePercentageEdit, revenuepercentage)
});

Then(/^Admin click on Revenue Share Update Button$/, function () {

    return testController
        .click(provisioningElement.revenueShareUpdateButton)
});


//                 Admin add NCS to user created application
//=====================================================================================
//=====================================================================================


Then(/^Admin click on NCS Add Button$/, function () {

    return testController
        .click(provisioningElement.ncsAddButton)
});

Then(/^Admin click on NCS USSD Button$/, function () {

    return testController
        .click(provisioningElement.ncsUSSDButton)
});

Then(/^Admin click on NCS CaaS Button$/, function () {

    return testController
        .click(provisioningElement.ncscaasButton)
});

Then(/^Admin click on NCS Subscription Button$/, function () {

    return testController
        .click(provisioningElement.ncsSubscriptionButton)
});

Then(/^Admin click on Inzpire Next Button$/, function () {

    return testController
        .click(provisioningElement.inzpireNextButton)
});

Then(/^Admin click on USSD URL$/, function () {

    return testController
        .click(provisioningElement.ussdURL)
});

Then(/^Admin type USSD URL as "([^"]*)"$/, function (ussdurl) {

    return testController
        .typeText(provisioningElement.ussdURL, ussdurl)
});

Then(/^Admin click on USSD Keyword$/, function () {

    return testController
        .click(provisioningElement.ussdKeyWord)
});

Then(/^Admin type USSd KeyWord as "([^"]*)"$/, function (ussdkeyword) {

    return testController
        .typeText(provisioningElement.ussdKeyWord, ussdkeyword)
});

Then(/^Admin click on USSD Charging Amount$/, function () {

    return testController
        .click(provisioningElement.ussdChargingAmount)
});

Then(/^Admin remove existing on USSD Charging Amount$/, function () {

    return testController
        .selectText(provisioningElement.ussdChargingAmount)
        .pressKey('delete')
});

Then(/^Admin type USSD ChargingAmount as "([^"]*)"$/, function (ussdchrgamount) {

    return testController
        .typeText(provisioningElement.ussdChargingAmount, ussdchrgamount)
});

Then(/^Admin click on CaaS URL$/, function () {

    return testController
        .click(provisioningElement.caasURL)
});

Then(/^Admin type CaaS URL as "([^"]*)"$/, function (caasurl) {

    return testController
        .typeText(provisioningElement.caasURL, caasurl)
});

Then(/^Admin click on CaaS Enable Mobile Account for Mobitel$/, function () {

    return testController
        .click(provisioningElement.caasEnableMobileAccountforMobitel)
});

Then(/^Admin click on Subscription Response Message$/, function () {

    return testController
        .click(provisioningElement.subscriptionResponseMessage)
});

Then(/^Admin type Subscription Response Message as "([^"]*)"$/, function (subrespmsg) {

    return testController
        .typeText(provisioningElement.subscriptionResponseMessage, subrespmsg)
});

Then(/^Admin click on Unsubscription Response Message$/, function () {

    return testController
        .click(provisioningElement.unsubscriptionResponseMessage)
});

Then(/^Admin type Unsubscription Response Message as "([^"]*)"$/, function (unsubrespmsg) {

    return testController
        .typeText(provisioningElement.unsubscriptionResponseMessage, unsubrespmsg)
});

Then(/^Admin click on Subscription URL$/, function () {

    return testController
        .click(provisioningElement.subscriptionURL)
});

Then(/^Admin type Subscription URL as "([^"]*)"$/, function (suburl) {

    return testController
        .typeText(provisioningElement.subscriptionURL, suburl)
});

Then(/^Admin click on Prepaid Charging Frequency$/, function () {

    return testController
        .click(provisioningElement.prepaidChargingFrequency)
});

Then(/^Admin click on Prepaid Daily$/, function () {

    return testController
        .click(provisioningElement.prepaidDaily)
});

Then(/^Admin click on Prepaid Charging Amount$/, function () {

    return testController
        .click(provisioningElement.prepaidChargingAmount)
});

Then(/^Admin remove existing Charging Amount$/, function () {

    return testController
        .selectText(provisioningElement.prepaidChargingAmount)
        .pressKey('delete')
});

Then(/^Admin type Prepaid Charging Amount as "([^"]*)"$/, function (prepdchrgamount) {

    return testController
        .typeText(provisioningElement.prepaidChargingAmount, prepdchrgamount)
});

Then(/^Admin click on Postpaid Charging Frequency$/, function () {

    return testController
        .click(provisioningElement.postpaidChargingFrequency)
});

Then(/^Admin click on Postpaid Daily$/, function () {

    return testController
        .click(provisioningElement.postpaidDaily)
});

Then(/^Admin click on Postpaid Charging Amount$/, function () {

    return testController
        .click(provisioningElement.postpaidChargingAmount)
});

Then(/^Admin remove existing Postpaid Charging Amount$/, function () {

    return testController
        .selectText(provisioningElement.postpaidChargingAmount)
        .pressKey('delete')
});

Then(/^Admin type Postpaid Charging Amount as "([^"]*)"$/, function (postpdchrgamount) {

    return testController
        .typeText(provisioningElement.postpaidChargingAmount, postpdchrgamount)
});

Then(/^Admin click on admin Update$/, function () {

    return testController
        .click(provisioningElement.adminUpdate)
});

Then(/^Admin check SMS API exists$/, function () {

    return testController
        .expect(provisioningElement.smsAPI.with({ boundTestRun: testController }).exists).ok()
});

Then(/^Admin check USSD API exists$/, function () {

    return testController
        .expect(provisioningElement.ussdAPI.with({ boundTestRun: testController }).exists).ok()
});

Then(/^Admin check CaaS API exists$/, function () {

    return testController
        .expect(provisioningElement.caasAPI.with({ boundTestRun: testController }).exists).ok()
});

Then(/^Admin check Subscription API exists$/, function () {

    return testController
        .expect(provisioningElement.subscriptionAPI.with({ boundTestRun: testController }).exists).ok();
});


//                 Admin remove NCS to user created application
//=====================================================================================
//=====================================================================================

Then(/^Admin check USSD API does not exists$/, function () {

    return testController
        .expect(provisioningElement.ussdAPI.with({ boundTestRun: testController }).exists).notOk()
});

Then(/^Admin check CaaS API does not exists$/, function () {

    return testController
        .expect(provisioningElement.caasAPI.with({ boundTestRun: testController }).exists).notOk()
});

Then(/^Admin check Subscription API does not exists/, function () {

    return testController
        .expect(provisioningElement.subscriptionAPI.with({ boundTestRun: testController }).exists).notOk();
});





//                 Admin approve application for limited production
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Change State Button/, function () {

    return testController
        .click(provisioningElement.changeStateButton)

});

Then(/^Admin type Change State Remarks as "([^"]*)"/, function (adminremarks) {

    return testController
        .typeText(provisioningElement.changeStateRemarks, adminremarks)

});

Then(/^Admin click on Limited Radio button/, function () {

    return testController
        .click(provisioningElement.limitedRadio)

});

Then(/^Admin click on Admin Save Changes button/, function () {

    return testController
        .click(provisioningElement.adminSaveChanges)

});

Then(/^Admin expect Limited App Logo exists/, function () {

    return testController
        .wait(2000)
        .expect(provisioningElement.limitedAppLogo.with({boundTestRun: testController}).exists).ok();
});


//                 Admin approve application for scheduled active production
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Schedule Radio button/, function () {

    return testController
        .click(provisioningElement.scheduleRadio)

});

Then(/^Admin expect Scheduled Active App Logo exists/, function () {

    return testController
        .expect(provisioningElement.scheduledActiveAppLogo.with({boundTestRun: testController}).exists).ok();
});


//                 Admin reject an application
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Reject Radio button/, function () {

    return testController
        .click(provisioningElement.rejectRadio)

});

Then(/^Admin expect Reject App Logo exists/, function () {

    return testController
        .expect(provisioningElement.rejectAppLogo.with({boundTestRun: testController}).exists).ok();
});

//                 Admin suspend an application
//=====================================================================================
//=====================================================================================

Then(/^Admin check active logo exists/, function () {
    return testController
        .expect(provisioningElement.activeAppLogo.with({boundTestRun: testController}).exists).ok();
});

Then(/^Admin click on Suspend Radio button/, function () {

    return testController
        .click(provisioningElement.stateRadio)

});

Then(/^Admin expect Suspend App Logo exists/, function () {

    return testController
        .expect(provisioningElement.suspendAppLogo.with({boundTestRun: testController}).exists).ok();

});

//                 Admin terminate suspended application
//=====================================================================================
//=====================================================================================

Then(/^Admin check suspend logo exists/, function () {
    return testController
        .expect(provisioningElement.suspendAppLogo.with({boundTestRun: testController}).exists).ok();

});

Then(/^Admin click on Application Terminate button/, function () {

    return testController
        .click(provisioningElement.appTerminate)

});

Then(/^Admin click on Terminate Remarks/, function () {

    return testController
        .click(provisioningElement.terminateRemarksSelect)

});

Then(/^Admin type Change terminate Remarks as "([^"]*)"/, function (adminterminate) {

    return testController
        .typeText(provisioningElement.terminateRemarks, adminterminate)

});

Then(/^Admin click on Admin application reject button/, function () {

    return testController
        .click(provisioningElement.appRejectButton)

});

Then(/^Admin expect Terminate App Logo exists/, function () {

    return testController
        .expect(provisioningElement.terminateAppLogo.with({boundTestRun: testController}).exists).ok();
});

//                 Admin Reactive suspended application
//=====================================================================================
//=====================================================================================

Then(/^Admin click on Reactivate Radio button/, function () {

    return testController
        .click(provisioningElement.stateRadio)

});

Then(/^Admin expect Active App Logo exists/, function () {

    return testController
        .expect(provisioningElement.activeAppLogo.with({boundTestRun: testController}).exists).ok();

});