import { Selector } from 'testcafe';

fixture `msapce`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`;

test('New Test 5', async t => {
    await t
        .typeText(Selector('#username'), 'sachini3')
        .typeText(Selector('#password'), 'Test123#')
        .click(Selector('button').withText('LOGIN'))
        .click(Selector('a').withText('XPAND').find('.common-modules'))
        .click(Selector('.offset10.span2.header-action'))
        .click(Selector('#contactBigIcon'))
        .click(Selector('.row-fluid').nth(250).find('div').withText('Application Name'))
        .typeText(Selector('#create-app-name'), 'ccont3')
        .typeText(Selector('#create-app-description'), 'This is testing')
        .click(Selector('[name="smsShortCode"][class^="input-block-level popover-marker ng-pristine ng-va"][data-default-value="Select"]'))
        .click(Selector('option').withText('77000'))
        .typeText(Selector('[name="appKeyWord"].input-block-level.ng-pristine.ng-valid'), 'cc3')
        .typeText(Selector('[class^="input-block-level simulator-response ng-pristine n"]'), 'Hello!!')
        .click(Selector('a').withText('General Settings'))
        .click(Selector('#app-start-date'))
        .click(Selector('a').withText('27'))
        .click(Selector('b').withText('Charging Settings'))
        .click(Selector('b').withText('Response Settings'))
        .click(Selector('#create-submit-btn'))
        .click(Selector('button').withText('Confirm'))
        .click(Selector('[class^="main-header__menu-link main-header__right-profile-"]'))
        .click(Selector('.main-header__dropdown-menu-item').nth(7).find('a').withText('Log Out'))
        .typeText(Selector('#username'), 'sdpadmin')
        .typeText(Selector('#password'), 'test123#')
        .click(Selector('button').withText('LOGIN'))
        .click(Selector('div').withText('INZPIRE').nth(6).find('img'))
        .click(Selector('span').withText('ccont3'))
        .click(Selector('span').withText('APIs'))
        .click(Selector('span').withText('CHARGING'))
        .click(Selector('span').withText('REVENUE SHARE'))
        .click(Selector('span').withText('ACTIVITY LOG'))
        .click(Selector('button').withText('Change State'))
        .typeText(Selector('.form-control[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]'), 'test')
        .click(Selector('[name="selection"][data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$0.0.0"]'))
        .click(Selector('.btn.app-view-modal__btn--confirm[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]'))
        .click(Selector('.fa.fa-times[data-reactid=".0.2.1.1.1.0.0.0.3.0.0.0.0"]'))
        .click(Selector('a').withText('SDPADMIN'))
        .click(Selector('a').withText('Log Out'));
});
