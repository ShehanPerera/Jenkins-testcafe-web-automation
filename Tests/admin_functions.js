import {Selector, Role} from 'testcafe';
import elements from '../Selectors/elements';

const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'sdpadmin')
        .typeText(elements.password, 'test123#')
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

test('Admin view app details', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"))
        .click(elements.apiDetails, {speed: 0.05})
        .click(elements.chargingDetails)
        .click(elements.revenueShare)
        .click(elements.activityLog);
});

test('Admin verify user include errors', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"))
        .click(elements.changeStateButton)
        .click(elements.verifyUser)
        .click(elements.verifyUserButton)
        .click(elements.verifyUserComment)
        .typeText(elements.verifyUserComment, ' ')
        .pressKey('backspace')
        .click(Selector('.main-section__heading'))
        .expect(Selector('.field-error').innerText).contains('Comment is required')
        .click(elements.verifyUserComment)
        .typeText(elements.verifyUserComment, 'Verify User')
        .click(elements.userEditSave)
        .expect(elements.verifyUserMessage.innerText).eql('Already Verified Service Provider Account');


});

test('Admin search wrong app name', async t => {
    await t
        .typeText(elements.appSearch, "makeapp123")
        .expect(elements.searchError.innerText).eql('Sorry, We can\'t find any applications for your search criteria, please try again');
});


test('Admin accept app for terminate', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"))
        .click(elements.changeStateButton)
        .typeText(elements.changeStateRemarks, 'Accept')
        .click(elements.stateRadio)
        .click(elements.adminSaveChanges)
        .click(elements.appSelect.withText("makeapp1"))
        .expect(Selector(elements.activeAppLogo).exists).ok();

});

test('Admin accept app for reactive', async t => {
    await t
        .typeText(elements.appSearch, "makeapp4")
        .click(elements.appSelect.withText("makeapp4"))
        .click(elements.changeStateButton)
        .typeText(elements.changeStateRemarks, 'Accept')
        .click(elements.stateRadio)
        .click(elements.adminSaveChanges)
        .click(elements.appSelect.withText("makeapp4"))
        .expect(Selector(elements.activeAppLogo).exists).ok();

});

test('Admin accept without remark  ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp2")
        .click(elements.appSelect.withText("makeapp2"))
        .click(elements.changeStateButton)
        .click(elements.stateRadio)
        .click(elements.adminSaveChanges)
        .expect(elements.emptyRemarkError.innerText).eql('This field is required');
});

test('Admin save app without remark and option selecting', async t => {
    await t
        .typeText(elements.appSearch, "makeapp2")
        .click(elements.appSelect.withText("makeapp2"))
        .click(elements.changeStateButton)
        .click(elements.adminSaveChanges)
        .expect(elements.emptyRemarkError.innerText).eql('This field is required')
        .expect(elements.changeStateNotSelectedError.innerText).eql('Please select an option to proceed.');

});

test('Admin limited production app ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp2")
        .click(elements.appSelect.withText("makeapp2"))
        .click(elements.changeStateButton)
        .typeText(elements.changeStateRemarks, 'Limited')
        .click(elements.limitedRadio)
        .click(elements.adminSaveChanges)
        .expect(Selector(elements.limitedAppLogo).exists).ok();

});

test('Admin scheduled active production app ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp3")
        .click(elements.appSelect.withText("makeapp3"))
        .click(elements.changeStateButton)
        .typeText(elements.changeStateRemarks, 'Schedule active')
        .click(elements.scheduleRadio)
        .click(elements.adminSaveChanges)
        .expect(Selector(elements.scheduledActiveAppLogo).exists).ok();
});

test('Admin reject app ', async t => {
    await t
        .typeText(elements.appSearch, "draft1")
        .click(elements.appSelect.withText("draft1"))
        .click(elements.changeStateButton)
        .typeText(elements.changeStateRemarks, 'Reject')
        .click(elements.rejectRadio)
        .click(elements.adminSaveChanges)
        .expect(Selector(elements.rejectAppLogo).exists).ok();
});

test('Admin suspend app if only active to terminate', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"));
    if (await elements.activeAppLogo.visible) {
        await t
            .click(elements.changeStateButton)
            .typeText(elements.changeStateRemarks, 'Suspend')
            .click(elements.stateRadio)
            .click(elements.adminSaveChanges)
    }
    await t.expect(Selector(elements.suspendAppLogo).exists).ok();

});

test('Admin suspend app if only active to reactive', async t => {
    await t
        .typeText(elements.appSearch, "makeapp4")
        .click(elements.appSelect.withText("makeapp4"));
    if (await elements.activeAppLogo.visible) {
        await t
            .click(elements.changeStateButton)
            .typeText(elements.changeStateRemarks, 'Suspend')
            .click(elements.stateRadio)
            .click(elements.adminSaveChanges)
    }
    await t.expect(Selector(elements.suspendAppLogo).exists).ok();

});

test('Admin terminate suspended app ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"));
    if (await elements.suspendAppLogo.visible) {
        await t
            .click(elements.appTerminate)
            .click(elements.terminateRemarksSelect)
            .typeText(elements.terminateRemarks, 'Terminate')
            .click(elements.appRejectButton)
    }
    await t.expect(Selector(elements.terminateAppLogo).exists).ok();

});

test('Admin Reactive suspended app', async t => {
    await t
        .typeText(elements.appSearch, "makeapp4")
        .click(elements.appSelect.withText("makeapp4"));
    if (await elements.suspendAppLogo.visible) {
        await t
            .click(elements.changeStateButton)
            .typeText(elements.changeStateRemarks, 'Reactive')
            .click(elements.stateRadio)
            .click(elements.adminSaveChanges)
    }
    await t.expect(Selector(elements.activeAppLogo).exists).ok();

});

test('Admin add ncs ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp2")
        .click(Selector('span').withText("makeapp2"))
        .click(elements.apiDetails)
        .click(elements.ncsAddButton)
        .click(elements.ncsUSSDButton)
        .click(elements.ncscaasButton)
        .click(elements.ncsSubscriptionButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.ussdURL)
        .typeText(elements.ussdURL, 'http://ss')
        .click(elements.inzpireNextButton)
        .click(elements.ussdKeyWord)
        .typeText(elements.ussdKeyWord, '286')
        .click(elements.inzpireNextButton)
        .click(elements.ussdChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.ussdChargingAmount)
        .typeText(elements.ussdChargingAmount, '3.00')
        .click(elements.inzpireNextButton)
        .click(elements.caasURL)
        .typeText(elements.caasURL, 'http://ss')
        .click(elements.inzpireNextButton)
        .click(elements.caasEnableMobileAccountforMobitel)
        .click(elements.inzpireNextButton)
        .click(elements.subscriptionResponseMessage)
        .typeText(elements.subscriptionResponseMessage, 'Hello!!!')
        .click(elements.unsubscriptionResponseMessage)
        .typeText(elements.unsubscriptionResponseMessage, 'Bye!!!')
        .click(elements.subscriptionURL)
        .typeText(elements.subscriptionURL, 'http://ss')
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.prepaidChargingFrequency)
        .click(elements.prepaidDaily)
        .click(elements.prepaidChargingAmount)
        .pressKey('backspace')
        .click(elements.prepaidChargingAmount)
        .typeText(elements.prepaidChargingAmount, '2.00')
        .click(elements.postpaidChargingFrequency)
        .click(elements.postpaidDaily)
        .click(elements.postpaidChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.postpaidChargingAmount)
        .typeText(elements.postpaidChargingAmount, '40.00')
        .click(elements.adminUpdate)
        .click(elements.appSelect.withText("makeapp2"))
        .click(elements.apiDetails);
    await t
        .expect(elements.smsAPI.exists).ok()
        .expect(elements.ussdAPI.exists).ok()
        .expect(elements.caasAPI.exists).ok()
        .expect(elements.subscriptionAPI.exists).ok();
});

test('Admin remove ncs ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp2")
        .click(Selector('span').withText("makeapp2"))
        .click(elements.apiDetails)
        .click(elements.ncsAddButton)
        .click(elements.ncsUSSDButton)
        .click(elements.ncscaasButton)
        .click(elements.ncsSubscriptionButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.inzpireNextButton)
        .click(elements.adminUpdate)
        .click(Selector('span').withText("makeapp2"))
        .click(elements.apiDetails);
    await t
        .expect(elements.ussdAPI.exists).notOk()
        .expect(elements.caasAPI.exists).notOk()
        .expect(elements.subscriptionAPI.exists).notOk();

});

test('Admin Modify app ', async t => {
    await t
        .typeText(elements.appSearch, "makeapp1")
        .click(elements.appSelect.withText("makeapp1"))

        //*** General details changing
        .click(elements.generaDetailsEdit)
        .click(elements.allowedHostEdit)
        .typeText(elements.allowedHostEdit, ',172.16.1.208')
        .click(elements.descriptionEdit)
        .typeText(elements.descriptionEdit, 'testing')
        .click(elements.whitelistedNoEdit)
        .typeText(elements.whitelistedNoEdit, '94715236201')
        .click(elements.blacklistedNoEdit)
        .typeText(elements.blacklistedNoEdit, '94715236014')
        .click(elements.generaDetailsAdvanced)
        //.click(elements.numberMaskingEnabling)
        .click(elements.generaUpdateButton)

        //*** API details changing

        .click(elements.apiDetails)
        .click(elements.smsAPI)
        .click(elements.smsEdit)
        .click(elements.smsEditURL)
        .typeText(elements.smsEditURL, 'dd')
        .click(elements.smsUpdateButton)
        .click(elements.ussdAPI)
        .click(elements.ussdEdit)
        .click(elements.ussdEditURL)
        .typeText(elements.ussdEditURL, 'dd')
        .click(elements.ussdUpdateButton)
        .click(elements.caasAPI)
        .click(elements.caasEdit)
        .click(elements.caasEditURL)
        .typeText(elements.caasEditURL, 'dd')
        .click(elements.caasUpdateButton)
        .click(elements.subscriptionAPI)
        .click(elements.subscriptionEdit)
        .click(elements.subscriptionURLEdit)
        .typeText(elements.subscriptionURLEdit, 'dd')
        .click(elements.subscriptionUpdateButton)

        //***** Charging details changing

        .click(elements.chargingDetails)
        .click(elements.chargingDetails)
        .click(elements.smsChargingAPI)
        .click(elements.smsChargingEdit)
        .click(elements.smsChargingAmount)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.smsChargingAmount)
        .typeText(elements.smsChargingAmount, '3.00')
        .click(elements.smsChargingUpdateButton)
        .click(elements.ussdChargingAPI)
        .click(elements.ussdChargingEdit)
        .click(elements.ussdChargingAmountEdit)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.ussdChargingAmountEdit)
        .typeText(elements.ussdChargingAmountEdit, '3.00')
        .click(elements.ussdChargingUpdateButton)
        .click(elements.subscriptionChargingAPI)
        .click(elements.subscriptionChargingEdit)
        .click(elements.subscriptionChargingAmountPostpaidFrequencyEdit)
        .click(elements.subscriptionChargingAmountPostpaidFrequencyEditDaily)
        .click(elements.subscriptionChargingAmountPostpaidEdit)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.subscriptionChargingAmountPostpaidEdit)
        .typeText(elements.subscriptionChargingAmountPostpaidEdit, '36.00')
        .click(elements.subscriptionChargingUpdateButton)

        //*** Revenue share changes
        .click(elements.revenueShare)
        .click(elements.revenueShareEdit)
        .click(elements.revenueSharePercentageEdit)
        .pressKey('backspace')
        .pressKey('backspace')
        .click(elements.revenueSharePercentageEdit)
        .typeText(elements.revenueSharePercentageEdit, '80')
        .click(elements.revenueShareUpdateButton)

});

test('Admin edit user ncs', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorEditSPData)
        //sms mo
        .click(elements.appCreatorsmsmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotps, '5')
        .click(elements.appCreatorsmsmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotpd, '6000')
        //sms mt
        .click(elements.appCreatorsmsmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmttps, '5')
        .click(elements.appCreatorsmsmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmttpd, '6000')
        .click(elements.appCreatorUSSD)
        //ussd mo
        .click(elements.appCreatorUSSDmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmotps, '5')
        .click(elements.appCreatorUSSDmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmotpd, '6000')
        //ussd mt
        .click(elements.appCreatorUSSDmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmttps, '5')
        .click(elements.appCreatorUSSDmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmttpd, '6000')
        .click(elements.appCreatorCaas)
        //caas
        .click(elements.appCreatorCaastps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorCaastps, '5')
        .click(elements.appCreatorCaastpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorCaastpd, '6000')
        .click(elements.appCreatorSubscription)
        //subscriptions
        .click(elements.appCreatorSubscriptionMBMD)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorSubscriptionMBMD, '300')
        .click(elements.appCreatorSubscriptionMsubs)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorSubscriptionMsubs, '6000')
        .click(elements.appCreatorSave)



});

test('Admin edit existing user ncs', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "sachini3")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorEditSPData)
        //sms mo
        .click(elements.appCreatorsmsmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotps, '5')
        .click(elements.appCreatorsmsmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotpd, '6000')
        //sms mt
        .click(elements.appCreatorsmsmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmttps, '5')
        .click(elements.appCreatorsmsmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmttpd, '6000')
        .click(elements.appCreatorUSSD)
        //ussd mo
        .click(elements.appCreatorUSSDmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmotps, '5')
        .click(elements.appCreatorUSSDmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmotpd, '6000')
        //ussd mt
        .click(elements.appCreatorUSSDmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmttps, '5')
        .click(elements.appCreatorUSSDmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmttpd, '6000')
        .click(elements.appCreatorCaas)
        //caas
        .click(elements.appCreatorCaastps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorCaastps, '5')
        .click(elements.appCreatorCaastpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorCaastpd, '6000')
        .click(elements.appCreatorSubscription)
        //subscriptions
        .click(elements.appCreatorSubscriptionMBMD)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorSubscriptionMBMD, '300')
        .click(elements.appCreatorSubscriptionMsubs)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorSubscriptionMsubs, '6000')
        .click(elements.appCreatorSave)



});

test('Admin edit user ncs errors', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorEditSPData)
        //sms mo
        .click(elements.appCreatorsmsmotps)
        .pressKey('backspace')
        .expect(elements.appCreatorsmsmotpsError.innerText).contains('Messages per second is required. It can\'t be empty.')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotps, '-5')
        .expect(elements.appCreatorsmsmotpsError.innerText).contains('Messages per second should be a positive number.')
        .click(elements.appCreatorsmsmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorsmsmotpdError.innerText).contains('Messages per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorsmsmotpd, '-5')
        .expect(elements.appCreatorsmsmotpdError.innerText).contains('Messages per day should be a positive number.')
        .click(elements.appCreatorsmsmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmotps, '5')
        .expect(elements.appCreatorsmsmotpdError.innerText).contains('Messages Per Day should be greater than Messages Per Second')
        //sms mt
        .click(elements.appCreatorsmsmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorsmsmttpsError.innerText).contains('Messages per second is required. It can\'t be empty.')
        .typeText(elements.appCreatorsmsmttps, '-5')
        .expect(elements.appCreatorsmsmttpsError.innerText).contains('Messages per second should be a positive number.')
        .click(elements.appCreatorsmsmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorsmsmttpdError.innerText).contains('Messages per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorsmsmttpd, '-5')
        .expect(elements.appCreatorsmsmttpdError.innerText).contains('Messages per day should be a positive number.')
        .click(elements.appCreatorsmsmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorsmsmttps, '5')
        .expect(elements.appCreatorsmsmttpdError.innerText).contains('Messages Per Day should be greater than Messages Per Second')
        .click(elements.appCreatorUSSD)
        //ussd mo
        .click(elements.appCreatorUSSDmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorUSSDmotpsError.innerText).contains('Messages per second is required. It can\'t be empty.')
        .typeText(elements.appCreatorUSSDmotps, '-5')
        .expect(elements.appCreatorUSSDmotpsError.innerText).contains('Messages per second should be a positive number.')
        .click(elements.appCreatorUSSDmotpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorUSSDmotpdError.innerText).contains('Messages per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorUSSDmotpd, '-5')
        .expect(elements.appCreatorUSSDmotpdError.innerText).contains('Messages per day should be a positive number.')
        .click(elements.appCreatorUSSDmotps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmotps, '5')
        .expect(elements.appCreatorUSSDmotpdError.innerText).contains('Messages Per Day should be greater than Messages Per Second')
        //ussd mt
        .click(elements.appCreatorUSSDmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorUSSDmttpsError.innerText).contains('Messages per second is required. It can\'t be empty.')
        .typeText(elements.appCreatorUSSDmttps, '-5')
        .expect(elements.appCreatorUSSDmttpsError.innerText).contains('Messages per second should be a positive number.')
        .click(elements.appCreatorUSSDmttpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorUSSDmttpdError.innerText).contains('Messages per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorUSSDmttpd, '-5')
        .expect(elements.appCreatorUSSDmttpdError.innerText).contains('Messages per day should be a positive number.')
        .click(elements.appCreatorUSSDmttps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorUSSDmttpd, '5')
        .expect(elements.appCreatorUSSDmttpdError.innerText).contains('Messages Per Day should be greater than Messages Per Second')
        .click(elements.appCreatorCaas)
        //caas
        .click(elements.appCreatorCaastps)
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorCaastpsError.innerText).contains('Maximum transactions per second is required. It can\'t be empty.')
        .typeText(elements.appCreatorCaastps, '-5')
        .expect(elements.appCreatorCaastpsError.innerText).contains('Maximum transactions per second should be a positive number.')
        .click(elements.appCreatorCaastpd)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorCaastpdError.innerText).contains('Maximum transactions per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorCaastpd, '-5')
        .expect(elements.appCreatorCaastpdError.innerText).contains('Maximum transactions per day should be a positive number.')
        .click(elements.appCreatorCaastps)
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorCaastps, '5')
        .expect(elements.appCreatorCaastpdError.innerText).contains('Maximum Transactions Per Day should be greater than Maximum Transactions Per Second.')
        .click(elements.appCreatorSubscription)
        //subscriptions
        .click(elements.appCreatorSubscriptionMBMD)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .expect(elements.appCreatorSubscriptionMBMDError.innerText).contains('Maximum number of Broadcast Messages per day is required. It can\'t be empty.')
        .typeText(elements.appCreatorSubscriptionMBMD, '300')
        .click(elements.appCreatorSubscriptionMsubs)
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(elements.appCreatorSubscriptionMsubs, '6000')
        .click(elements.appCreatorSave);
});

test('Admin suspend user', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorSuspend)
        .typeText(elements.appCreatorSuspendRemarks, "suspend user")
        .click(elements.appCreatorSuspendsave)
        .expect(elements.appCreatorSuspendlogo.innerText).eql('Suspend')
});

test('Admin active suspended user', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorAcive)
        .typeText(elements.appCreatorAciveRemarks, "active user")
        .click(elements.appCreatorAcivesave)
        .expect(elements.appCreatorAcivelogo.innerText).eql('approved')
});
test('Admin suspend user with errors', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorSuspend)
        .typeText(elements.appCreatorSuspendRemarks, " ")
        .click(elements.appCreatorSuspendsave)
        .expect(elements.appCreatorSuspendlogo.innerText).eql('Suspend')
});

test('Admin active suspended user with errors', async t => {
    await t
        .click(elements.appCreator)
        .typeText(elements.appCreatorSearch, "testcafeuser")
        .click(elements.appCreatorSelect)
        .click(elements.appCreatorAcive)
        .typeText(elements.appCreatorAciveRemarks, " ")
        .click(elements.appCreatorAcivesave)
        .expect(elements.appCreatorAcivelogo.innerText).eql('approved')
});
