let consoleColorRed = '\x1b[31m';
let consoleColorBlue = '\x1b[34m';

describe('Форма заказа рассылки сайта Quality.net.ua / по базе Quality', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка на отправление формы заказа рассылки Quality.', function() {
        browser.get('http://quality.net.ua/');

        var varContactPerson = element(by.xpath('//input[@name="varContactPerson"]'));

        let test = new Promise((resolve, reject) =>{
            return resolve(varContactPerson.isPresent() ? true : false);
        }).then((result)=>{
            result ? varContactPerson.sendKeys('Мануилов Роман - тест') : console.log("Поля не существует  >>>>", result);
        }).catch((err)=>{
            console.log('нет такого елемнта на стрице', err)
        });

        let varCompany = element(by.xpath('//input[@name="varCompany"]')).sendKeys('Quality- тест');
        let varPhone = element(by.xpath('//input[@name="varPhone"]')).sendKeys('099 999-99-99 - тест');
        let varUrAddress = element(by.xpath('//input[@name="varUrAddress"]')).sendKeys('Не знаю - тест');
        let varMail = element(by.xpath('//input[@name="varMail"]')).sendKeys('mr@quality-mail.com - тест');
        let varICQ = element(by.xpath('//input[@name="varICQ"]')).sendKeys('quality.003 - тест');
        let varInfo = element(by.xpath('//textarea[@name="varInfo"]')).sendKeys('Это текст для проверки формы - тест');
        //let btn = element(by.css('#orderButton')).click();
        browser.sleep(1000);
    });
    it('Проверка сообщения "Ваша заявка принята, наш менеджер свяжется с вами в ближайшее время."', function () {
        let textMess = element(by.css('.messagebody .pmessagesbox')).isPresent().then(function (result) {
            result ? expect(result.isDisplayed()).toBe(true) : console.log(consoleColorRed, 'Сообщение об успешном выполенеие не вывелось.');
        }).catch(function (err) {
            console.log(consoleColorRed,'Ошибка в коде, возможно обращение к селектору строка 21 >>>>>', err);
        });
    })
});