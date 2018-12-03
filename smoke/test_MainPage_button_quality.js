const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Проверка на главной страице Quality.net.ua кнопок "Закзать рассылку","Подписаться на Рассылку"', function() {
    beforeAll(()=>{
        browser.waitForAngularEnabled(false);
    });
    beforeEach(()=>{
        browser.get(global.qualityMainPage);
    });
    it('Заказать Рассылку', async function() {
        expect(await mainPage.buttonOrderToSendLocator.isPresent()).toBeTruthy('Нет кнопки "Закзать рассылку"');
        await mainPage.buttonOrderToSendLocator.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order#orderForm','Сылка не совподает');
    });
    it('Подписаться на Рассылку', async function() {
        expect(await mainPage.buttonSubscribeToSendLocator.isPresent()).toBeTruthy('Нет кнопки "Подписаться на Рассылку"');
        await mainPage.buttonSubscribeToSendLocator.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#subscribe','Сылка не совподает');
    });
});
