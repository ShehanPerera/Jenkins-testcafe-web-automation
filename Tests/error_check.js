import { Selector } from 'testcafe';

fixture `msapce`
    .page `https://da-mspace.hsenidmobile.com/registration-v3/`;


test('New Test 20', async t => {
    await t
        .typeText(Selector('#username'), 'sachini3')
        .typeText(Selector('#password'), 'test123#')
        .click(Selector('button').withText('LOGIN'))
        .click(Selector('div').withText('XPAND').nth(6).find('img'))
        .click(Selector('.action-icon.icon-plus.icon-2x'))
        .click(Selector('#scheduleBigIcon'))
        .typeText(Selector('#create-app-name'), 'csp7t',{ speed: 0.01 })
        .typeText(Selector('#create-app-description'), 'gsdg',{ speed: 0.01 });
        
	
	if (await Selector('.add-on.input-field-validation-sign').find('.icon-ok-sign.icon-large').visible ){
		console.log('okay');	
	}
	else {
		if( await Selector('.add-on.input-field-validation-sign').find('.icon-remove-sign.icon-large').visible){
			console.log('not okay');
			if (await Selector('label').visible){
				console.log('Please use 4 to 9 characters for app name');
				await t.typeText(Selector('#create-app-name'), 'csp1',{ speed: 0.01 });
        			await t.typeText(Selector('#create-app-description'), 'gsdg',{ speed: 0.01 });			
			}
			else{
			if (await Selector('label').withText('The Application Name already exists. Please choose another name. ').visible){
			console.log('The Application Name already exists. Please choose another name. ',{ speed: 0.01 });			
			}				
			}	
		}
	}
		
});
