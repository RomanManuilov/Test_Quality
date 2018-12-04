const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Заказать"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage)
    });
    const menu = {
        order: {
            text: 'Заказать',
            link: 'http://quality.net.ua/order'
        },
        priceForQuality: {
            text: 'Тарифы на рассылку QUALITY',
            link: 'http://quality.net.ua/order'
        },
        priceForQualityOwnDatabase: {
            text: 'Тарифы на рассылку по своей базе',
            link: 'http://quality.net.ua/its-base-order'
        },
        rules: {
            text: 'Правила рассылки QUALITY',
            link: 'http://quality.net.ua/agreement'
        },
        rulesOwnDatabase: {
            text: 'Правила рассылки по своей базе',
            link: 'http://quality.net.ua/its-base-agreement'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.order.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

