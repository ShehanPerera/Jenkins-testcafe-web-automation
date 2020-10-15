const { Given, When, Then } = require('cucumber');
const { ClientFunction, Selector } = require('testcafe');
const loginPageElements = require('../elements/loginPageElements');
const homePageElements = require('../elements/homePageElements');
const percySnapshot  = require('@percy/testcafe');
const env = require('dotenv').config();


let testController = null;
let homePageElement = new homePageElements();
let loginPageElement = new loginPageElements();

const getWindowLocation = ClientFunction(function () {
    return window.location
});

Given(/^open new browser$/, function () {
    // const parameters = this.parameters;

    return this.waitForTestController().then(function (tc) {
        testController = tc;
        return testController
            .openWindow(env.parsed.MSPACE_URL)
            .debug();

    });
});

Given(/^user go to mspace login page$/, function () {
    // const parameters = this.parameters;

    return this.waitForTestController().then(function (tc) {
        testController = tc;
        return testController
            .navigateTo(env.parsed.MSPACE_URL)
            .debug();

    });
});

Then(/^user get snapshot of screen for UI verify for "([^"]*)"$/,async function (description) {

    await percySnapshot(testController, description);
});

When(/^user type username as "([^"]*)"$/, function (username) {
    return testController
        .typeText(loginPageElement.username, username);
});

Then(/^username need to be as "([^"]*)"$/, function (username) {
    return testController
        .expect(homePageElement.username.with({boundTestRun:testController})).eql(username)
});


When(/^user type password as "([^"]*)"$/, function (password) {
    return testController
        .typeText(loginPageElement.password, password)
});


When(/^click on login button$/, function () {
    return testController
        .click(loginPageElement.submitBtn)
        .debug()
});


Then(/^user should logged in successfully$/, function () {
    return testController
        .expect(homePageElement.dashboardCards.with({boundTestRun:testController}).count).eql(1)
        .debug()
});


Then(/^user should be displayed error message$/, function () {
    return testController
        .expect(loginPageElement.loginErrorMessage.with({boundTestRun:testController}).innerText)
            .contains("The credentials you provided cannot be determined to be authentic.")
});


Then(/^user should logged in successfully should contain "([^"]*)" modules$/, function (no_of_modules) {
    return testController
        .expect(homePageElement.dashboardCards.with({boundTestRun:testController}).childElementCount)
            .eql(parseInt(no_of_modules))
});


Then(/^user logout from mspace$/, function () {
    return testController
        .click(homePageElement.profileSection)
        .click(homePageElement.logoutBtn);
});
