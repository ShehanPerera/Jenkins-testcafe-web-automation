const { When, Then } = require('cucumber');
const { Selector } = require('testcafe');
//const percySnapshot  = require('@percy/testcafe');
const homePageElements = require('../elements/homePageElements');
const provisioningElement = require('../elements/provisioningElements');
const commonFunctions = require('../support/commonFunctions');

let testController = null;
let homePageElement = new homePageElements();
let provisioningElements = new provisioningElement();
let commonFunction = new commonFunctions();

// Then(/^click on appCreator$/, function () {
//     return testController
//         .click(provisioningElements.appCreator)
// });


Then(/^click on appCreator$/, function () {
    return this.waitForTestController().then(function (tc) {
        testController = tc;

        return testController
            .click(provisioningElements.appCreator)
            .debug()
   });
});
