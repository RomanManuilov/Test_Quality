describe('Форма отправки на главной странице "Перезвони мне"', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Проверка отправки заявки "Перезвони мне" id="facebox"', async function() {
        await browser.get(global.qualityMainPage);

        btnCallMeBack.click();
        browser.sleep('3000');
        formName.sendKeys('Проверка формы тест Quality');
        formPhone.sendKeys('099-999-99-99');
        btnSend.click();
    });
});