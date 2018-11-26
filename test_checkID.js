var LoginPage = require('./PageObjects/loginPageManager.js');
var loginPage = new LoginPage();

describe('Проверка ID в базе PhpMyAdmin', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Вход в аккаунт', function() {
        browser.get('https://manager.quality-mail.com/logon');
            loginPage.enterLogin("", "");
            expect(element(by.css('#logoBar')).isPresent()).toBeTruthy();
            var arrID = ['14440','14435','6592'];
            for (let i = 0; i < arrID.length; i++){
                browser.get(`https://manager.quality-mail.com/clientsedit/?intClientID=${arrID[i]}#about`);

            }
    });
});