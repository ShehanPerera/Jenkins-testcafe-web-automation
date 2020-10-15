const { When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const percySnapshot  = require('@percy/testcafe');
const homePageElements = require('../elements/homePageElements');
const appCreateElements = require('../elements/appCreatePageElements');
const commonFunctions = require('../support/commonFunctions');

let testController = null;
let homePageElement = new homePageElements();
let appCreateElement = new appCreateElements();
let commonFunction = new commonFunctions();



let appName = null;
let appDesc = null;
let appShortCode = null;


Then(/^user click on Xpand and go to create a new app$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(homePageElement.xpand)
            .click(appCreateElement.appCreateBtn)
    });


});


Then(/^user select application type Voting$/, function () {
    return testController
        .click(homePageElement.vote)
});

Then(/^user select application type Alert$/, function () {
    return testController
        .click(homePageElement.alert)
});

Then(/^user select application type Schedule$/, function () {
    return testController
        .click(homePageElement.scheduleMsg)
});

Then(/^user select application type Contact$/, function () {
    return testController
        .click(homePageElement.contact)
});

When(/^user type a app name as "([^"]*)" and app description as "([^"]*)"$/, function (applicationName, applicationDesc) {
    appName = applicationName;
    appDesc = applicationDesc;
    return testController
        .typeText(appCreateElement.appName, appName)
        .typeText(appCreateElement.appDescription, appDesc)
});


When(/^user choose the short code as "([^"]*)"$/, function (shortCode) {
    appShortCode = shortCode;
    return testController
        .click(appCreateElement.shortCodeList)
        .click(appCreateElement.shortCodeOption.withText(shortCode))
});


When(/^user enter keyword as "([^"]*)"$/, function (keyword) {
    return testController
        .typeText(appCreateElement.appKeyWord, keyword)

});



When(/^user enter candidate "([^"]*)" code as "([^"]*)" and short description as "([^"]*)" in voting campaign settings$/,
    function (candidateNo, candidateCode, candidateDesc) {
    return testController
        .typeText(appCreateElement.candidateCode.nth(parseInt(candidateNo)-1), candidateCode)
        .typeText(Selector('.span6').nth(parseInt(candidateNo)+2)
            .find('.input-block-level.ng-pristine.ng-valid'), candidateDesc)

});


When(/^user click on submit button$/, function () {
    return testController
        .click(appCreateElement.appSubmit)
        .click(appCreateElement.confirmBtn)
});


Then(/^a new voting app should be created$/, function () {
    return testController
        .expect(appCreateElement.appNameText.with({ boundTestRun: testController }).innerText).eql(appName)
        .expect(appCreateElement.shortCodeText.with({ boundTestRun: testController }).innerText).eql(appShortCode)

});

Then(/^user should be displayed the error messages$/, function () {
    return testController
        .expect(appCreateElement.nameEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Invalid Application Name. Please choose another name.")
        .expect(appCreateElement.descriptionEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("App Description Cannot be Empty")
        .expect(appCreateElement.shortCodeEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Short Code Cannot be Empty")
        .expect(appCreateElement.keywordEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Keyword should be at least 2 characters and not more than 15 characters")
        .expect(appCreateElement.candidateEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Candidate details need to be completed");
});


Then(/^user should be displayed the error messages in creating alert app with empty fields$/, function () {
    return testController
        .expect(appCreateElement.nameEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Invalid Application Name. Please choose another name.")
        .expect(appCreateElement.descriptionEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("App Description Cannot be Empty")
        .expect(appCreateElement.shortCodeEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Short Code Cannot be Empty")
        .expect(appCreateElement.keywordEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Keyword should be at least 2 characters and not more than 15 characters")
        .expect(appCreateElement.allowedMobileNoError.with({ boundTestRun: testController }).innerText)
            .contains("Mobile Number cannot be Empty")

});

Then(/^user should be displayed the error messages in creating schedule app with empty fields$/, function () {
    return testController
        .expect(appCreateElement.nameEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Invalid Application Name. Please choose another name.")
        .expect(appCreateElement.descriptionEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("App Description Cannot be Empty")
        .expect(appCreateElement.shortCodeEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Short Code Cannot be Empty")
        .expect(appCreateElement.keywordEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Keyword should be at least 2 characters and not more than 15 characters")
        .expect(appCreateElement.endDateError.with({ boundTestRun: testController }).innerText)
            .contains("End Date Must be Selected")

});

Then(/^user should be displayed the error messages in creating contact app with empty fields$/, function () {
    return testController
        .expect(appCreateElement.nameEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Invalid Application Name. Please choose another name.")
        .expect(appCreateElement.descriptionEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("App Description Cannot be Empty")
        .expect(appCreateElement.shortCodeEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Short Code Cannot be Empty")
        .expect(appCreateElement.keywordEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Keyword should be at least 2 characters and not more than 15 characters")
        .expect(appCreateElement.endDateError.with({ boundTestRun: testController }).innerText)
            .contains("End Date Must be Selected")

});

Then(/^a error message should be displayed for creating app with an existing app name$/, function () {
    return testController
        .expect(appCreateElement.nameEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("The Application Name already exists. Please choose another name.");
});


Then(/^user clean created App from database with appName "([^"]*)" and keyword "([^"]*)"$/, function (appName, keyword) {
    commonFunction.removeSolturaApp(appName, keyword);
});

Then(/^user check charge from is set to "([^"]*)" only$/, function (chargeFrom) {
    if (chargeFrom === "Subscriber"){
        return testController
            .click(appCreateElement.chargingSettings)
            .expect(appCreateElement.chargeFromSelector.with({ boundTestRun: testController }).childElementCount).eql(1)
            .expect(appCreateElement.chargeFromSubs.with({ boundTestRun: testController }).innerText)
                .contains("Subscriber")
    } else if (chargeFrom === "Application User") {
        return testController
            .click(appCreateElement.chargingSettings)
            .expect(appCreateElement.contactChargeFromSelector.with({ boundTestRun: testController }).childElementCount)
                .eql(1)
            .expect(appCreateElement.chargeFromAppUser.with({ boundTestRun: testController }).innerText)
                .contains("Application User")
    } else {
        return testController
            .click(appCreateElement.chargingSettings)
            .expect(appCreateElement.chargeFromSelector.with({ boundTestRun: testController }).childElementCount)
                .eql(1)
            .expect(appCreateElement.chargeFromSubs.with({ boundTestRun: testController }).innerText)
                .contains("Voter")
    }
});


Then(/^user validate charging settings according to charging modal "([^"]*)"$/, function (chargingModal) {
    return testController
        .click(appCreateElement.chargingModal)
        .click(appCreateElement.chargingModalOption.withAttribute('value', chargingModal));
});


Then(/^user get a snapshot of screen for UI verify for "([^"]*)"$/,async function (description) {
    await percySnapshot(testController, description);
});

When(/^user set yes to expiration date required$/,async function () {
    return testController
        .click(appCreateElement.expiryDateOnSwitch)
});

When(/^user set yes to update content via SMS$/,async function () {
    return testController
        .click(appCreateElement.updateViaSMSOption)

});


When(/^user set allowed mobile numbers to "([^"]*)"$/,async function (mobileNo) {
    return testController
        .click(appCreateElement.allowedNumberTextBox)
        .pressKey("ctrl+a")
        .pressKey("backspace")
        .typeText(appCreateElement.allowedNumberTextBox, mobileNo)
});


When(/^user click on General Settings tab$/,async function () {
    return testController
        .click(appCreateElement.generalSettings)

});

Then(/^user should be display error message for using the existing keyword short code combination$/,async function () {
    return testController
        .expect(appCreateElement.keywordEmptyError.with({ boundTestRun: testController }).innerText)
            .contains("Invalid Short code and keyword combination. Please choose another value.")

});

When(/^user enter automatic response message as "([^"]*)"$/,async function (msgTxt) {
    return testController
        .typeText(appCreateElement.responseMsgTxt, msgTxt)

});
