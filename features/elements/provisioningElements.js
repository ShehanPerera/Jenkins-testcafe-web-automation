const { ClientFunction, Selector } = require('testcafe');
let testController = null;
class provisioningElements {
    constructor() {
        //Inzpire
        this.appSearch = Selector('[data-reactid=".0.2.1.1.0.0.0.0.0.1"]');
        this.appSelect = Selector('span');
        //this.generaDetails = this.appSelect.withText('GENERAL'); Need to fix
        //this.generaDetails = Selector('#general-info-link');
        this.apiDetails = this.appSelect.withText('APIs');  
        this.chargingDetails = this.appSelect.withText('CHARGING');
        this.revenueShare = this.appSelect.withText('REVENUE SHARE');
        this.activityLog = Selector('#activity-info-link');
        //this.appDropdown= this.appSelect.withText('dropdown'));
        //this.activeAppLogo = Selector('.app-view-modal__status--active-production');
        this.appDetailsTab = Selector('[data-reactid=".0.2.1.1.2.0.0.1.0.2.0:$0.0"]');
        this.appServiceTab = Selector('[data-reactid=".0.2.1.1.2.0.0.1.0.2.0:$1.0"]');
        this.appSettingsTab = Selector('[data-reactid=".0.2.1.1.2.0.0.1.0.2.0:$2.0"]');
        this.ncsSMSButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$0.0.1"]');
        this.ncsUSSDButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$1.0.1"]');
        this.ncscaasButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$2.0.1"]');
        this.ncsSubscriptionButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$3.0.1"]');
        this.inzpireNextButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.4.1.3"]');
        this.inzpireBackButton = Selector('[data-reactid=".0.2.1.1.2.0.0.1.4.1.2"]');
        this.ussdURL = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.4.0.0.1.0.0.0.1"]');
        this.ussdKeyWord = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.5:$0.0.0.0.1:$0.0.0.1.1.0.0.1"]');
        this.ussdChargingAmount = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.5:$0.0.0.0.1:$1.0.0.1.1.0.0.0.1"]');
        this.caasURL = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.8.0.0.1.0.0.0.1"]');
        this.caasEnableInAppPurchasing = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.9:$0.0.0.2.0.0.0.0.1.0.0.0.1"]');
        this.caasEnableDebitRequest = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.9:$0.0.0.3.0.0.0.0.1.0.0.0.1"]');
        this.caasEnableMobileAccountforMobitel = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.9:$0.0.0.5.0.0:0.0.0.0.1.0.0.0.1"]');
        this.subscriptionResponseMessage = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.1.0.0.0.1"]');
        this.unsubscriptionResponseMessage = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.1.1.0.0.1"]');
        this.subscriptionURL = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.4.0.0.0.1"]');
        this.prepaidChargingFrequency = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.0.0.0.1"]');
        this.prepaidMonthly = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.0.0.0.1.$1"]');
        this.prepaidDaily = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.0.0.0.1.$0"]');
        this.prepaidChargingAmount = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.1.0.0.1"]');
        this.postpaidChargingFrequency = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.5.0.0.0.1"]');
        this.postpaidMonthly = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.0.0.0.1.$1"]');
        this.postpaidDaily = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.5.0.0.0.1.$1"]');
        this.postpaidChargingAmount = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.5.1.0.0.1"]');
        this.adminUpdate = Selector('[data-reactid=".0.2.1.1.2.0.0.1.4.1.4"]');
        this.smsAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$0.0.1"]');
        this.ussdAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$1.0.1"]');
        this.caasAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$2.0.2"]');
        this.subscriptionAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$3.0.2"]');
        this.pendingAppLogo = Selector('app-view-modal__status--pending-approve');
        this.activeAppLogo = Selector('.app-view-modal__status--active-production');
        this.suspendAppLogo = Selector('.app-view-modal__status--suspend');
        this.rejectAppLogo = Selector('.app-view-modal__status--reject');
        this.terminateAppLogo = Selector('.app-view-modal__status--terminate');
        this.limitedAppLogo = Selector('.app-view-modal__status--limited-production');
        this.scheduledActiveAppLogo = Selector('.app-view-modal__status--scheduled-active-production');
        this.applicationViewClose = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.0.0.0"]');
        this.draftApplicationViewClose = Selector('[data-reactid=".0.2.1.1.2.0.0.1.0.1.0.0"]');
        this.smsSelectedIcon = Selector('[class="app-creating-modal__api-types--select"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$0.0.0"]');
        this.smsNotSelectedIcon = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$0.0.0"]');
        this.ussdSelectedIcon = Selector('[class^="app-creating-modal__api-types--select"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$1.0.0"]');
        this.ussdNotSelectedIcon = Selector('[class^="app-creating-modal__api-types--hover"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$1.0.0"]');
        this.caasSelectedIcon = Selector('[class^="app-creating-modal__api-types--select"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$2.0.0"]');
        this.caasNotSelectedIcon = Selector('[class^="app-creating-modal__api-types--hover"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$2.0.0"]');
        this.subscriptionSelectedIcon = Selector('[class^="app-creating-modal__api-types--select"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$3.0.0"]');
        this.subscriptionNotSelectedIcon = Selector('[class^="app-creating-modal__api-types--hover"][data-reactid=".0.2.1.1.2.0.0.1.2.1.0.0.1.1.$3.0.0"]');
        this.searchError = Selector('[data-reactid=".0.2.1.1.0.5.0.1"]');
        this.emptyRemarkError = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.2.2"]');
        this.changeStateNotSelectedError = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.2.2"]');
        this.noServicesError = Selector('.modal__header-steps-single-step--error[data-reactid=".0.2.1.1.2.0.0.1.0.2.0:$1.0"]');

        //Inzpire admin
        this.unverifiedUserModal = Selector('[data-reactid=".0.2.1.1.1.1.0.0.0.1"]');
        this.unverifiedUserModalDesc= Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.0.0.0.0"]').child(0);
        this.adminSaveChanges = Selector('[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]');
        this.stateRadio = Selector('[name="selection"][data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$0.0.0"]');
        this.limitedRadio = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$1.0.0"]');
        this.scheduleRadio = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$2.0.0"]');
        this.rejectRadio = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$3.0.0"]');
        this.changeStateButton = Selector('button').withText('Change State');
        this.changeStateRemarks = Selector('.form-control[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]');
        this.terminateRemarksSelect = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.2.1.1:0"]');
        this.terminateRemarks = Selector('.form-control[data-reactid=".0.2.1.1.1.3.0.0.1.1.0.0.0.1"]');
        this.ncsAddButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.1.1"]');
        this.appTerminate = Selector('.app-view-modal__btn--terminate');
        this.appRejectButton = Selector('.btn.app-view-modal__btn--reject[data-reactid=".0.2.1.1.1.3.0.0.2.0.1"]');
        this.verifyUser = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.0.0.0.0.1"]');
        this.verifyUserButton = Selector('.btn');
        this.verifyUserComment = Selector('[name=verifyComment]');
        this.verifyUserMessage = Selector('.sub-text');
        this.appCreator = Selector('[data-reactid=".0.2.1.0.0.0.$1.0.1"]');
        this.appCreatorSearch = Selector('[data-reactid=".0.2.1.1.0.0.0.0.0.1"]');
        this.appCreatorSelect = Selector('[data-reactid=".0.2.1.1.0.2.0.0.0.1.0.0"]');
        this.appCreatorEditSPData = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.2.0.0"]');
        this.appCreatorsmsmotps = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=10.1.0.0.0.0.0.1"]');
        this.appCreatorsmsmotpd = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=10.1.0.0.1.0.0.1"]');
        this.appCreatorsmsmttps = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=11.1.0.0.0.0.0.1"]');
        this.appCreatorsmsmttpd = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=11.1.0.0.1.0.0.1"]');
        this.appCreatorUSSD = Selector('[data-reactid=".0.2.1.1.1.0.0.2.0.2:$1.0"]');
        this.appCreatorUSSDmotps = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=10.1.0.0.0.0.0.1"]');
        this.appCreatorUSSDmotpd = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=10.1.0.0.1.0.0.1"]');
        this.appCreatorUSSDmttps = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=11.1.0.0.0.0.0.1"]');
        this.appCreatorUSSDmttpd = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=11.1.0.0.1.0.0.1"]');
        this.appCreatorCaas = Selector('[data-reactid=".0.2.1.1.1.0.0.2.0.2:$2.0.1"]');
        this.appCreatorCaastps = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.4.0.0.1.0.0.0.1"]');
        this.appCreatorCaastpd = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.4.0.0.2.0.0.0.1"]');
        this.appCreatorSubscription = Selector('[data-reactid=".0.2.1.1.1.0.0.2.0.2:$3.0.1"]');
        this.appCreatorSubscriptionMBMD = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.1.0.0.1.0.0.0.1"]');
        this.appCreatorSubscriptionMsubs = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.1.0.0.2.0.0.0.1"]');
        this.appCreatorSave = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.2.0.1"]');
        this.appCreatorSuspend = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.2.0.2"]');
        this.appCreatorAcive = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.2.0.3"]');
        this.appCreatorSuspendRemarks = Selector('[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]');
        this.appCreatorAciveRemarks = Selector('[data-reactid=".0.2.1.1.1.2.0.0.1.1.0.0.0.1"]');
        this.appCreatorSuspendsave = Selector('[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]');
        this.appCreatorAcivesave = Selector('[data-reactid=".0.2.1.1.1.2.0.0.2.0.1"]');
        this.appCreatorSuspendlogo = Selector('[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]');
        this.appCreatorAcivelogo = Selector('[data-reactid=".0.2.1.1.0.2.0.0.0.1.0.2.0"]');
        this.appCreatorsmsmotpsError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=10.1.0.0.0.0.0.2"]');
        this.appCreatorsmsmotpdError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=10.1.0.0.1.0.0.2.2"]');
        this.appCreatorsmsmttpsError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=11.1.0.0.0.0.0.2.2"]');
        this.appCreatorsmsmttpdError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.2.0.0.1.$/=11.1.0.0.1.0.0.2.2"]');
        this.appCreatorUSSDmotpsError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=10.1.0.0.0.0.0.2.2"]');
        this.appCreatorUSSDmotpdError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=10.1.0.0.1.0.0.2"]');
        this.appCreatorUSSDmttpsError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=11.1.0.0.0.0.0.2.2"]');
        this.appCreatorUSSDmttpdError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.3.0.0.1.$/=11.1.0.0.1.0.0.2.2"]');
        this.appCreatorCaastpsError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.4.0.0.1.0.0.0.2.2"]');
        this.appCreatorCaastpdError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.4.0.0.2.0.0.0.2.2"]');
        this.appCreatorSubscriptionMBMDError = Selector('[data-reactid=".0.2.1.1.1.0.0.2.1.1.1.0.0.1.0.0.0.1"]');

        // Admin edit general setting
        this.generaDetailsEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.2.3.0.0"]');
        this.allowedHostEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.1.0.0.0.1.0.1"]');
        this.descriptionEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.1.0.0.1.0.0.1"]');
        this.whitelistedNoEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.1.0.1.0.0.0.1"]');
        this.blacklistedNoEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.1.0.1.1.0.0.1"]');
        this.generaDetailsAdvanced = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.0.1.0"]');
        this.numberMaskingEnabling = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.1.1.2.0.0.0.1.0.0.0.0"]');
        this.generaUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.0.0.0.2.3.1.1"]');

        //Admin edit sms ncs
        this.smsEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$sms.1.1.3.0.0.2"]');
        this.smsEditURL = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$sms.1.0:$0.0.0.1.0.1.0.0.0.1"]');
        this.smsUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$sms.1.1.3.1.1"]');

        this.smsChargingAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$0.0.2"]');
        this.smsChargingUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.0.2.3.1.1"]');
        this.smsChargingEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.0.2.3.0.0.2"]');
        this.smsChargingAmount = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.0.1.$0.0.6.2.0.0.0.1"]');

        //Admin edit ussd ncs
        this.ussdEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.2.1.1.3.0.0.2"]');
        this.ussdEditURL = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.2.1.0:$0.2.0.0.0.1"]');
        this.ussdUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.2.1.1.3.1.1"]');

        this.ussdChargingAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$1.0.1"]');
        this.ussdChargingUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.1.2.3.1.1"]');
        this.ussdChargingEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.1.2.3.0.0.2"]');
        this.ussdChargingAmountEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.1.1.$0.0.3.2.0.0.0.1"]');

        //Admin edit caas ncs
        this.caasEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.3.2.3.0.0.2"]');
        this.caasEditURL = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.3.1.$0.2.0.0.0.1"]');
        this.caasUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.3.2.3.1.1"]');

        //Admin edit subscription ncs
        this.subscriptionEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$subscription.1.1.3.0.0.2"]');
        this.subscriptionURLEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$subscription.1.0:$0.3.0.0.0.1"]');
        this.subscriptionUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.1.0.0.$subscription.1.1.3.1.1"]');

        this.subscriptionChargingAPI = Selector('[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$2.0.1"]');
        this.subscriptionChargingUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.2.3.1.1"]');
        this.subscriptionChargingEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.2.3.0.0"]');

        this.subscriptionChargingAmountPrepaidEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.3.1.0.0.1"]');
        this.subscriptionChargingAmountPrepaidFrequencyEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.3.0.0.0.1"]');
        this.subscriptionChargingAmountPrepaidFrequencyEditDaily = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.3.0.0.0.1.$0"]');
        this.subscriptionChargingAmountPrepaidFrequencyEditMonthly = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.3.0.0.0.1.$1"]');

        this.subscriptionChargingAmountPostpaidEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.5.1.0.0.1"]');
        this.subscriptionChargingAmountPostpaidFrequencyEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.5.0.0.0.1"]');
        this.subscriptionChargingAmountPostpaidFrequencyEditDaily = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.5.0.0.0.1.$0"]');
        this.subscriptionChargingAmountPostpaidFrequencyEditMonthly = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.2.0.0.3.1.$0.3.5.0.0.0.1.$1"]');

        //Revenue share
        this.revenueShareEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.4.2.3.0.0.2"]');
        this.revenueSharePercentageEdit = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.4.1.0.$0.0.0.0.0.0.1"]');
        this.revenueShareUpdateButton = Selector('[data-reactid=".0.2.1.1.1.0.0.0.3.1.0.4.2.3.1.1"]');

        //Inzpire sp-user
        this.addInzpire = Selector('[data-reactid=".0.2.1.1.0.3.0.0.0.0"]');
        this.applicationNameInzpire = Selector('.form-control[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.1.0.0.0.1"]');
        this.applicationDescriptonInzpire = Selector('.form-control[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.2.0.0.0.1"]');
        this.allowedHostInzpire = Selector('.form-control[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.3.0.0.0.1"]');
        this.smsRecivingURL = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=10.1.0.0.0.0.0.1"]');
        this.smsDefaultSender = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.1.0.0.0.1"]');
        this.smsSendAddressAlias = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.1.1.0.0.1"]');
        this.smsKeyword = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$0.0.1.$/=10.1.0.0.1.0.0.1"]');
        this.smsMTChargingAmount = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=10.1.0.0.2.0.0.0.1"]');
        this.smsMOChargingAmount = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=11.1.0.0.2.0.0.0.1"]');
        this.enableSMSMOCharging = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$0.0.1.$/=10.1.0.1.0.0.0.0.1.0.0.0.1"]');
        this.sendForApproval = Selector('button').withText('Send for approval');
        this.saveAsDraft = Selector('[data-reactid=".0.2.1.1.2.0.0.1.4.1.1.1"]');
        this.applicationNameErrorInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.1.0.0.0.2.2"]');
        this.applicationDescriptionErrorInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.2.0.0.0.2.2"]');
        this.allowedHostErrorInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.3.0.0.0.2.2"]');
        this.whitelistedNoInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.4.0.0.0.1"]');
        this.blacklistedNoInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.4.1.0.0.1"]');
        this.blacklistedNoErrorInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.4.1.0.0.2.2"]');
        this.whitelistedNoErrorInzpire = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.0.0.0.0.1:$0.0.0.4.0.0.0.2.2"]');
        this.smsRecivingURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=10.1.0.0.0.0.0.2.2"]');
        this.smsDefaultSenderError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.1.0.0.0.2.2"]');
        this.smsSendAddressAliasError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.1.1.0.0.2.2"]');
        this.smsMOChargingAmountError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=10.1.0.0.2.0.0.0.2.2"]');
        this.smsMTChargingAmountError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=11.1.0.0.2.0.0.0.2.2"]');
        this.ussdURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.4.0.0.1.0.0.0.2.2"]');
        this.ussdKeyWordError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.5:$0.0.0.0.1:$0.0.0.1.1.0.0.2.2"]');
        this.ussdChargingAmountError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.5:$0.0.0.0.1:$1.0.0.1.1.0.0.0.2.2"]');
        this.caasURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.8.0.0.1.0.0.0.2.2"]');
        this.caasChargingDisableError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.9:$0.0.0.5.0.1.2"]');
        this.subscriptionResponseMessageError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.1.0.0.0.2.2"]');
        this.unsubscriptionResponseMessageError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.1.1.0.0.2.2"]');
        this.subscriptionURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.4.0.0.0.2.2"]');
        this.subscriptionURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.6.0.0.4.0.0.0.2.2"]');
        this.prepaidChargingAmountError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.2.1.0.0.2.2"]');
        this.postpaidChargingAmountError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.7:$0.0.0.0.1:$1.0.0.1.5.1.0.0.2.2"]');
        this.smsKeywordError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$0.0.1.$/=10.1.0.0.1.0.0.2.2"]');
        this.smsMOChargingAmountE = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=10.1.0.0.2.0.0.0.1"]');
        this.smsMTChargingAmountE = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.3:$0.0.0.0.1:$1.0.1.$/=11.1.0.0.2.0.0.0.1"]');
        this.inzpireFirstApp = Selector('[data-reactid=".0.2.1.1.0.6.0.3"]');
        this.inzpireSpan = Selector('[data-reactid=".0.2.1.1.0.6.0.3"]');
        this.enableDeliveryReportTogal = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.2.0.0.0.0.1.0.0.0.1"]');
        this.deliveryReportURL = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.3.0.0.0.1"]');
        this.deliveryReportURLError = Selector('[data-reactid=".0.2.1.1.2.0.0.1.2.2.0.0.1.$/=11.1.0.3.0.0.0.2.2"]');

    }
}
module.exports = provisioningElements


