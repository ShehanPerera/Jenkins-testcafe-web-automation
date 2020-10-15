const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe');
const loginPageElements = require('../elements/loginPageElements');
const homePageElements = require('../elements/homePageElements');
const signupPageElements = require('../elements/signUpPageElements');
const commonFunctions = require('../support/commonFunctions');


let testController = null;
let homePageElement = new homePageElements();
let loginPageElement = new loginPageElements();
let signupPageElement = new signupPageElements();
let commonFunction = new commonFunctions();
let msisdn = null;

Given(/^user click on register as a new user$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(loginPageElement.newUserLink)
    });
});


When(/^user type user name as "([^"]*)", email as "([^"]*)", mobile no as "([^"]*)", password as "([^"]*)"$/,
    function (username, email, mobileNo, password) {
        msisdn = mobileNo;
        return testController
            .typeText(signupPageElement.username, username)
            .typeText(signupPageElement.email, email)
            .typeText(signupPageElement.mobileNo, mobileNo)
            .debug()
            .typeText(signupPageElement.password, password)
            .debug()
    });

When(/^user click on continue button$/, function () {

    return testController
        .click(signupPageElement.continueBtn)
});

When(/^user type the OTP in otp text field$/, async (mobileNo) => {

    try {
        let data = await commonFunction.getOTP(mobileNo);
        let otp = (data.find(a => !!a.msisdn_verification_code) || {}).msisdn_verification_code;

        return testController
            .typeText(signupPageElement.otpField, otp)
            .click(signupPageElement.continueBtn)
            .debug()
    } catch (e) {
        console.error(e)
    }
});

Then(/^user should be directed to home page with complete your profile modal$/, function () {
    // const testController = await this.waitForTestController();
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .expect(homePageElement.completeProfileTopic.with({boundTestRun: testController}).innerText)
            .contains("Complete Your Profile")
            .expect(homePageElement.completeProfileSubTxt.with({boundTestRun: testController}).innerText)
            .contains("Complete your contact and bank details before you submit the applications")
    });


});


When(/^user click on Complete button$/, function () {
    return testController
        .click(homePageElement.completeBtn)
});


Then(/^user should directed to Create Corporate user page$/, function () {
    return testController
        .expect(signupPageElement.coporatePageHeading.with({boundTestRun: testController}).innerText)
        .contains("Create Corporate User Account")
});


When(/^user click on Next button$/, function () {
    return testController
        .click(signupPageElement.nextBtn)
        .debug()
});


Then(/^a error message should be displayed to user for mandatory fields$/, function () {
    return testController
        .expect(signupPageElement.orgNameRequired.with({boundTestRun: testController}).innerText)
        .contains("organization/Developer name is required")
        .expect(signupPageElement.legalEntityRequired.with({boundTestRun: testController}).innerText)
        .contains(("Legal entity is required"))
        .expect(signupPageElement.streetAddrRequired.with({boundTestRun: testController}).innerText)
        .contains(("Street address is required"))
        .expect(signupPageElement.contactNameRequired.with({boundTestRun: testController}).innerText)
        .contains(("Contact person's name is required"))
        .expect(signupPageElement.NICRequired.with({boundTestRun: testController}).innerText)
        .contains(("Contact person's NIC/BR/Passport number is required"))
        .expect(signupPageElement.copyRequired.with({boundTestRun: testController}).innerText)
        .contains(("Contact person's NIC/BR/Passport scan copy is required"));
});

When(/^user type organization Developer name as "([^"]*)"$/, function (orgName) {
    return testController
        .typeText(signupPageElement.orgName, orgName)
});

When(/^user select legal entity as "([^"]*)"$/, function (entity) {
    return testController
        .click(signupPageElement.legalEntitySelector)
        .click(signupPageElement.legalEntity.withText(entity))
});

When(/^user select industry as "([^"]*)"$/, function (industry) {
    // Write code here that turns the phrase above into concrete actions
    return testController
        .click(signupPageElement.industrySelector)
        .click(signupPageElement.industry.withText(industry))
});

When(/^user type street address as "([^"]*)"$/, function (address) {
    return testController
        .typeText(signupPageElement.streetAddr, address)
});

When(/^user select city as "([^"]*)", province as "([^"]*)", and country as "([^"]*)"$/,
    function (city, province, country) {
        return testController
            .click(signupPageElement.citySelector)
            .click(signupPageElement.city.withText(city))
            .click(signupPageElement.provinceSelector)
            .click(signupPageElement.province.withText(province))
            .click(signupPageElement.countrySelector)
            .click(signupPageElement.country.withText(country))
    });

When(/^user type the post code as "([^"]*)"$/, function (postalCode) {
    return testController
        .typeText(signupPageElement.postCode, postalCode)
});
When(/^user type the contact person as "([^"]*)"$/, function (name) {
    return testController
        .typeText(signupPageElement.contactPersonName, name)
});


When(/^user type NIC\/BR\/Passport no as "([^"]*)"$/, function (nic) {
    return testController
        .typeText(signupPageElement.NIC, nic)
});

When(/^user upload a scan copy of NIC\/BR\/Passport$/, function () {
    const upload = Selector('#upload-button');

    return testController
        .setFilesToUpload('#file-upload', ['/home/ranmal/Desktop/git/sdp-ui-automation/mSpace/reports/screenshots/2019-11-21_11-14-46/test-1/Chrome_77.0.3865_Linux_0.0.0/errors/1.png'])
});

When(/^user delete the created user "([^"]*)"$/, function (email) {
    // let emailAddr = email;

    commonFunction.removeUser(email)


});