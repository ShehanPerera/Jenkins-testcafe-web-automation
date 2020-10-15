import { Selector } from 'testcafe';

fixture `msapce`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`;

test('New Test 9', async t => {
    await t
        .typeText(Selector('#username'), 'sachini3')
        .typeText(Selector('#password'), 'test123#')
        .click(Selector('button').withText('LOGIN'))
        .click(Selector('div').withText('XPAND').nth(6).find('img'))
        .click(Selector('.action-icon.icon-plus.icon-2x'))
        .click(Selector('#alertBigIcon'))
        .typeText(Selector('#create-app-name'), 'cas6')
        .typeText(Selector('#create-app-description'), 'This is testing prepaid and postpaid')
       	.click(Selector('[name="smsShortCode"][class^="input-block-level popover-marker ng-pristine ng-va"][data-default-value="Select"]'))
        .click(Selector('option').withText('77000'))
        .typeText(Selector('[name="appKeyWord"].input-block-level.ng-pristine.ng-valid'), 'cas6')
        .click(Selector('b').withText('Response Settings'))
        .typeText(Selector('div').withText('Response for Successful Subscription').nth(10).find('[class^="input-block-level simulator-response ng-pristine n"]'), '!!')
        .typeText(Selector('[class^="input-block-level simulator-response ng-pristine n"]'), '!!')
        .click(Selector('b').withText('Charging Settings'))
        .click(Selector('#alert-charge-model'))
        .click(Selector('#alert-charge-frequency_pre_paid'))
        .click(Selector('#alert-subscription-frequency-monthly_pre_paid'))
        .click(Selector('#alert-charge-frequency_post_paid'))
        .click(Selector('#alert-subscription-frequency-daily_post_paid'))
        .click(Selector('#create-submit-btn'))
        .click(Selector('button').withText('Confirm'))
        .click(Selector('.main-header__right-profile-name'))
        .click(Selector('.main-header__dropdown-menu-item').nth(7).find('a').withText('Log Out'))
	.typeText(Selector('#username'), 'sdpadmin')
        .typeText(Selector('#password'), 'test123#')
        .click(Selector('button').withText('LOGIN'))
        .click(Selector('div').withText('INZPIRE').nth(6).find('img'))
        .click(Selector('h4').withText('cas6'))
        .click(Selector('span').withText('APIs'))
        .click(Selector('.ncs-configured[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$1.0.1"]'))
        .click(Selector('span').withText('CHARGING'))
        .click(Selector('.ncs-configured[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$1.0.1"]'))
        .click(Selector('span').withText('REVENUE SHARE'))
        .click(Selector('button').withText('Change State'))
        .click(Selector('[name="selection"][data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$0.0.0"]'))
        .typeText(Selector('.form-control[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]'), 'Test')
        .click(Selector('.btn.app-view-modal__btn--confirm[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]'))
        .click(Selector('.close[data-dismiss="modal"][data-reactid=".0.2.1.1.1.0.0.0.3.0.0"]'))
        .click(Selector('[data-reactid=".0.2.0.0.0.1.0.2.0.1.0"]'))
        .click(Selector('a').withText('Log Out'));
});
