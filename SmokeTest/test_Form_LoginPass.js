let quality_main_page = 'http://quality.net.ua/';
describe('Форма личного кабинета сайта Quality.net.ua', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка логирования и входа в личный кабинет Quality.', function() {
        browser.get(quality_main_page);
        let inputName = element(by.xpath('//input[@name="varLogin"]'));
        let inputPass = element(by.xpath('//input[@name="varPassword"]'));
        let btn = element(by.css('.loginForm .button'));
        inputName.sendKeys('');
        inputPass.sendKeys('');
        btn.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
    });
});