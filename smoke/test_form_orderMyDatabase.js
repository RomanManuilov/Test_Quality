const OrderQuality = require('../PageObjects/orderQualityPage.js');
const orderQuality = new OrderQuality();
const EC = protractor.ExpectedConditions;

describe('Форма заказа рассылки сайта Quality.net.ua / по базе Quality', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Форма "Заказать рассылку" отрпалена, проверьте email', async function() {
        try{
            await browser.get('http://quality.net.ua/its-base-order');
            expect(await orderQuality.contactPersonLocator.isPresent()).toBeTruthy('Нет поля "Контактное лицо"');
            expect(await orderQuality.companyNameLocator.isPresent()).toBeTruthy('Нет поля "Название компании"');
            expect(await orderQuality.phoneLocator.isPresent()).toBeTruthy('Нет поля "Контактный телефон"');
            expect(await orderQuality.urAddressLocator.isPresent()).toBeTruthy('Нет поля "Юридический почтовый адрес"');
            expect(await orderQuality.mailLocator.isPresent()).toBeTruthy('Нет поля "Адрес электронной почты"');
            expect(await orderQuality.icqLocator.isPresent()).toBeTruthy('Нет поля "Skype"');
            expect(await orderQuality.infoLocator.isPresent()).toBeTruthy('Нет поля "Дополнительная информация"');
            expect(await orderQuality.buttonLocator.isPresent()).toBeTruthy('Нет кнопки "Отправить заявку"');
            await orderQuality.sendOrder("Quality - test","Quality - test","099 999-99-99","Quality - test","Quality - test","Quality - test","Quality - test");
            await browser.wait(EC.presenceOf(orderQuality.textMessLocator), 5000, 'Сообщение об успешном выполенеие не вывелось.');

        }catch (err) {
            fail(err)
        }
    });
});