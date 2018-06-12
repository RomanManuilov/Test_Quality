describe('Проверка страницы на ошибку "414 Request-URL Too Large"', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
    });

    it('Ошибка "414 Request-URL Too Large"', function () {
        browser.get('http://quality.net.ua/');
        let inputName = element(by.xpath('//input[@name="varLogin"]'));
        let inputPass = element(by.xpath('//input[@name="varPassword"]'));
        let btn = element(by.css('.loginForm .button'));
        let formStartDate = element(by.xpath('//input[@id="shed_start_date"]'));
        let clickDate = element(by.xpath('//table[@class="ui-datepicker-calendar"]/tbody/tr[2]/td[2]'));
        let clickImgGrafik = element(by.xpath('//input[@title="Показать график"]'));
        inputName.sendKeys('Quality');
        inputPass.sendKeys('quality@user');
        btn.click();
        formStartDate.click();
        browser.sleep('6000');
        clickDate.click();
        clickImgGrafik.click().then(function () {
            DateUpdataTab();
        });
        expect(updatePage()).toBe('http://quality.net.ua/start?activeTab=schedule&varSubject=&startsched=04.06.2018&endsched=19.06.2018&intSubserviceID=1&isStar=');
    }, 13 * 60 * 60000);
});

let currentNumber = 0;
function updatePage() {
    if(currentNumber === 39){
        return 'Попытки закончились ошибка не найдена.'
    }
    return browser.getCurrentUrl().then(function (result) {
        if(result === 'http://quality.net.ua/start?activeTab=schedule&varSubject=&startsched=04.06.2018&endsched=19.06.2018&intSubserviceID=1&isStar=' || result === 'http://quality.net.ua/start?activeTab=schedule&varSubject=&startsched=04.06.2018&endsched=20.06.2018&intSubserviceID=1&isStar='){
            browser.sleep(20 * 60000);
            browser.refresh().then(function () {
                DateUpdataTab();
            });
            currentNumber++;
            return updatePage();
        } else {
            return result
        }
    })
}
function DateUpdataTab() {
    let timeNow = new Date();
    let timeHours = timeNow.getHours();
    let timeMinutes = timeNow.getMinutes();
    return console.log("Время обновления страницы: " + timeHours + ':' + timeMinutes);
}