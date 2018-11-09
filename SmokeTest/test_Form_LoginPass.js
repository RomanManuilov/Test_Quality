let quality_main_page = 'http://quality.net.ua/';
describe('Форма личного кабинета сайта Quality.net.ua', function() {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Проверка поля input Логин', function() {
        browser.get(quality_main_page);
        var inputName = element(by.xpath('//input[@name="varLogin"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varLogin"]')).sendKeys('');//Введите существующил логин акк
            } else {
                fail("Такого поля для ввода Логин не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка поля input Пароль', function() {
        var inputPass = element(by.xpath('//input[@name="varPassword"]')).isPresent().then((result)=>{
            if(result){
                element(by.xpath('//input[@name="varPassword"]')).sendKeys('');//Введите существующил пароль акк
            } else {
                fail("Такого поля для ввода Пароль не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Проверка кнопки button', function() {
        var btn = element(by.css('.loginForm .button')).isPresent().then((result)=>{
            if(result){
                element(by.css('.loginForm .button')).click();
            } else {
                fail("Такой кнопки не существуе.");
            }
        }).catch((err)=> {
            console.log(err);
        });
    });
    it('Вход в линый кабинет успешен.', function() {
        browser.getCurrentUrl().then((result)=>{
            expect(result).toBe('http://quality.net.ua/start?activeTab=schedule&intSubserviceID=1');
        }).catch((err)=>{
            console.log(err)
        })
    });
});