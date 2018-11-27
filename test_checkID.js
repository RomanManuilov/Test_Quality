var LoginPageManager = require('./PageObjects/loginPageManager.js');
var loginPageManager = new LoginPageManager();

describe('Проверка ID в базе PhpMyAdmin', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Вход в аккаунт', function() {

        browser.get('https://manager.quality-mail.com/logon');
        loginPageManager.enterLogin("", "");
        expect(loginPageManager.picLogoLocator.isPresent()).toBeTruthy();

        let arrID = ['14440','14435','6592'];
        let companyName;
        let webDomen;

        for (let i = 0; i < arrID.length; i++){
            browser.get(`https://manager.quality-mail.com/clientsedit/?intClientID=${arrID[i]}#about`);
            companyName += loginPageManager.getCompanyName()/*.then((result)=>{
                console.log("\x1b[32m", 'Имя компании: ', result);
            });*/
            webDomen += loginPageManager.getWebDomen()/*.then((result)=>{
                console.log("\x1b[34m", 'Сайт/домен: ' + result);
            });*/
            loginPageManager.getContactsCompany()/*.then((arr)=>{
                for (let i = 1; i < arr.length; i++){
                    console.log("\x1b[37m", "Контакты: "  + arr[i]);
                }
            });*/
        }

        browser.get('http://maria.quality.net.ua/pma/');
        loginPageManager.enterPhpMyAdminLogin("", "");

        browser.executeScript('window.open()').then(() => {
            browser.getAllWindowHandles().then((handles)=> {
                var secondWindow = handles[1];
                browser.ignoreSynchronization = true;
                browser.switchTo().window(secondWindow).then(()=> {
                    // do whatever you want to do in new window
                });
               /* var firstWindow = handles[0]
                browser.switchTo().window(firstWindow).then(()=> {
                    console.log("Returning back");
                });*/
            });
        });
    });
});