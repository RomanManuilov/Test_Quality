const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Рассылка QUALITY"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage);
    });
    const menu = {
        digest: {
            text: 'Дайджест',
            link: 'http://quality.net.ua/digest/daily/subscribe'
        },
        subscribeDigest: {
            text: 'Подписаться на дайджест',
            link: 'http://quality.net.ua/digest/daily/subscribe'
        },
        unsubscribeDigest: {
            text: 'Отписаться от дайджеста',
            link: 'http://quality.net.ua/digest/daily/unsubscribe'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.digest.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

