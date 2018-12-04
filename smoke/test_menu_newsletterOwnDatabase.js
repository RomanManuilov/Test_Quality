const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Рассылка по своей базе"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage);
    });
    const menu = {
        newsletterOwnDatabase: {
            text: 'Рассылка по своей базе ',
            link: 'http://quality.net.ua/its-base-order'
        },
        orderNewsletter: {
            text: 'Заказать рассылку',
            link: 'http://quality.net.ua/its-base-order'
        },
        rules : {
            text: 'Правила рассылки',
            link: 'http://quality.net.ua/its-base-agreement'
        },
        antiSpamPolicy: {
            text: 'Анти-СПАМ политика',
            link: 'http://quality.net.ua/antispam_policy_quality'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.newsletterOwnDatabase.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

