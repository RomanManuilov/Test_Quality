let quality_main_page = 'http://quality.net.ua/'
describe('Проверка на главной страице Quality.net.ua кнопок', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Заказать Рассылку(button)', function() {
        browser.get(quality_main_page);
        var elem = element(by.css('.getEvent'))
        elem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order#orderForm');
    });
    it('Подписаться на Рассылку(button)', function() {
        browser.get(quality_main_page);
        var elem = element(by.css('.getSubscribe'))
        elem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#subscribe');
    });
});
