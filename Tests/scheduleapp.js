import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';


const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'shehan3')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});

fixture `msapce soltura schedule app`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            .wait(3000)
            .click(elements.xpand);
        
    });


test("login and create schedule app", async (t) => {   
    await t
    .click('#main-header__logo > div')
    .click('#home-create')
    .click('#scheduleIcon')
    .typeText('#create-app-name', 'autoapps2')
    .typeText('#create-app-description', 'create-app-description')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keyws2')
    .click('#schedule-frequency-select')
    .click(Selector('option').withText('Monthly'))
    .click('#create-submit-btn')
    .click('#appCreateConfirmModal > div.modal-footer > div:nth-child(1) > button.btn.btn-sol.btn-3x.btn-main.ng-binding')
    .expect(Selector('#app-status > span > span').innerText).eql('Pending')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(1) > div.minor-info-category > h3').innerText).eql('App Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(2) > div.minor-info-category > h3').innerText).eql('Routing Key Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(2) > div > div > h3').innerText).eql('How to Use');

});

test("login and create schedule app, subscription charging- change prepaid and postpaid frequency and amount", async (t) => {   
    const cs = Selector('b').withText('Charging Settings');
    const precharam = Selector('[ng-model="alertCharging.amountPrePaid"]');
    const poscharam = Selector('[ng-model="alertCharging.amountPostPaid"]');

    await t
    .click('#main-header__logo > div')
    .click('#home-create')
    .click('#scheduleIcon')
    .typeText('#create-app-name', 'autoapps2')
    .typeText('#create-app-description', 'create-app-description')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keyws2')
    .click('#schedule-frequency-select')
    .click(Selector('option').withText('Monthly'))
    .click(cs)
    .click('#alert-charge-frequency_pre_paid')
    .click('#alert-subscription-frequency-monthly_pre_paid')
    .click(precharam)
    .click(Selector('option').withText('Rs. 50.00 + tax'))
    .click('#alert-charge-frequency_post_paid')
    .click('#alert-subscription-frequency-daily_post_paid')
    .click(poscharam)
    .click(Selector('option').withText('Rs. 2.00 + tax'))
    .click('#create-submit-btn')
    .click('#appCreateConfirmModal > div.modal-footer > div:nth-child(1) > button.btn.btn-sol.btn-3x.btn-main.ng-binding')
    .expect(Selector('#app-status > span > span').innerText).eql('Pending')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(1) > div.minor-info-category > h3').innerText).eql('App Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(2) > div.minor-info-category > h3').innerText).eql('Routing Key Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(2) > div > div > h3').innerText).eql('How to Use');

});

test("login and create schedule app, permsg charging", async (t) => {   
    const cs = Selector('b').withText('Charging Settings');

    await t
    .click('#main-header__logo > div')
    .click('#home-create')
    .click('#scheduleIcon')
    .typeText('#create-app-name', 'autoapps2')
    .typeText('#create-app-description', 'create-app-description')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keyws2')
    .click('#schedule-frequency-select')
    .click(Selector('option').withText('Monthly'))
    .click(cs)
    .click('#alert-charge-model')
    .click('#modelPerMessage')
    .click('#create-submit-btn')
    .click('#appCreateConfirmModal > div.modal-footer > div:nth-child(1) > button.btn.btn-sol.btn-3x.btn-main.ng-binding')
    .expect(Selector('#app-status > span > span').innerText).eql('Pending')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(1) > div.minor-info-category > h3').innerText).eql('App Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(2) > div.minor-info-category > h3').innerText).eql('Routing Key Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(2) > div > div > h3').innerText).eql('How to Use');

});