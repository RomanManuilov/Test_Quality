let quality_main_page = 'http://quality.net.ua/';
describe('Форма отправки на главной странице "Задать вопрос"', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Проверка отправки заявки "Задать вопрос" id="facebox"', function() {
        browser.get(quality_main_page);
        let btnAskQuestion = element(by.xpath('//a[text()="Задать вопрос"]'));
        let formName = element(by.xpath('//div[@id="facebox"]//input[@name="varName"]'));
        let formEmail = element(by.xpath('//div[@id="facebox"]//input[@name="varEmail"]'));
        let formAskQuastion = element(by.xpath('//div[@id="facebox"]//textarea[@name="varText"]'));
        let btnSend = element(by.xpath('//div[@id="facebox"]//table[@class="sendQuestionTable"]//a[@class="button"]'));
        btnAskQuestion.click();
        browser.sleep('3000');
        formName.sendKeys('Проверка формы тест Quality');
        formEmail.sendKeys('index@mail.ru');
        formAskQuastion.sendKeys('Hello world');
        btnSend.click();
    });
});