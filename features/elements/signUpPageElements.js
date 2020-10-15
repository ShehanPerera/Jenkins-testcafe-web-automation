const { Selector } = require('testcafe');

class signUpPageElements {
    constructor() {
        this.username = Selector('[name="username"]');
        this.email = Selector('[name="email"]');
        this.mobileNo = Selector('[name="msisdn"]');
        this.password = Selector('[name="password"]');
        this.continueBtn = Selector('button').withText("Continue");
        this.otpField = Selector('[name="otp"]');

        //create corporate account page elements
        this.coporatePageHeading = Selector('.main-topic');
        this.orgName = Selector('[name="organizationName"]');
        this.legalEntitySelector = Selector('[name="organizationSize"]');
        this.legalEntity = this.legalEntitySelector.find('option');
        this.industrySelector = Selector('[name="organizationIndustry"]');
        this.industry = this.industrySelector.find('option');
        this.streetAddr = Selector('[name="contactPersonAddress"]');
        this.citySelector = Selector('[name="city"]');
        this.city = this.citySelector.find('option');
        this.provinceSelector = Selector('[name="province"]');
        this.province = this.provinceSelector.find('option');
        this.countrySelector = Selector('[name="country"]');
        this.country = this.countrySelector.find('option');
        this.postCode = Selector('[name="postCode"]');
        this.contactPersonName = Selector('[name="contactPersonFullName"]');
        this.birthDay = Selector('#rw_1_input');
        this.NIC = Selector('[name="contactPersonIdentificationNo"]');
        this.fileUpload = Selector('#file-upload');
        this.nextBtn = Selector('button').withText("Next");
        this.beneficiaryName = Selector('[name="beneficiaryName"]');
        this.bankNameSelector = Selector('[name="bankName"]');
        this.bankName = this.bankNameSelector.find('option');
        this.bankBranchName = Selector('[name="bankBranchName"]');
        this.bankBranchCode = Selector('[name="bankBranchCode"]');
        this.bankAccNo = Selector('[name="bankAccountNo"]');
        this.completeBtn = Selector('button').withText("Complete");

        //errors
        this.orgNameRequired = Selector('.form-input-fields').nth(0).child(2);
        this.legalEntityRequired = Selector('.form-input-fields').nth(1).child(2);
        this.streetAddrRequired = Selector('.form-input-fields').nth(3).child(2);
        this.contactNameRequired = Selector('.form-input-fields').nth(8).child(2);
        this.NICRequired = Selector('.form-input-fields').nth(11).child(2);
        this.copyRequired = Selector('.form-input-fields').nth(12).child(2);
    }
}
module.exports = signUpPageElements;
