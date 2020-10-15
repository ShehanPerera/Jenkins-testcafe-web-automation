const {When, Then} = require('cucumber');
const {Selector} = require('testcafe');
//const percySnapshot  = require('@percy/testcafe');
const homePageElements = require('../elements/homePageElements');
const provisioningElement = require('../elements/provisioningElements');
const commonFunctions = require('../support/commonFunctions');

let testController = null;
let homePageElement = new homePageElements();
let provisioningElements = new provisioningElement();
let commonFunction = new commonFunctions();


Then(/^user click on Inzpire and click on create a new app$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(homePageElement.inzpire)
            .debug()
            .click(provisioningElements.addInzpire)
    });


});

Then(/^user click on Inzpire and click on create first app$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(homePageElement.inzpire)
            .click(provisioningElements.inzpireFirstApp)
    });


});

Then(/^user click on Inzpire$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(homePageElement.inzpire)
            .debug()
    });


});

When(/^user type a app name as "([^"]*)" and app description as "([^"]*)" and allowed hosts as "([^"]*)"$/, function (appName, appDesc, allwhosts) {
    return testController
        .typeText(provisioningElements.applicationNameInzpire, appName)
        .typeText(provisioningElements.applicationDescriptonInzpire, appDesc)
        .typeText(provisioningElements.allowedHostInzpire, allwhosts)
});

When(/^user type a app name as "([^"]*)"$/, function (appName) {
    return testController
        .typeText(provisioningElements.applicationNameInzpire, appName)
});

When(/^App name related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.applicationNameErrorInzpire.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

When(/^user type app description as "([^"]*)"$/, function (appDesc) {
    return testController
        .typeText(provisioningElements.applicationDescriptonInzpire, appDesc)
});

When(/^App description related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.applicationDescriptionErrorInzpire.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

When(/^user type app allowed hosts as "([^"]*)"$/, function (allwhosts) {
    return testController
        .typeText(provisioningElements.allowedHostInzpire, allwhosts)
});

When(/^App allowed host related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.allowedHostErrorInzpire.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

When(/^user type whitelisted numbers as "([^"]*)"$/, function (allwhosts) {
    return testController
        .typeText(provisioningElements.whitelistedNoInzpire, allwhosts)
});

When(/^App whitelisted numbers related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.whitelistedNoErrorInzpire.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

When(/^user type balcklisted numbers as "([^"]*)"$/, function (allwhosts) {
    return testController
        .typeText(provisioningElements.blacklistedNoInzpire, allwhosts)
});

When(/^App blacklisted numbers related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.blacklistedNoErrorInzpire.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

When(/^user click on the Next button$/, function () {
    return testController
        .click(provisioningElements.inzpireNextButton)
});

When(/^user click on the app setting tab/, function () {
    return testController
        .click(provisioningElements.appSettingsTab)
});

When(/^App services tab error need to visible$/, function () {
    return testController
        .expect(provisioningElements.noServicesError.with({boundTestRun: testController}).visible).ok()
});

When(/^user select ncs sms and USSD and caas and subscription$/, function () {
    return testController
        .click(provisioningElements.ncsSMSButton)
        .click(provisioningElements.ncsUSSDButton)
        .click(provisioningElements.ncscaasButton)
        .click(provisioningElements.ncsSubscriptionButton)
});

When(/^user select ncs subscription$/, function () {
    return testController
        .click(provisioningElements.ncsSubscriptionButton)
});

When(/^user select ncs sms$/, function () {
    return testController
        .click(provisioningElements.ncsSMSButton)
});

When(/^user select ncs ussd$/, function () {
    return testController
        .click(provisioningElements.ncsUSSDButton)
});

When(/^user select ncs caas$/, function () {
    return testController
        .click(provisioningElements.ncscaasButton)
});

Then(/^user type a sms Reciving URL as "([^"]*)" and sms Default Sender as "([^"]*)" and sms Send Address Alias as  "([^"]*)"$/, function (smsRecivingURL, smsDefaultSender, smsSendAddressAlias) {
    return testController
        .typeText(provisioningElements.smsRecivingURL, smsRecivingURL)
        .typeText(provisioningElements.smsDefaultSender, smsDefaultSender)
        .typeText(provisioningElements.smsSendAddressAlias, smsSendAddressAlias)
});

Then(/^user type a sms Reciving URL as "([^"]*)"$/, function (smsRecivingURL) {
    return testController
        .typeText(provisioningElements.smsRecivingURL, smsRecivingURL)
});

Then(/^Message reciving url related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsRecivingURLError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user type a sms Default Sender as "([^"]*)"$/, function (smsDefaultSender) {
    return testController
        .typeText(provisioningElements.smsDefaultSender, smsDefaultSender)
});

Then(/Default Sender related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsDefaultSenderError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user type a sms Send Address Alias as "([^"]*)"$/, function (smsSendAddressAlias) {
    return testController
        .typeText(provisioningElements.smsSendAddressAlias, smsSendAddressAlias)
});

Then(/Send Address Alias related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsSendAddressAliasError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user enable delivery report$/, function () {
    return testController
        .click(provisioningElements.enableDeliveryReportTogal)
});

Then(/^user type delivery report url as "([^"]*)"$/, function (deliveryReportUrl) {
    return testController
        .typeText(provisioningElements.deliveryReportURL,deliveryReportUrl)
});

Then(/Delivery report URL related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.deliveryReportURLError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user click Next button$/, function () {
    return testController
        .click(provisioningElements.inzpireNextButton)
});

Then(/^user type smsKeyword as "([^"]*)"$/, function (keyword) {
    return testController
        .typeText(provisioningElements.smsKeyword, keyword)
});

Then(/sms keyword related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsKeywordError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user enable sms MO charging$/, function () {
    return testController
        .click(provisioningElements.enableSMSMOCharging)
});

Then(/^user click sms MO Charging Amount and type as  "([^"]*)"$/, function (mtChargeAmt) {
    return testController
        .click(provisioningElements.smsMTChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(provisioningElements.smsMTChargingAmount, mtChargeAmt)

});

Then(/sms MO charging related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsMOChargingAmountError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});


Then(/^user click sms MT Charging Amount and type as  "([^"]*)"$/, function (mtChargeAmt) {
    return testController
        .click(provisioningElements.smsMTChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(provisioningElements.smsMTChargingAmount, mtChargeAmt)
});

Then(/^user click sms MT Charging Amount when sms MO charging and type as  "([^"]*)"$/, function (mtChargeAmt) {
    return testController
        .click(provisioningElements.smsMOChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(provisioningElements.smsMOChargingAmount, mtChargeAmt)
});

Then(/sms MT charging related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.smsMTChargingAmountError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user type ussd URL as "([^"]*)"$/, function (ussdURL) {
    return testController
        .typeText(provisioningElements.ussdURL, ussdURL)
});

Then(/ussd URL related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.ussdURLError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});



Then(/^user type ussd KeyWord as "([^"]*)"$/, function (ussdKeyWord) {
    return testController
        .typeText(provisioningElements.ussdKeyWord, ussdKeyWord)
});

Then(/ussd keyword related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.ussdKeyWordError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});



Then(/^user click sms ussd Charging Amount and type as  "([^"]*)"$/, function (ussdChargAmt) {
    return testController
        .doubleClick(provisioningElements.ussdChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(provisioningElements.ussdChargingAmount, ussdChargAmt)
});

Then(/ussd charging related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.ussdChargingAmountError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user type caas URL as "([^"]*)"$/, function (caasURL) {
    return testController
        .typeText(provisioningElements.caasURL, caasURL)
});

Then(/cass URL related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.caasURLError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});


Then(/^user click caas Enable Mobile Account for Mobite button$/, function () {
    return testController
        .click(provisioningElements.caasEnableMobileAccountforMobitel)
});

Then(/^user type a subscription Response Message as "([^"]*)" and unsubscription Response Message as "([^"]*)" and subscription URL as "([^"]*)"$/, function (subsResp, unSubsResp, subsURL) {
    return testController
        .typeText(provisioningElements.subscriptionResponseMessage, subsResp)
        .pressKey('tab')
        .typeText(provisioningElements.unsubscriptionResponseMessage, unSubsResp)
        .typeText(provisioningElements.subscriptionURL, subsURL)
});

Then(/^user type subscription Response Message as "([^"]*)"$/, function (subsResp) {
    return testController
        .typeText(provisioningElements.subscriptionResponseMessage, subsResp)
});

Then(/^subscription response message related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.subscriptionResponseMessageError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});


Then(/^user type unsubscription Response Message as "([^"]*)"$/, function (unSubsResp) {
    return testController
        .pressKey('tab')
        .typeText(provisioningElements.unsubscriptionResponseMessage, unSubsResp)
});

Then(/^unsubscription response message related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.unsubscriptionResponseMessageError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user type subscription URL as "([^"]*)"$/, function (subsURL) {
    return testController
        .typeText(provisioningElements.subscriptionURL, subsURL)
});

Then(/subscription url related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.subscriptionURLError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user click on prepaid Charging Frequency  button and click prepaid Monthly button$/, function () {
    return testController
        .click(provisioningElements.prepaidChargingFrequency)
        .click(provisioningElements.prepaidMonthly)
});

Then(/^user click prepaid Charging Amount button and type as "([^"]*)"$/, function (prepaidChargingAmount) {
    return testController
        .click(provisioningElements.prepaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(provisioningElements.prepaidChargingAmount)
        .typeText(provisioningElements.prepaidChargingAmount, prepaidChargingAmount)
});

Then(/^subscription prepaid charging related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.prepaidChargingAmountError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});

Then(/^user click on postpaid Charging Frequency  button and click postpaid Daily button/, function () {
    return testController
        .click(provisioningElements.postpaidChargingFrequency)
        .click(provisioningElements.postpaidDaily)

});

Then(/^user click postpaid Charging Amount button and type as "([^"]*)"$/, function (postpaidChargingAmount) {
    return testController
        .click(provisioningElements.postpaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(provisioningElements.postpaidChargingAmount, postpaidChargingAmount)
});

Then(/^subscription postpaid charging related error need to be as "([^"]*)"$/, function (errorMessage) {
    return testController
        .expect(provisioningElements.postpaidChargingAmountError.with({boundTestRun: testController}).innerText).eql(errorMessage)
});


Then(/^user click on send For Approval button$/, function () {
    return testController
        .click(provisioningElements.sendForApproval)
});

When(/^user check pending approve logo$/, function () {
    return testController
        .expect(provisioningElements.pendingAppLogo.visible).ok()
});

Then(/^user click on draft button$/, function () {
    return testController
        .click(provisioningElements.saveAsDraft)
});

Then(/^user close application view$/, function () {
    return testController
        .click(provisioningElements.applicationViewClose)
});

Then(/^user close draft application view$/, function () {
    return testController
        .click(provisioningElements.draftApplicationViewClose)
});

Then(/^user clean created App from database with appName "([^"]*)" and sms keyword "([^"]*)"$/, function (name, keyword) {
    commonFunction.removeProvisioningApp(name, keyword);
});


When(/^user type a app name as "([^"]*)" in app search bar$/, function (applName) {
    return testController
        .typeText(provisioningElements.appSearch, applName)

});


When(/^user click on "([^"]*)" app$/, function (applName) {
    return testController
        .click(provisioningElements.appSelect.withText(applName))
});

When(/^user click on service tab$/, function () {
    return testController
        .click(provisioningElements.appServiceTab())
});

When(/^check sms ncs available$/, function () {
    return testController
        .expect(provisioningElements.smsSelectedIcon.visible).ok()
});

When(/^check ussd ncs available$/, function () {
    return testController
        .expect(provisioningElements.ussdSelectedIcon.visible).ok()
});

When(/^check caas ncs available$/, function () {
    return testController
        .expect(provisioningElements.caasSelectedIcon.visible).ok()
});

When(/^check subscription ncs available$/, function () {
    return testController
        .expect(provisioningElements.subscriptionNotSelectedIcon.visible).ok()
});

When(/^check sms ncs not available$/, function () {
    return testController
        .expect(provisioningElements.smsNotSelectedIcon.visible).ok()
});

When(/^check ussd ncs not available$/, function () {
    return testController
        .expect(provisioningElements.ussdNotSelectedIcon.visible).ok()
});

When(/^check caas ncs not available$/, function () {
    return testController
        .expect(provisioningElements.caasNotSelectedIcon.visible).ok()
});

When(/^check subscription ncs not available$/, function () {
    return testController
        .expect(provisioningElements.subscriptionNotSelectedIcon.visible).ok()
});

When(/^check caas ncs not available$/, function () {
    return testController
        .expect(provisioningElements.caasNotSelectedIcon.visible).ok()
});

When(/^user click on apiDetails$/, function () {
    return testController
        .click(provisioningElements.apiDetails, {speed: 0.05})
});

When(/^user click on chargingDetails$/, function () {
    return testController
        .click(provisioningElements.chargingDetails)
});

When(/^user click on revenueShare$/, function () {
    return testController
        .click(provisioningElements.revenueShare)
});

When(/^user click on activityLog$/, function () {
    return testController
        .click(provisioningElements.activityLog)
});