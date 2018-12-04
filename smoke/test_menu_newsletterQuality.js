const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Рассылка QUALITY"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage);
    });
    const menu = {
        newsletterQUALITY: {
            text: 'Рассылка QUALITY',
            link: 'http://quality.net.ua/sent'
        },
        newsletterOnLine: {
            text: 'Рассылка on-line',
            link: 'http://quality.net.ua/sent'
        },
        subscribe: {
            text: 'Подписаться на рассылку',
            link: 'http://quality.net.ua/subscribe#subscribe'
        },
        unsubscribe: {
            text: 'Отписаться от рассылки',
            link: 'http://quality.net.ua/subscribe#unsubscribe'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.newsletterQUALITY.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

