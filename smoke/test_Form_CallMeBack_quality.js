const MainPage = require("../PageObjects/mainPage.js");
const mainPage = new MainPage();
const EC = protractor.ExpectedConditions;

describe('Форма отправки на главной странице "Перезвони мне"', function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
    });
    it('Отправки заявки "Перезвони мне" успешно проверьте email', async function() {
        try{
            await browser.get(global.qualityMainPage);
            expect(await mainPage.linkCallMeBackLocator.isPresent()).toBeTruthy('Ссылки "Перезвоните мне" нет на этой странице' + global.qualityMainPage);
            await mainPage.linkCallMeBackLocator.click();
            await browser.wait(EC.presenceOf(mainPage.windowCallMeBackLocator), 5000, 'Окно "Перезвонить мне" не появилось.');

            expect(await mainPage.nameCallMeBackLocator.isPresent()).toBeTruthy('Нет поля "Имя"');
            expect(await mainPage.phoneCallMeBackLocator.isPresent()).toBeTruthy('Нет поля "Поле"');
            expect(await mainPage.buttonCallMeBackLocator.isPresent()).toBeTruthy('Нет кнопки "Отправить"');
            await mainPage.sendCallMeBack('Quality - test', '099 999-99-99')
        }catch (err) {
            fail(err)
        }
    });
});