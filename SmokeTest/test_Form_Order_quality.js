describe('Форма заказа рассылки сайта Quality.net.ua / по базе Quality', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка на отправление формы заказа рассылки Quality.', function() {
        browser.get('http://quality.net.ua/order#orderForm');
        let varContactPerson = element(by.xpath('//input[@name="varContactPerson"]')).sendKeys('Мануилов Роман - тест');
        let varCompany = element(by.xpath('//input[@name="varCompany"]')).sendKeys('Quality- тест');
        let varPhone = element(by.xpath('//input[@name="varPhone"]')).sendKeys('099 999-99-99 - тест');
        let varUrAddress = element(by.xpath('//input[@name="varUrAddress"]')).sendKeys('Не знаю - тест');
        let varMail = element(by.xpath('//input[@name="varMail"]')).sendKeys('mr@quality-mail.com - тест');
        let varICQ = element(by.xpath('//input[@name="varICQ"]')).sendKeys('quality.003 - тест');
        let varInfo = element(by.xpath('//textarea[@name="varInfo"]')).sendKeys('Это текст для проверки формы - тест')
        expect(element(by.xpath('//*[contains(text(),"Ваша заявка принята, наш менеджер свяжется с вами в ближайшее время")]')).getText()).toBe('Ваша заявка принята, наш менеджер свяжется с вами в ближайшее время');
        //let btn = element(by.css('#orderButton')).click();
    });
});