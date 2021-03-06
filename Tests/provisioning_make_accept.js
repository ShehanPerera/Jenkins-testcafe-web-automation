import {Selector, Role} from 'testcafe';
import elements from '../Selectors/elements';

const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'testuser1')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});


fixture`msapce`
    .page`https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            //.debug()
            //.wait(5000)
            .click(elements.inzpire);
    });
test('New Test 14', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'makeapp2')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
        .debug()
        .typeText(elements.allowedHostInzpire, '127.0.0.1')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ncsSMSButton)
        .click(elements.ncsUSSDButton)
        .click(elements.ncscaasButton)
        .click(elements.ncsSubscriptionButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.smsRecivingURL, 'http://sms')
        .typeText(elements.smsDefaultSender, '071')
        .typeText(elements.smsSendAddressAlias, '071')
        .click(elements.inzpireNextButton)
        .typeText(elements.smsKeyword, 'make2')
        .click(elements.inzpireNextButton)
        .click(elements.smsMTChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.smsMTChargingAmount, '22.00')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdURL, 'http://ussd')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdKeyWord, '282')
        .click(elements.inzpireNextButton)
        .doubleClick(elements.ussdChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.ussdChargingAmount, '45.00')
        .click(elements.inzpireNextButton)
        .typeText(elements.caasURL, 'http://caas')
        .click(elements.inzpireNextButton)
        .click(elements.caasEnableMobileAccountforMobitel)
        .click(elements.inzpireNextButton)
        .typeText(elements.subscriptionResponseMessage, 'Hi')
        .pressKey('tab')
        .typeText(elements.unsubscriptionResponseMessage, 'Bye!')
        .typeText(elements.subscriptionURL, 'http://sub')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)

        .click(elements.prepaidChargingFrequency)
        .click(elements.prepaidMonthly)
        .click(elements.prepaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.prepaidChargingAmount)
        .typeText(elements.prepaidChargingAmount, '36.00')

        .click(elements.postpaidChargingFrequency)
        .click(elements.postpaidDaily)
        .click(elements.postpaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.postpaidChargingAmount,'20.00')
        .click(elements.sendForApproval);
       // // .typeText(Selector('.form-control.app-view-modal__input--half[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.1.0.0.1"]'), '0')
       // // .click(Selector('.form-control.app-view-modal__input--half[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.5.1.0.0.1"]'))
       //  .click(Selector('button').withText('Send for approval'))
       //  .click(Selector('a').withText('SACHINI3'))
       //  .click(Selector('a').withText('Log Out'))
       //  .typeText(Selector('#username'), 'sdpadmin')
       //  .typeText(Selector('#password'), 'test123#')
       //  .click(Selector('button').withText('LOGIN'))
       //  .click(Selector('div').withText('INZPIRE').nth(6).find('img'))
       //  .click(Selector('span').withText('makeapp1'))
       //  .click(Selector('span').withText('APIs'))
       //  .click(Selector('.pending-approve[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$1.0.1"]'))
       //  .click(Selector('.pending-approve[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$2.0.1"]'))
       //  .click(Selector('.pending-approve[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$3.0.1"]'))
       //  .click(Selector('span').withText('CHARGING'))
       //  .click(Selector('.pending-approve[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$1.0.1"]'))
       //  .click(Selector('.app-view-modal__api-name[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$2.0.2"]'))
       //  .click(Selector('.modal-body[data-reactid=".0.2.1.1.1.0.0.0.3.1"]'))
       //  .click(Selector('span').withText('REVENUE SHARE'))
       //  .click(Selector('#activity-info-link'))
       //  .click(Selector('button').withText('Change State'))
       //  .typeText(Selector('.form-control[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]'), 'Test')
       //  .click(Selector('[name="selection"][data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$0.0.0"]'))
       //  .click(Selector('.btn.app-view-modal__btn--confirm[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]'))
       //  .click(Selector('.fa.fa-times[data-reactid=".0.2.1.1.1.0.0.0.3.0.0.0.0"]'))
       //  .click(Selector('[data-reactid=".0.2.0.0.0.1.0.2.0.1.0"]'))
       //  .click(Selector('a').withText('Log Out'));
});

