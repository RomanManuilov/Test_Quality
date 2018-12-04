const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "Клиенты"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage)
    });
    const menu = {
        customers: {
            text: 'Клиенты',
            link: 'http://quality.net.ua/clients'
        },
        ourCustomers: {
            text: 'Наши клиенты',
            link: 'http://quality.net.ua/clients'
        },
        reviewsTourOperators: {
            text: 'Отзывы туроператоров',
            link: 'http://quality.net.ua/testimonials'
        },
        reviewsTravelAgent : {
            text: 'Отзывы турагентов',
            link: 'http://quality.net.ua/travel_agents'
        },
        recommendation : {
            text: 'Рекомендации',
            link: 'http://quality.net.ua/recommendation'
        },
        club : {
            text: 'Quality клуб',
            link: 'http://quality.net.ua/club'
        },
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.customers.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

