const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Бонусы"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
    });
    beforeEach(()=>{
        browser.get(global.qualityMainPage)
    });
    const menu = {
        bonus: {
            text: 'Бонусы',
            link: 'http://quality.net.ua/discounts'
        },
        unlimitedloyalty: {
            text: 'Безлимитная лояльность',
            link: 'http://quality.net.ua/unlimitedloyalty'
        },
        discounts: {
            text: 'Акции',
            link: 'http://quality.net.ua/discounts'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.bonus.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

