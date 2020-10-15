const { ClientFunction, Selector } = require('testcafe');
let testController = null;
class loginPageElements {
    constructor() {
        this.username = Selector('#username');
        this.password = Selector('#password');
        this.submitBtn = Selector('button').withText('Login');
        this.loginErrorMessage = Selector('.notification-section__body',{timeout: 10000}).child(0);
        this.newUserLink = Selector('a').withText("Register as a New User");
        
    }
}
module.exports = loginPageElements
