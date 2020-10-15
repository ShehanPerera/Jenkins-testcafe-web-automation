import { Selector, Role } from 'testcafe';
import elements from '../Selectors/elements';

const UserRole = Role('https://da-mspace.hsenidmobile.com/registration-v3/', async t => {
    await t
        .typeText(elements.username, 'shehan3')
        .typeText(elements.password, 'Test123#')
        .click(elements.loginBtn)
});

fixture `msapce soltura contact app`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`
    .beforeEach(async t => {
        await t
            .useRole(UserRole)
            .wait(3000)
            .click(elements.xpand);
        
    });

test("login and create alert app", async (t) => {    
    await t
    .click('#main-header__logo > div')
    .click('#home-create')
    .click('#contactIcon')
    .typeText('#create-app-name', 'autoappc2')
    .typeText('#create-app-description', 'create-app-description')
    .click('#selectShortCodeSpan > select')
    .click(Selector('option').withText('77000'))
    .typeText('#appCreationArea > div > div > div.span8 > div:nth-child(2) > div > div > div.span8 > span:nth-child(2) > div:nth-child(3) > div.row-fluid.pad-top10 > div:nth-child(1) > div > input', 'keywc2')
    .typeText('#collapseResponseSettings > div > div.row-fluid.pad-top10 > div > textarea', 'Automatic Response Message for contact app')
    .click('#create-submit-btn')
    .click('#appCreateConfirmModal > div.modal-footer > div:nth-child(1) > button.btn.btn-sol.btn-3x.btn-main.ng-binding')
    .expect(Selector('#app-status > span > span').innerText).eql('Pending')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(1) > div.minor-info-category > h3').innerText).eql('App Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(1) > div:nth-child(2) > div.minor-info-category > h3').innerText).eql('Routing Key Configurations')
    .expect(Selector('body > span:nth-child(3) > div > span > div > div:nth-child(2) > div > div.content-area > div > div > span > div:nth-child(2) > div > div > h3').innerText).eql('How to Use');

});