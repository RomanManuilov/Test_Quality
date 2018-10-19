let data = require('fs');
describe('Проверка страницы "документов", проверка сумм разделов "Олата картой visa/mastercard" и "Получить счет на оплату"', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Провека акции и суммы раздел "Олата картой visa/mastercard"', function () {
        browser.get('http://quality.net.ua/');
        let inputName = element(by.xpath('//input[@name="varLogin"]'));
        let inputPass = element(by.xpath('//input[@name="varPassword"]'));
        let btn = element(by.css('.loginForm .button'));
        inputName.sendKeys('');
        inputPass.sendKeys('');
        btn.click();
        let pageDocs = element(by.xpath('//a[@href="/docs"]'));
        pageDocs.click();
        let payVisa = element(by.xpath('//a[text()="Оплата картой Visa/Mastercard"]'));
        payVisa.click();
        let select = element(by.css('#bill-count'));
        select.click()
        browser.sleep(1000);
        for(let i = 1; i <= 30; i++){
            element(by.xpath('//select[@id="bill-count"]/option[' + i +']')).click();
            browser.sleep(300);
            element(by.css('#bill-price-text')).getText().then(function (price) {
                console.log(price);
            })
        }
    }, 8 * 60000);
});
