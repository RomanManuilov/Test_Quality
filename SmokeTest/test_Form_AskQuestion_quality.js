const AskQuestionPage = require("../PageObjects/askQuestionPage.js");
const askQuestionPage = new AskQuestionPage();
const EC = protractor.ExpectedConditions;

describe('Форма отправки на главной странице "Задать вопрос"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Отправка заявки "Задать вопрос" успешно, проверьте email', async function () {
        try {
            await browser.get(global.qualityMainPage);
            expect(await askQuestionPage.linkAskQuestionLocator.isPresent()).toBeTruthy('Ссылки "Задать вопрос" нет на этой странице' + global.qualityMainPage);
            await askQuestionPage.linkAskQuestionLocator.click();
            await browser.wait(EC.presenceOf(askQuestionPage.windowAskQuestionLocator), 5000, 'Окно "Задать нам вопрос" не появилось.');

            expect(await askQuestionPage.nameOrCompanyLocator.isPresent()).toBeTruthy('Нет поля "Ваше имя и/или компания"');
            expect(await askQuestionPage.emailOrphoneLocator.isPresent()).toBeTruthy('Нет поля "Электронная почта и/или телефон"');
            expect(await askQuestionPage.textQuestionLocator.isPresent()).toBeTruthy('Нет поля "Текст Вашего вопроса"');
            expect(await askQuestionPage.buttonSendLocator.isPresent()).toBeTruthy('Нет кнопки "Отправить"');

            await askQuestionPage.sendOuestionOnEmail('Quality - test', 'quality@gmail.com', 'Если вы получили это письмо на него не нужно реагировать, спокойно работайте дальше.')
        } catch (err) {
            fail(err)
        }
    });
});