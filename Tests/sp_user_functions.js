import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';

const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'testuser1')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});


fixture `msapce`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
            await t
                .useRole(UserRole)
                //.debug()
                //.wait(5000)
                .click(elements.inzpire);
});

// This only work for sp without app
test('SP make app first time ', async t => {
    await t
        .click(elements.inzpireFirstApp)
        .typeText(elements.applicationNameInzpire, 'firstapp1')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
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
        .typeText(elements.smsKeyword, 'fa1')
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
        .typeText(elements.ussdKeyWord, '285')
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
        .click(elements.sendForApproval)
        .click(elements.appSelect.withText("firstapp1"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok()
        .expect(elements.ussdAPI.exists).ok()
        .expect(elements.caasAPI.exists).ok()
        .expect(elements.subscriptionAPI.exists).ok();
});

test('SP make a new app ', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'makeapp1')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
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
        .typeText(elements.smsKeyword, 'mk1')
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
        .click(elements.sendForApproval)
        .click(elements.appSelect.withText("makeapp1"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok()
        .expect(elements.ussdAPI.exists).ok()
        .expect(elements.caasAPI.exists).ok()
        .expect(elements.subscriptionAPI.exists).ok();
});

test('SP view app details', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"))
        .click(elements.apiDetails,{speed: 0.05})
        .click(elements.chargingDetails)
        .click(elements.revenueShare)
        .click(elements.activityLog);
});

test('Save as draft and update with adding ncs  ', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'draft1')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
        .typeText(elements.allowedHostInzpire, '127.0.0.1')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ncsSubscriptionButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.subscriptionResponseMessage, 'Hi')
        .typeText(elements.unsubscriptionResponseMessage, 'Bye')
        .typeText(elements.subscriptionURL, 'http://ss')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.prepaidChargingFrequency)
        .click(elements.prepaidMonthly)
        .click(elements.prepaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.prepaidChargingAmount,'20.00')
        .click(elements.postpaidChargingFrequency)
        .click(elements.postpaidDaily)
        .click(elements.postpaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.postpaidChargingAmount,'1.00')
        .click(elements.saveAsDraft)
        .click(elements.applicationViewClose)
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .expect(elements.smsNotSelectedIcon.visible).ok()
        .expect(elements.ussdNotSelectedIcon.visible).ok()
        .expect(elements.caasNotSelectedIcon.visible).ok()
        .expect(elements.subscriptionSelectedIcon.visible).ok()

        //**Adding SMS to draft application
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .click(elements.ncsSMSButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.smsRecivingURL,'http://sss')
        .typeText(elements.smsDefaultSender,'071')
        .typeText(elements.smsSendAddressAlias,'071')
        .click(elements.inzpireNextButton)
        .typeText(elements.smsKeyword,'dr1')
        .click(elements.inzpireNextButton)
        .click(elements.saveAsDraft)
        .click(elements.applicationViewClose)
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .expect(elements.smsSelectedIcon.visible).ok()
        .expect(elements.ussdNotSelectedIcon.visible).ok()
        .expect(elements.caasNotSelectedIcon.visible).ok()
        .expect(elements.subscriptionSelectedIcon.visible).ok()

        //** Adding USSD to draft application
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .click(elements.ncsUSSDButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdURL,'http://sss')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdKeyWord,'283')
        .click(elements.inzpireNextButton)
        .click(elements.ussdChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.ussdChargingAmount,'5.00')
        .click(elements.inzpireNextButton)
        .click(elements.saveAsDraft)
        .click(elements.applicationViewClose)
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .expect(elements.smsSelectedIcon.visible).ok()
        .expect(elements.ussdSelectedIcon.visible).ok()
        .expect(elements.caasNotSelectedIcon.visible).ok()
        .expect(elements.subscriptionSelectedIcon.visible).ok()

        //** Adding CAAS to draft application
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .click(elements.ncscaasButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.caasURL,'http://sss')
        .click(elements.inzpireNextButton)
        .click(elements.caasEnableMobileAccountforMobitel)
        .click(elements.inzpireNextButton)
        .click(elements.saveAsDraft)
        .click(elements.applicationViewClose)
        .click(elements.appSelect.withText('draft1'))
        .click(elements.appServiceTab)
        .expect(elements.smsSelectedIcon.visible).ok()
        .expect(elements.ussdSelectedIcon.visible).ok()
        .expect(elements.caasSelectedIcon.visible).ok()
        .expect(elements.subscriptionSelectedIcon.visible).ok()

        //** Send for approval
        .click(elements.appSelect.withText('draft1'))
        .click(elements.sendForApproval)

});

test('SP make a new app with errors ', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, ' ')
        .expect(elements.applicationNameErrorInzpire.innerText).eql('Application name is required. It can\'t be empty')
        .typeText(elements.applicationNameInzpire, 'mak')
        .expect(elements.applicationNameErrorInzpire.innerText).eql('Application name should be more than 3 characters and less than 10 characters.')
        .typeText(elements.applicationNameInzpire, 'eapp1')
        .expect(elements.applicationNameErrorInzpire.innerText).eql('App name already exists')
        .typeText(elements.applicationNameInzpire, 'eapp2')
        .expect(elements.applicationNameErrorInzpire.innerText).eql('Application name should be more than 3 characters and less than 10 characters.')
        .typeText(elements.allowedHostInzpire, ' ')
        .expect(elements.allowedHostErrorInzpire.innerText).contains('Allowed host addresses should be in the format of x.x.x.x (Eg: 123.4.56.8)')
        .typeText(elements.allowedHostInzpire, '127.0.0.')
        .expect(elements.allowedHostErrorInzpire.innerText).contains('Allowed host address should only contain numbers and dots')
        .typeText(elements.whitelistedNoInzpire, '94')
        .typeText(elements.blacklistedNoInzpire, '94')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireBackButton)
        .expect(elements.applicationDescriptionErrorInzpire.innerText).eql('Application description is required. It can\'t be empty')
        .expect(elements.whitelistedNoErrorInzpire.innerText).eql('Mobile numbers should be in the format of 9471xxxxxxx or 9470xxxxxxx')
        .expect(elements.blacklistedNoErrorInzpire.innerText).eql('Mobile numbers should be in the format of 9471xxxxxxx or 9470xxxxxxx')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.appSettingsTab)
        .expect(elements.noServicesError.visible).ok()
        .click(elements.ncsSMSButton)
        .click(elements.ncsUSSDButton)
        .click(elements.ncscaasButton)
        .click(elements.ncsSubscriptionButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.smsRecivingURL, ' ')
        .expect(elements.smsRecivingURLError.innerText).eql('Messages receiving URL is required. It can\'t be empty.')
        .typeText(elements.smsRecivingURL, 'http:/gg')
        .expect(elements.smsRecivingURLError.innerText).eql('URL should be similar to following format: http://www.abc.com')
        .typeText(elements.smsDefaultSender, ' ')
        .expect(elements.smsDefaultSenderError.innerText).eql('Please specify either the default sender address or alias.')
        .typeText(elements.smsDefaultSender, '07')
        .expect(elements.smsDefaultSenderError.innerText).eql('Default sender address should be longer than 2 characters and less than 12 characters.')
        .typeText(elements.smsDefaultSender, '07000000000000')
        .expect(elements.smsDefaultSenderError.innerText).eql('Default sender address should be longer than 2 characters and less than 12 characters.')
        .typeText(elements.smsSendAddressAlias, '07')
        .expect(elements.smsSendAddressAliasError.innerText).eql('Default sender address should be longer than 2 characters and lesser than 10 characters.')
        .typeText(elements.smsSendAddressAlias, '07100000000000000')
        .expect(elements.smsSendAddressAliasError.innerText).eql('Default sender address should be longer than 2 characters and lesser than 10 characters.')
        .click(elements.inzpireNextButton)
        .typeText(elements.smsKeyword, ' ')
        .expect(elements.smsKeywordError.innerText).eql('Keyword is required. It can\'t be empty')
        .typeText(elements.smsKeyword, 'm')
        .expect(elements.smsKeywordError.innerText).eql('Keyword should be at least 2 characters and not more than 15 characters')
        .typeText(elements.smsKeyword, 'k1')
        .expect(elements.smsKeywordError.innerText).eql('Keyword you entered is already in use. Please try another keyword.')
        .typeText(elements.smsKeyword, 'qqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        .expect(elements.smsKeywordError.innerText).eql('Keyword should be at least 2 characters and not more than 15 characters')
        .click(elements.enableSMSMOCharging)
        .click(elements.inzpireNextButton)
        .click(elements.smsMOChargingAmountE)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.smsMOChargingAmountE, ' ')
        .expect(elements.smsMOChargingAmountError.innerText).eql('Charging amount is required. It can\'t be empty')
        .typeText(elements.smsMOChargingAmountE, 'k')
        .expect(elements.smsMOChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.smsMOChargingAmountE, '30.')
        .expect(elements.smsMOChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.smsMOChargingAmountE, '30.000')
        .expect(elements.smsMOChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .click(elements.smsMTChargingAmountE)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.smsMTChargingAmountE, ' ')
        .expect(elements.smsMTChargingAmountError.innerText).eql('Charging amount is required. It can\'t be empty')
        .typeText(elements.smsMTChargingAmountE, 's')
        .expect(elements.smsMTChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.smsMTChargingAmountE, '20.')
        .expect(elements.smsMTChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.smsMTChargingAmountE, '20.000')
        .expect(elements.smsMTChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdURL, ' ')
        .expect(elements.ussdURLError.innerText).eql('Connection URL is required. It can\'t be empty.')
        .typeText(elements.ussdURL, 'http:/gg')
        .expect(elements.ussdURLError.innerText).eql('URL should be similar to following format: https://www.abc.com')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdKeyWord, ' ')
        .expect(elements.ussdKeyWordError.innerText).eql('Keyword is required. It can\'t be empty')
        .typeText(elements.ussdKeyWord, '2')
        .expect(elements.ussdKeyWordError.innerText).eql('Keyword should contain three numbers between 000 and 999')
        .typeText(elements.ussdKeyWord, '82')
        .expect(elements.ussdKeyWordError.innerText).eql('This keyword is not available for the shortcode.')
        .typeText(elements.ussdKeyWord, 'qqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        .expect(elements.ussdKeyWordError.innerText).eql('Keyword should contain three numbers between 000 and 999')
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
        .typeText(elements.ussdChargingAmount, ' ')
        .expect(elements.ussdChargingAmountError.innerText).eql('Charging amount is required. It can\'t be empty')
        .typeText(elements.ussdChargingAmount, 's')
        .expect(elements.ussdChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.ussdChargingAmount, '20.')
        .expect(elements.ussdChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.ussdChargingAmount, '20.000')
        .expect(elements.ussdChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .click(elements.inzpireNextButton)
        .typeText(elements.caasURL, ' ')
        .expect(elements.caasURLError.innerText).eql('Charging notification URL is required. It can\'t be empty.')
        .typeText(elements.caasURL, 'http:/gg')
        .expect(elements.caasURLError.innerText).eql('URL should be similar to following format: https://www.abc.com')
        .click(elements.inzpireNextButton)
        .expect(elements.caasChargingDisableError.innerText).eql('Please select payment instrument to continue')
        .click(elements.caasEnableMobileAccountforMobitel)
        .click(elements.inzpireNextButton)
        .typeText(elements.subscriptionResponseMessage, '   ')
        .expect(elements.subscriptionResponseMessageError.innerText).eql('Subscription response message is required. It can\'t be empty.')
        .pressKey('tab')
        .typeText(elements.unsubscriptionResponseMessage, ' ')
        .expect(elements.unsubscriptionResponseMessageError.innerText).eql('Un-subscription response message is required. It can\'t be empty.')
        .typeText(elements.subscriptionURL, ' ')
        .expect(elements.subscriptionURLError.innerText).eql('If you wish to receive subscription notifications, this is required. Or else disable subscription notifications.')
        .typeText(elements.subscriptionURL, 'http:/gg')
        .expect(elements.subscriptionURLError.innerText).eql('URL should be similar to following format: https://www.abc.com')
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
        .typeText(elements.prepaidChargingAmount, ' ')
        .expect(elements.prepaidChargingAmountError.innerText).eql('Charging amount is required. It can\'t be empty')
        .typeText(elements.prepaidChargingAmount, 's')
        .expect(elements.prepaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.prepaidChargingAmount, '20.')
        .expect(elements.prepaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.prepaidChargingAmount, '20.000')
        .expect(elements.prepaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .click(elements.postpaidChargingFrequency)
        .click(elements.postpaidDaily)
        .click(elements.postpaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.postpaidChargingAmount, ' ')
        .expect(elements.postpaidChargingAmountError.innerText).eql('Charging amount is required. It can\'t be empty')
        .typeText(elements.postpaidChargingAmount, 's')
        .expect(elements.postpaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.postpaidChargingAmount, '20.')
        .expect(elements.postpaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
        .typeText(elements.postpaidChargingAmount, '20.000')
        .expect(elements.postpaidChargingAmountError.innerText).eql('Charging amount should be a positive number with maximum of two decimal places')
});

test('SP make a new app with only sms', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'makeapp2')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
        .typeText(elements.allowedHostInzpire, '127.0.0.1')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ncsSMSButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.smsRecivingURL, 'http://sms')
        .typeText(elements.smsDefaultSender, '071')
        .typeText(elements.smsSendAddressAlias, '071')
        .click(elements.inzpireNextButton)
        .typeText(elements.smsKeyword, 'mk2')
        .click(elements.inzpireNextButton)
        .click(elements.smsMTChargingAmount)
        .pressKey('right')
        .pressKey('right')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.smsMTChargingAmount, '22.00')
        .click(elements.sendForApproval)
        .click(elements.appSelect.withText("makeapp2"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok();
});

test('SP make a new app with only ussd ', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'makeapp3')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
        .typeText(elements.allowedHostInzpire, '127.0.0.1')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ncsUSSDButton)
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdURL, 'http://ussd')
        .click(elements.inzpireNextButton)
        .typeText(elements.ussdKeyWord, '284')
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
        .click(elements.sendForApproval)
        .click(elements.appSelect.withText("makeapp3"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok();
});

test('SP make a new app only with caas and subscription ', async t => {
    await t
        .click(elements.addInzpire)
        .typeText(elements.applicationNameInzpire, 'makeapp4')
        .typeText(elements.applicationDescriptonInzpire, 'This is for testing')
        .typeText(elements.allowedHostInzpire, '127.0.0.1')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ncscaasButton)
        .click(elements.ncsSubscriptionButton)
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
        .click(elements.sendForApproval)
        .click(elements.appSelect.withText("makeapp4"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok()
        .expect(elements.ussdAPI.exists).ok();

});
