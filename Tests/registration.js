import {Selector, Role} from 'testcafe';
import elements from '../Selectors/elements';


fixture`msapce`
    .page`https://da-mspace.hsenidmobile.com/registration-v3/`;

test('Registration', async t => {
    await t
        .click(elements.regNewUser)
        .debug()
        .typeText(elements.regUsername, "testcafeuser")
        .typeText(elements.regEmail, "testcafeuser@gmail.com")
        .typeText(elements.regMsisdn, "94714521320")
        .typeText(elements.regPassword, "Test123#")
        .click(elements.regButton)
        .typeText(elements.regOtp, "123456", {speed: 0.05})
        .click(elements.regButton, {speed: 0.05})
        .debug();

});

test('User edit profile', async t => {
    await t
        .typeText(elements.username, 'testcafeuser')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
        .click(elements.userDetails)
        .click(elements.userSettings)
        .click(elements.orgDetails)
        .click(elements.userEditDetails)
        .typeText(elements.orgCompany, 'test company')
        .click(elements.orgLegalEntity)
        .pressKey('down')
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgIndustry)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.orgAddress, 'address')
        .click(elements.orgCity)
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgProvince)
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgCountry)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.orgPostCode, '13644')
        .click(elements.userEditSave)

        .click(elements.contactDetails)
        .click(elements.userEditDetails)
        .typeText(elements.contactName, 'contact name')
        .click(elements.contactBday)
        .typeText(elements.contactBday, '1935-06-10')
        .click(elements.contactGender)
        .pressKey('down')
        .typeText(elements.contactIDNo, '15464204753')
        .debug()
        .click(elements.userEditSave)

        .click(elements.beneficiaryDetails)
        .click(elements.userEditDetails)
        .typeText(elements.beneficiaryName, 'beneficiary Name')
        .click(elements.beneficiaryBankName)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.beneficiaryBankBranchName, 'bank Branch Name')
        .typeText(elements.beneficiaryBrnachCode, '120')
        .typeText(elements.beneficiaryBankAccount, '2132654')
        .click(elements.userEditSave)

        .click(elements.termsandconditions)
        .click(elements.basicDetails);
});

test('Existing user edit profile', async t => {
    await t
        .typeText(elements.username, 'sachini3')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
        .click(elements.userDetails)
        .click(elements.userSettings)
        .click(elements.orgDetails)
        .click(elements.userEditDetails)
        .typeText(elements.orgCompany, 'test company')
        .click(elements.orgLegalEntity)
        .pressKey('down')
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgIndustry)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.orgAddress, 'address')
        .click(elements.orgCity)
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgProvince)
        .pressKey('down')
        .pressKey('down')
        .click(elements.orgCountry)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.orgPostCode, '13644')
        .click(elements.userEditSave)

        .click(elements.contactDetails)
        .click(elements.userEditDetails)
        .typeText(elements.contactName, 'contact name')
        .click(elements.contactBday)
        .typeText(elements.contactBday, '1935-06-10')
        .click(elements.contactGender)
        .pressKey('down')
        .typeText(elements.contactIDNo, '15464204753')
        //.click(Selector('.custom-file-upload'))
        //.setFilesToUpload(Selector('.custom-file-upload'),'../Images/hesnid.jpg')
        .debug()
        .click(elements.userEditSave)

        .click(elements.beneficiaryDetails)
        .click(elements.userEditDetails)
        .typeText(elements.beneficiaryName, 'beneficiary Name')
        .click(elements.beneficiaryBankName)
        .pressKey('down')
        .pressKey('down')
        .typeText(elements.beneficiaryBankBranchName, 'bank Branch Name')
        .typeText(elements.beneficiaryBrnachCode, '120')
        .typeText(elements.beneficiaryBankAccount, '2132654')
        .click(elements.userEditSave)

        .click(elements.termsandconditions)
        .click(elements.basicDetails);
});

test('Registration with errors', async t => {
    await t
        .click(elements.regNewUser)
        .typeText(elements.regUsername, "t")
        .typeText(elements.regEmail, "testcafe")
        .typeText(elements.regMsisdn, "94711")
        .typeText(elements.regPassword, "te")
        .click(elements.regButton)
        .expect(Selector('.field-error').innerText).contains('Your username must contain alphanumeric( A-Z,0-9),length 5-20 ,_ and -')
        .expect(Selector('div.row:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').innerText).contains('Email address is invalid.')
        .expect(Selector('.col-lg-8 > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)\n').innerText).contains('Plase make sure your number starts with 9471xxxxxxx or 9470xxxxxxx')
        .expect(Selector('div.row:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').innerText).contains('Enter alphanumeric with special characters.Minimum password length 8-20');
});

test('Forget password', async t => {
    await t
        .click(elements.forgetPassword)
        .typeText(elements.recoverUsername, "testcafeuser")
        .click(elements.regButton)
        .typeText(elements.regOtp, "123456", {speed: 0.05})
        .click(elements.regButton, {speed: 0.05})
        .debug()
        .typeText(elements.regPassword, "Test123@")
        .typeText(elements.retypePassword, "Test123@")
        .click(elements.regButton)
        .expect(Selector('#status2success').innerText).contains('You have successfully logout from the system');
});
