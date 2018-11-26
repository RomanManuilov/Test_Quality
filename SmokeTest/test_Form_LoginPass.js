var LoginPageCustomer = require('../PageObjects/mainPage.js');
var loginPageCustomer = new LoginPageCustomer();

let quality_main_page = 'http://quality.net.ua/';

describe('Форма личного кабинета сайта Quality.net.ua', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка полей формы не странице "Имя пользователя","Пароль" кнопка "Войти"', function() {
        browser.get(quality_main_page);
        expect(loginPageCustomer.loginCustomerLocator.isPresent()).toBeTruthy();
        expect(loginPageCustomer.passwordCustomerLocator.isPresent()).toBeTruthy();
        expect(loginPageCustomer.loginButtonLocator.isPresent()).toBeTruthy();
    });
    it('Вход в линый кабинет успешен.', function() {
        loginPageCustomer.enterAccountCustomer('','')//Установить входные парамтеры login,pass от акк QUALITY, проверка производится на рабочем акк. quality.
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
        expect(loginPageCustomer.nameCustomerLocator.getText()).toBe('QUALITY');
    });
});