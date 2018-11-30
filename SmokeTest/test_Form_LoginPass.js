var LoginCustomerPage = require('../PageObjects/loginCustomerPage.js');
var loginCustomerPage = new LoginCustomerPage();

describe('Форма личного кабинета сайта Quality.net.ua', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка полей формы не странице "Имя пользователя","Пароль" кнопка "Войти"', function () {
        browser.get(global.qualityMainPage);
        try {
            expect(loginCustomerPage.loginCustomerLocator.isPresent()).toBeTruthy('Нет поля "Имя пользователя"');
            expect(loginCustomerPage.passwordCustomerLocator.isPresent()).toBeTruthy('Нет поля "Пароль"');
            expect(loginCustomerPage.loginButtonLocator.isPresent()).toBeTruthy('Нет кнопки "Войти"');
        }
        catch (err) {
            fail(err)
        }

    });
    it('Вход в линый кабинет успешен.', function () {
        try {
            loginCustomerPage.enterAccountCustomer('', '')//Установить входные парамтеры login,pass от акк QUALITY, проверка производится на рабочем акк. quality.
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
            expect(loginCustomerPage.nameCustomerLocator.getText()).toBe('QUALITY', "Нет имени компании");
        }
        catch (err) {
            fail(err)
        }
    });
});