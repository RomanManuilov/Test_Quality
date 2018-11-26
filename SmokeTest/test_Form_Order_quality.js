describe('Форма заказа рассылки сайта Quality.net.ua / по базе Quality', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка полей формы, кнопка отправки.', function() {
        browser.get('http://quality.net.ua/order');
        var varContactPerson = element(by.xpath('//input[@name="varContactPerson"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varContactPerson"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varCompany = element(by.xpath('//input[@name="varCompany"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varCompany"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varPhone = element(by.xpath('//input[@name="varPhone"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varPhone"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varUrAddress = element(by.xpath('//input[@name="varUrAddress"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varUrAddress"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varMail = element(by.xpath('//input[@name="varMail"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varMail"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varICQ = element(by.xpath('//input[@name="varICQ"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//input[@name="varICQ"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        var varInfo = element(by.xpath('//textarea[@name="varInfo"]')).isPresent().then((result)=>{
            expect(result).toBe(true);
            element(by.xpath('//textarea[@name="varInfo"]')).sendKeys('Quality - тест');
        }).catch((err)=> {
            fail(err);
        });
        let btn = element(by.css('#orderButton')).isPresent().then((result)=>{
            expect(result).toBe(true);
                /*element(by.css('#orderButton')).click();*/
        }).catch((err)=> {
            fail(err);
        });
        browser.sleep(1000);
        let textMess = element(by.css('.messagebody .pmessagesbox')).isPresent().then(function (result) {
            if (result) {
                expect(result.isDisplayed()).toBe(true)
            } else{
                fail("Сообщение об успешном выполенеие не вывелось.");
            }
        }).catch(function (err) {
            fail(err);
        });
    });
});