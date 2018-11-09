let consoleColorRed = '\x1b[31m';
let consoleColorBlue = '\x1b[34m';

describe('Форма заказа рассылки сайта Quality.net.ua / по базе Quality', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка поля input Контактное лицо', function() {
        browser.get('http://quality.net.ua/order');
        var varContactPerson = element(by.xpath('//input[@name="varContactPerson"]')).isPresent().then((result)=>{
            if(result){
              element(by.xpath('//input[@name="varContactPerson"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Контактное лицо не существуе.");

            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Название компании', function() {
        var varCompany = element(by.xpath('//input[@name="varCompany"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varCompany"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Название компании не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Контактный телефон', function() {
        var varPhone = element(by.xpath('//input[@name="varPhone"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varPhone"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Контактный телефон не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Юридический почтовый адрес', function() {
        var varUrAddress = element(by.xpath('//input[@name="varUrAddress"]')).isPresent().then((result)=>{
            if(result) {
                element(by.xpath('//input[@name="varUrAddress"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Юридический почтовый адрес не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Адрес электронной почты', function() {
        var varMail = element(by.xpath('//input[@name="varMail"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varMail"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Адрес электронной почты не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Skype', function() {
        var varICQ = element(by.xpath('//input[@name="varICQ"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varICQ"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Skype не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Дополнительная информация компании', function() {
        var varInfo = element(by.xpath('//textarea[@name="varInfo"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//textarea[@name="varInfo"]')).sendKeys('Quality - тест');
            } else {
                fail("Такого поля для ввода Дополнительная информация не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Кнопка', function() {
        let btn = element(by.css('#orderButton')).isPresent().then((result)=>{
            if(result){
                /*element(by.css('#orderButton')).click();*/
            } else{
                fail("Кнопка Отправить заявку не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
        browser.sleep(1000);
    });
    it('Проверка сообщения "Ваша заявка принята, наш менеджер свяжется с вами в ближайшее время."', function () {
        let textMess = element(by.css('.messagebody .pmessagesbox')).isPresent().then(function (result) {
            if (result) {
                expect(result.isDisplayed()).toBe(true)
            } else{
                fail("Сообщение об успешном выполенеие не вывелось.");
            }
        }).catch(function (err) {
            console.log(err);
        });
    })
});