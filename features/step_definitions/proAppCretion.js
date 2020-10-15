// const { When, Then } = require('cucumber');
// const { Selector } = require('testcafe');
// //const percySnapshot  = require('@percy/testcafe');
// const homePageElements = require('../elements/homePageElements');
// const provisioningElement = require('../elements/provisioningElements');
// const commonFunctions = require('../support/commonFunctions');

// let testController = null;
// let homePageElement = new homePageElements();
// let provisioningElements = new provisioningElement();
// let commonFunction = new commonFunctions();


// Then(/^user click on Inzpire and click on create a new app$/, function () {
//     return this.waitForTestController().then(function (tc) {
//         testController = tc;

//         return testController
//             .click(homePageElement.inzpire)
//             .click(provisioningElements.addInzpire)
//     });


// });

// When(/^user type a app name as "([^"]*)" and app description as "([^"]*)" and allowed hosts as "([^"]*)"$/, function (appName, appDesc, allwhosts) {
//     return testController
//         .typeText(provisioningElements.applicationNameInzpire, appName)
//         .typeText(provisioningElements.applicationDescriptonInzpire, appDesc)
//         .typeText(provisioningElements.allowedHostInzpire, allwhosts)
// });

// When(/^user click on the Next button$/, function () {
//     return testController
//         .click(provisioningElements.inzpireNextButton)
// });


// When(/^user select ncs sms and USSD and caas and subscription$/, function () {
//     return testController
//         .click(provisioningElements.ncsSMSButton)
//         .click(provisioningElements.ncsUSSDButton)
//         .click(provisioningElements.ncscaasButton)
//         .click(provisioningElements.ncsSubscriptionButton)
// });


// Then(/^user type a sms Reciving URL as "([^"]*)" and sms Default Sender as "([^"]*)" and sms Send Address Alias as  "([^"]*)"$/, function (smsRecivingURL, smsDefaultSender, smsSendAddressAlias) {
//     return testController
//         .typeText(provisioningElements.smsRecivingURL, smsRecivingURL)
//         .typeText(provisioningElements.smsDefaultSender, smsDefaultSender)
//         .typeText(provisioningElements.smsSendAddressAlias, smsSendAddressAlias)
// });

// Then(/^user click Next button$/, function () {
//     return testController
//         .click(provisioningElements.inzpireNextButton)
// });

// Then(/^user type smsKeyword as "([^"]*)"$/, function (keyword) {
//     return testController
//         .typeText(provisioningElements.smsKeyword, keyword)

// });


// Then(/^user click sms MT Charging Amount and type as  "([^"]*)"$/, function (mtChargeAmt) {
//     return testController
//         .click(provisioningElements.smsMTChargingAmount)
//         .pressKey('right')
//         .pressKey('right')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .typeText(provisioningElements.smsMTChargingAmount, mtChargeAmt)

// });


// Then(/^user type ussd URL as  "([^"]*)"$/, function (ussdURL) {
//     return testController
//         .typeText(provisioningElements.ussdURL, ussdURL)

// });


// Then(/^user type ussd KeyWord as "([^"]*)"$/, function (ussdKeyWord) {
//     return testController
//         .typeText(provisioningElements.ussdKeyWord, ussdKeyWord)

// });


// Then(/^user click sms ussd Charging Amount and type as  "([^"]*)"$/, function (ussdChargAmt) {
//     return testController
//         .doubleClick(provisioningElements.ussdChargingAmount)
//         .pressKey('right')
//         .pressKey('right')
//         .pressKey('right')
//         .pressKey('right')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .typeText(provisioningElements.ussdChargingAmount, ussdChargAmt)

// });


// Then(/^user type caas URL as "([^"]*)"$/, function (caasURL) {
//     return testController
//         .typeText(provisioningElements.caasURL, caasURL)

// });


// Then(/^user click caas Enable Mobile Account for Mobite button$/, function () {
//     return testController
//         .click(provisioningElements.caasEnableMobileAccountforMobitel)
// });

// Then(/^user type a subscription Response Message as "([^"]*)" and unsubscription Response Message as "([^"]*)" and subscription URL as "([^"]*)"$/, function (subsResp, unSubsResp, subsURL) {
//     return testController
//         .typeText(provisioningElements.subscriptionResponseMessage, subsResp)
//         .pressKey('tab')
//         .typeText(provisioningElements.unsubscriptionResponseMessage, unSubsResp)
//         .typeText(provisioningElements.subscriptionURL, subsURL)
// });;


// Then(/^user click on prepaid Charging Frequency  button and click prepaid Monthly button$/, function () {
//     return testController
//         .click(provisioningElements.prepaidChargingFrequency)
//         .click(provisioningElements.prepaidMonthly)
        
// });

// Then(/^user click prepaid Charging Amount button and type as "([^"]*)"$/, function (prepaidChargingAmount) {
//     return testController
//         .click(provisioningElements.prepaidChargingAmount)
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .click(provisioningElements.prepaidChargingAmount)
//         .typeText(provisioningElements.prepaidChargingAmount, prepaidChargingAmount)

// });

// Then(/^user click on postpaid Charging Frequency  button and click postpaid Daily button/, function () {
//     return testController
//         .click(provisioningElements.postpaidChargingFrequency)
//         .click(provisioningElements.postpaidDaily)
        
// });

// Then(/^user click postpaid Charging Amount button and type as "([^"]*)"$/, function (postpaidChargingAmount) {
//     return testController
//         .click(provisioningElements.postpaidChargingAmount)
//         .pressKey('backspace')
//         .pressKey('backspace')
//         .typeText(provisioningElements.postpaidChargingAmount,postpaidChargingAmount)

// });

// Then(/^user click on send For Approval button$/, function () {
//     return testController
//         .click(provisioningElements.sendForApproval)
// });

// Then(/^user clean created App from database with appName "([^"]*)" and sms keyword "([^"]*)"$/, function (name, keyword) {
//     commonFunction.removeProvisioningApp(name, keyword);
// });
