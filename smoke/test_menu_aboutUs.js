const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();

describe('Меню главной страницы, раздел "О нас"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        browser.get(global.qualityMainPage)
    });
    const menu = {
        aboutUs: {
            text: 'О нас',
            link: 'http://quality.net.ua/'
        },
        partners: {
            text: 'Партнеры',
            link: 'http://quality.net.ua/partners'
        },
        contacts: {
            text: 'Контакты',
            link: 'http://quality.net.ua/contacts'
        },
        whyWe: {
            text: 'Почему мы',
            link: 'http://quality.net.ua/whyus'
        },
        whatIsNew: {
            text: 'Что нового',
            link: 'http://quality.net.ua/whatsnew'
        },
        videoLessons: {
            text: 'Видео-уроки',
            link: 'http://quality.net.ua/lessons'
        },
        weAreInMedia: {
            text: 'Мы в медиа',
            link: 'http://quality.net.ua/media'
        },
        travelAgentsAboutQuality: {
            text: 'Турагенты о Quality',
            link: 'http://quality.net.ua/travel_agents'
        }
    };
    for (let key in menu) {
        it('Название меню '  + menu[key].text, async function () {
            await mainPage.checkAllItemMenu(menu.aboutUs.text, menu[key].text);
            expect(await browser.getCurrentUrl()).toBe(menu[key].link, "Ccылка: " + menu[key].link + " не соответвет имени " + menu[key].text);

        });
    }
});

