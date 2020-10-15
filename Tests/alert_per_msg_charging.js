var fs = require('fs');
var text = fs.readFileSync("alert.txt");
var textByLine = text.toString().split("\n");
var current = textByLine.toString().split(' ');
import { Selector } from 'testcafe';

fixture `msapce`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`;

async function actions (textByLine) {
    var current = textByLine.split(' ');
	test('New Test 7', async t => {
	    await t
		.typeText(Selector('#username'), 'shehan')
		.typeText(Selector('#password'), 'test123#')
		.click(Selector('button').withText('LOGIN'))
		.click(Selector('div').withText('XPAND').nth(6).find('img'))
		.click(Selector('.action-icon.icon-plus.icon-2x'))
		.click(Selector('#alertIcon'))
		.typeText(Selector('#create-app-name'),current[0])
		.typeText(Selector('#create-app-description'), 'This is testing.')
		.click(Selector('[name="smsShortCode"][class^="input-block-level popover-marker ng-pristine ng-va"][data-default-value="Select"]'))
		.click(Selector('option').withText('77000'))
		.typeText(Selector('[name="appKeyWord"].input-block-level.ng-pristine.ng-valid'), current[1])
		.click(Selector('b').withText('Response Settings'))
		.typeText(Selector('div').withText('Response for Successful Subscription').nth(10).find('[class^="input-block-level simulator-response ng-pristine n"]'), '!!')
		.click(Selector('a').withText('Charging Settings'))
		.click(Selector('#alert-charge-model'))
		.click(Selector('#modelPerMessage'))
		.click(Selector('#create-submit-btn'))
		.click(Selector('button').withText('Confirm'))
		.click(Selector('.main-header__right-profile-name'))
		.click(Selector('.main-header__dropdown-menu-item').nth(7).find('a').withText('Log Out'))
		.typeText(Selector('#username'), 'sdpadmin')
		.typeText(Selector('#password'), 'test123#')
		.click(Selector('button').withText('LOGIN'))
		.click(Selector('div').withText('INZPIRE').nth(6).find('img'))
		.click(Selector('h4').withText(current[0]))
		.click(Selector('span').withText('APIs'))
		.click(Selector('.app-view-modal__api-name[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$1.0.2"]'))
		.click(Selector('.app-view-modal__api-name[data-reactid=".0.2.1.1.1.0.0.0.$ncs.1.0:$0.0.2"]'))
		.click(Selector('span').withText('CHARGING'))
		.click(Selector('.ncs-configured[data-reactid=".0.2.1.1.1.0.0.0.$charging.1.0:$1.0.1"]'))
		.click(Selector('span').withText('REVENUE SHARE'))
		.click(Selector('button').withText('Change State'))
		.typeText(Selector('.form-control[data-reactid=".0.2.1.1.1.1.0.0.1.1.0.0.0.1"]'), 'test')
		.click(Selector('[name="selection"][data-reactid=".0.2.1.1.1.1.0.0.1.2.0.$0/=1$0.1.0.0.0.0.$0.0.0"]'))
		.click(Selector('.btn.app-view-modal__btn--confirm[data-reactid=".0.2.1.1.1.1.0.0.2.0.1"]'))
		.click(Selector('.close[data-dismiss="modal"][data-reactid=".0.2.1.1.1.0.0.0.3.0.0"]'))
		.click(Selector('[data-reactid=".0.2.0.0.0.1.0.2.0.1.0"]'))
		.click(Selector('a').withText('Log Out'));
	});
}
var j;
for (j=0;j<textByLine.length-1;j++){
    actions(textByLine[j]);
}
