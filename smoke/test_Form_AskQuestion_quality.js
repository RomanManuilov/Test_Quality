const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();
const EC = protractor.ExpectedConditions;

describe('Форма отправки на главной странице "Задать вопрос"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Отправка заявки "Задать вопрос" успешно, проверьте email', async function () {
        try {
            await browser.get(global.qualityMainPage);
            expect(await mainPage.linkAskQuestionLocator.isPresent()).toBeTruthy('Ссылки "Задать вопрос" нет на этой странице' + global.qualityMainPage);
            await mainPage.linkAskQuestionLocator.click();
            await browser.wait(EC.presenceOf(mainPage.windowAskQuestionLocator), 5000, 'Окно "Задать нам вопрос" не появилось.');

            expect(await mainPage.nameOrCompanyLocator.isPresent()).toBeTruthy('Нет поля "Ваше имя и/или компания"');
            expect(await mainPage.emailOrphoneLocator.isPresent()).toBeTruthy('Нет поля "Электронная почта и/или телефон"');
            expect(await mainPage.textQuestionLocator.isPresent()).toBeTruthy('Нет поля "Текст Вашего вопроса"');
            expect(await mainPage.buttonSendLocator.isPresent()).toBeTruthy('Нет кнопки "Отправить"');

            await mainPage.sendOuestionOnEmail('Quality - test', 'quality@gmail.com', 'Если вы получили это письмо на него не нужно реагировать, спокойно работайте дальше.')
        } catch (err) {
            fail(err)
        }
    });
});