import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';

//const fs = require('fs');
// const csv = require('csv-parser');
//let text = fs.readFileSync("./Data/duplicate.csv");

// const csvFilePath='./Data/duplicate.csv';
// const csv=require('csvtojson');
// csv()
//     .fromFile(csvFilePath)
//     .then((jsonObj)=>{
//         console.log(jsonObj);
//         /**
//          * [
//          * 	{a:"1", b:"2", c:"3"},
//          * 	{a:"4", b:"5". c:"6"}
//          * ]
//          */
//     });

// Async / await usage
// const jsonArray=await csv().fromFile(csvFilePath);


const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'shehan3')
        .typeText(elements.password, 'test123#')
        .click(elements.loginBtn)
});

fixture `msapce soultura voting app`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            .debug()
            .wait(5000)
            .click(elements.xpand);
        if(elements.addXpand.exists) {
            await t.click(elements.addXpand)
        } else {
            await t.click(elements.trynowBtn);
        }
        await t
            .click(elements.vote)
    });


test('Create a new voting app with soultura', async t => {
    await t
        .typeText(elements.appName, "name123456")
        .typeText(elements.appDescription, 'This is for testing')
        .click(elements.shortCodeList)
        .click(elements.shortCodeOption.withText("77000"))
        .typeText(elements.appKeyWord, "name12345")
        .typeText(elements.candidateCode.nth(0), '001')
        .typeText(Selector('.span6').nth(3).find('.input-block-level.ng-pristine.ng-valid'), 'u')
        // .typeText(elements.candidateDesc.nth(0), 'Candidate 001')
        .typeText(elements.candidateCode.nth(1), '002')
        // .typeText(elements.candidateDesc.nth(1), 'Candidate 002')
        .typeText(Selector('#collapseScheduleSettings').find('.input-block-level.ng-pristine.ng-valid'), 'f')
        .click(elements.generalSettings)
        .click(elements.responseSettings)
        .click(elements.chargingSettings)
        .click(elements.appSubmit)
        .click(elements.confirmBtn)
        .debug()
        .expect(elements.appNameText.innerText).eql("Test123456")
        .expect(elements.descriptionText.innerText).eql("This is for testing")
        .expect(elements.shortCodeText.innerText).eql("77000")
    // .expect(elements.appKeyWordText.innerText).eql("name123").click(Selector('.main-header__dropdown-menu-item').nth(7).find('a').withText('Log Out'))
});

test('Check Validations Errors for empty fields', async t => {
    await t
        .click(elements.appSubmit)
        .expect(elements.nameEmptyError.innerText).contains("Invalid Application Name. Please choose another name.")
        .expect(elements.descriptioEmptyError.innerText).contains("App Description Cannot be Empty")
        .expect(elements.shortCodeEmptyError.innerText).contains("Short Code Cannot be Empty")
        .expect(elements.keywordEmptyError.innerText).contains("Keyword should be at least 2 characters and not more than 15 characters")
        .expect(elements.candidateEmptyError.innerText).contains("Candidate details need to be completed");
});


test('User try to create a voting app with an existing app name', async t => {
    await t
        .typeText(elements.appName, "name123456")
        .typeText(elements.appDescription, 'This is for testing')
        .expect(elements.nameEmptyError.innerText).contains("The Application Name already exists. Please choose another name.");
});


test('User checks already created app card in my apps', async t => {
    await t

});

