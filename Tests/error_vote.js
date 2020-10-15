import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';

const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'shehan3')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});

fixture `msapce soltura error message in contact app`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            .wait(5000)
            .click(elements.xpand)
            .click('#main-header__logo > div')
            .click('#home-create')
            .click(elements.vote);
        
    });


    test("1. Error message for login and create vote app with invalid app name ", async (t) => {
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
        .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
        .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
        .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
        .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
        .click('#create-submit-btn')
        .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(1) > div > div:nth-child(2) > div.span12.mg0 > label').innerText).eql('Invalid Application Name. Please choose another name.');
    
    });

test("2. Error message for login and create vote app without app description", async (t) => {
    
    await t
    .typeText('#create-app-name', 'withotdes1')
    .typeText('#create-app-description', 'a')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click('#create-app-description')
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(1) > div > div:nth-child(3) > div.span12.mg0 > label').innerText).eql('App Description Cannot be Empty');
    
});


test("3. Error message for login and create vote app without short code", async (t) => {

    await t
    .typeText('#create-app-name', 'withotsc1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywv4')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#create-submit-btn')
    .expect(Selector('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div.span12.mg0.ng-scope > label').innerText).eql('Short Code Cannot be Empty');
    
});

test("4. Error message for login and create vote app without keyword", async (t) => {
    const nokw = Selector('[ng-show="rkValidation.showError"]').child(0);

    await t
    .typeText('#create-app-name', 'withotkw1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click('#create-submit-btn')
    .expect(nokw.innerText).eql('Keyword should be at least 2 characters and not more than 15 characters');
    
});

test("5. Error message for login and create vote app with existing keyword", async (t) => {
    const exstkw = Selector('[ng-show="rkValidation.showError"]').child(0);
    
    await t
    .typeText('#create-app-name', 'withotkw1')
    .typeText('#create-app-description', 'desc')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click('#create-submit-btn')
    .expect(exstkw.innerText).eql('Invalid Short code and keyword combination. Please choose another value.');
    
});

test("6. Error message for login and create vote app without start date", async (t) => {
    const startdate = Selector('[ng-show="startDateUndefinedValidation.show"]').child(0);
    const gs = Selector('b').withText('General Settings');
    
    await t
    .typeText('#create-app-name', 'without sd')
    .typeText('#create-app-description', 'error-for-emty-start date')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click(gs)
    .click('#app-start-date')
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(startdate.innerText).eql('Start Date Must be Selected');

});

test("7. Error message for login and create vote app without end date", async (t) => {
    const enddate = Selector('[ng-show="validityPeriodUndefinedValidation.show"]').child(0);
    const gs = Selector('b').withText('General Settings')

    await t
    .typeText('#create-app-name', 'without sd')
    .typeText('#create-app-description', 'error-for-emty-start date')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click(gs)
    .click('#expireDateSwitch')
    .click('#create-submit-btn')
    .expect(enddate.innerText).eql('End Date Must be Selected');

});

test("8. Error message for login and create vote app without response for success vote", async (t) => {
    const rs = Selector('.ng-binding').withText('Response Settings');
    const resp = Selector('[ng-model="votingCampaign.responseSettings.voteSuccessMessage"]');
    const ErrorResmsg = Selector('[ng-show="votingResponseValidation.show"]').child(0);

    await t
    .typeText('#create-app-name', 'without sr')
    .typeText('#create-app-description', 'error-for-emty-subscription response')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '2')
    .click(rs)
    .click(resp)
    .pressKey('ctrl+a delete')
    .click('#create-submit-btn')
    .expect(ErrorResmsg.innerText).eql('Successful vote Response cannot be Empty');

});


test("9. Error message for login and create vote app without candidate details", async (t) => {
    const Errorcand = Selector('[ng-show="votingCandidateValidation.show"]').child(0);  

    await t
    .typeText('#create-app-name', 'votea')
    .typeText('#create-app-description', 'error-for-emty-appname')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .click('#create-submit-btn')
    .expect(Errorcand.innerText).eql('Candidate details need to be completed');

});

test("10. Error message for login and create vote app with duplicate candidate codes", async (t) => {
    const rs = Selector('div').withText('Response Settings');
    const Errorincand = Selector('[ng-show="votingCandidateValidation.show"]').child(0);

    await t
    .typeText('#create-app-name', 'without sr')
    .typeText('#create-app-description', 'error-for-emty-subscription response')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywa2')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(2) > div.span6 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span5 > input', '1')
    .typeText('#collapseScheduleSettings > div > div:nth-child(3) > div.span6 > input', '1')
    .click('#create-submit-btn')
    .expect(Errorincand.innerText).eql('Candidate Code Cannot Be Duplicated');

});