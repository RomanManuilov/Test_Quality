var MainPage = require('../PageObjects/mainPage.js');
var mainPage = new MainPage();

describe('Форма личного кабинета сайта Quality.net.ua', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка полей формы не странице "Имя пользователя","Пароль" кнопка "Войти"', function () {
        browser.get(global.qualityMainPage);
        try {
            expect(mainPage.loginCustomerLocator.isPresent()).toBeTruthy('Нет поля "Имя пользователя"');
            expect(mainPage.passwordCustomerLocator.isPresent()).toBeTruthy('Нет поля "Пароль"');
            expect(mainPage.loginButtonLocator.isPresent()).toBeTruthy('Нет кнопки "Войти"');
        }
        catch (err) {
            fail(err)
        }

    });
    it('Вход в линый кабинет успешен.', function () {
        try {
            mainPage.enterAccountCustomer('', '')//Установить входные парамтеры login,pass от акк QUALITY, проверка производится на рабочем акк. quality.
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
            expect(mainPage.nameCustomerLocator.getText()).toBe('QUALITY', "Нет имени компании");
        }
        catch (err) {
            fail(err)
        }
    });
});