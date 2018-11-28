var LoginPageCustomer = require('../PageObjects/mainPage.js');
var loginPageCustomer = new LoginPageCustomer();

describe('Форма личного кабинета сайта Quality.net.ua', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка полей формы не странице "Имя пользователя","Пароль" кнопка "Войти"', function () {
        browser.get(global.qualityMainPage);
        try {
            expect(loginPageCustomer.loginCustomerLocator.isPresent()).toBeTruthy('Нет поля "Имя пользователя"');
            expect(loginPageCustomer.passwordCustomerLocator.isPresent()).toBeTruthy('Нет поля "Пароль"');
            expect(loginPageCustomer.loginButtonLocator.isPresent()).toBeTruthy('Нет кнопки "Войти"');
        }
        catch (err) {
            fail(err)
        }

    });
    it('Вход в линый кабинет успешен.', function () {
        try {
            loginPageCustomer.enterAccountCustomer('', '')//Установить входные парамтеры login,pass от акк QUALITY, проверка производится на рабочем акк. quality.
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
            expect(loginPageCustomer.nameCustomerLocator.getText()).toBe('QUALITY', "Нет имени компании");
        }
        catch (err) {
            fail(err)
        }
    });
});