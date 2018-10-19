let qualityNetUa = 'http://quality.net.ua/';
let qualutyMailRU = 'http://qualitymail.ru/'
describe('Форма отправки на главной странице "Перезвони мне"', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Проверка отправки заявки "Перезвони мне" id="facebox"', function() {
        browser.get(qualityNetUa);
        let btnCallMeBack = element(by.xpath('//a[text()="Перезвоните мне"]'));
        let formName = element(by.xpath('//div[@id="facebox"]//input[@name="varNameCallMe"]'));
        let formPhone = element(by.xpath('//div[@id="facebox"]//input[@name="varPhoneCallMe"]'));
        let btnSend = element(by.xpath('//div[@id="facebox"]//table[@class="sendCallmeTable"]//a[@class="button"]'));
        btnCallMeBack.click();
        browser.sleep('3000');
        formName.sendKeys('Проверка формы тест Quality');
        formPhone.sendKeys('099-999-99-99');
        btnSend.click();
    });
});