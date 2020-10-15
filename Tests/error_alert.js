import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';


const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'shehan3')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});

fixture `msapce soltura error message in alert app`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            .wait(5000)
            .click(elements.xpand)
            .click('#main-header__logo > div')
            .click(elements.alert);
        
    });


    test("1. Error message for login and create alert app with invalid app name ", async (t) => {

        const errormsg = Selector('[ng-show="appNameValidation.showError"]').child(0);

        await t
        .typeText('#create-app-name', 'a')
        .typeText('#create-app-description', 'error-for-appname')
        .click('#selectShortCodeSpan > select')
        .click(Selector('option').withText('77000'))
        .expect(errormsg.innerText).eql('Please use 4 to 9 characters for app name')
        .click('#create-app-name')
        .pressKey('ctrl+a delete')
        .typeText('#create-app-name', '1abcd')
        .click('#create-app-description')
        .expect(errormsg.innerText).eql('App name should be an alphanumeric text and should starts with a non-numeric character')
        .click('#create-app-name')
        .pressKey('ctrl+a delete')
        .typeText('#create-app-name', '_abcd')
        .click('#create-app-description')
        .expect(errormsg.innerText).eql('App name should be an alphanumeric text and should starts with a non-numeric character')
        .click('#create-app-name')
        .pressKey('ctrl+a delete')
        .typeText('#create-app-name', 'testg_alt')
        .click('#create-app-description')
        .expect(errormsg.innerText).eql('The Application Name already exists. Please choose another name.')
        .click('#create-app-name')
        .pressKey('ctrl+a delete')
        .typeText('#create-app-name', ' ')
        .click('#create-app-description')
        .expect(errormsg.innerText).eql('App Name Cannot be Empty') 
        .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
        .click('#create-submit-btn')
        .expect(errormsg.innerText).eql('Invalid Application Name. Please choose another name.');
    
    });

test("2. Error message for login and create alert app without app description", async (t) => {    
    await t
    .typeText('#create-app-name', 'withotdes1')
    .typeText('#create-app-description', 's')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#create-app-description')
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(1) > div > div:nth-child(3) > div.span12.mg0 > label').innerText).eql('App Description Cannot be Empty');
    
});


test("3. Error message for login and create alert app without short code", async (t) => {    
    await t
    .typeText('#create-app-name', 'withotsc1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')    
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#create-submit-btn')
    .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div.span12.mg0.ng-scope > label').innerText).eql('Short Code Cannot be Empty');
    
});

test("4. Error message for login and create alert app without keyword", async (t) => {
    await t
    .typeText('#create-app-name', 'withotkw1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .click('#create-submit-btn')
    .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div.span12.mg0 > label').innerText).eql('Keyword should be at least 2 characters and not more than 15 characters');
    
});

test("5. Error message for login and create alert app with existing keyword", async (t) => {
    const exstkw = Selector('[ng-show="rkValidation.showError"]').child(0);

    await t
    .typeText('#create-app-name', 'withotkw1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#create-submit-btn')
    .expect(exstkw.innerText).eql('Invalid Short code and keyword combination. Please choose another value.');
    
});

test("6. Error message for login and create alert app without start date", async (t) => {
    const startdate = Selector('[ng-show="startDateUndefinedValidation.show"]').child(0);
    
    await t
    .typeText('#create-app-name', 'without sd')
    .typeText('#create-app-description', 'error-for-emty-start date')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#app-start-date')
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(startdate.innerText).eql('Start Date Must be Selected');

});

test("7. Error message for login and create alert app without end date", async (t) => {
    const enddate = Selector('div.row-fluid:nth-child(8) > div:nth-child(1) > label:nth-child(1)');
    const gs = Selector('b').withText('General Settings')
    
    await t
    .typeText('#create-app-name', 'without sd')
    .typeText('#create-app-description', 'error-for-emty-start date')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    //.click(gs)
    .click('#expireDateSwitch')
    .click('#create-submit-btn')
    .expect(enddate.innerText).contains('End Date Must be Selected');

});

test("8. Error message for login and create alert app without subscription response", async (t) => {
    const rs = Selector('.ng-binding').withText('Response Settings');
    const resSubscription = Selector('[ng-model="subscriptionSuccessResponse.text"]');
    const ErrorResSubscription = Selector('[ng-show="subscriptionResponseValidation.show"]').child(0);
    
    await t
    .typeText('#create-app-name', 'without sr')
    .typeText('#create-app-description', 'error-for-emty-subscription response')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click(rs)
    .click(resSubscription)
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(ErrorResSubscription.innerText).eql('Subscription Response cannot be Empty');

});

test("9. Error message for login and create alert app without unsubscription response", async (t) => {
    const rs = Selector('.ng-binding').withText('Response Settings');
    const resUnsubscription = Selector('[ng-model="unsubscriptionSuccessResponse.text"]');
    const ErrorResUnsubscription = Selector('[ng-show="unsubscriptionResponseValidation.show"]').child(0);
    
    await t
    .typeText('#create-app-name', 'without sr')
    .typeText('#create-app-description', 'error-for-emty-subscription response')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click(rs)
    .click(resUnsubscription)
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(ErrorResUnsubscription.innerText).eql('UnSubscription Response cannot be Empty');

});

test("10. Error message for login and create alert app without mobile number", async (t) => {
    const upcon = Selector('[ng-model="contentUpdaters.required"]');
    const mobnum1 = Selector('[ng-model="contentUpdaters.authors"]');
    const Errormobnum = Selector('[ng-show="contentUpdateUndefinedValidation.show"]').child(0);
    
    await t
    .typeText('#create-app-name', 'without sr')
    .typeText('#create-app-description', 'error-for-emty-subscription response')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click(upcon)
    .click(mobnum1)
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(Errormobnum.innerText).eql('Mobile Number cannot be Empty');

});


