describe('Проверка всех ссылок на главной сранице -->> ', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    let quality_main_page = 'http://quality.net.ua/'
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
    it('Туристические рассылки онлайн(<a href="/sent.php">)', function() {
        browser.get(quality_main_page);
        var elem = element(by.xpath('//a[text()="Туристические рассылки онлайн"]'))
        elem.click();
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/sent.php');
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        }).catch(function(err) { fail(err + " Ссылка не соответсвует переходу.") });
    });
    it('новостями(<a href="/whatsnew.php">)', function() {
        browser.get(quality_main_page);
        var elem = element(by.xpath('//a[text()="новостями"]'))
        elem.click();
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/whatsnew.php');
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        }).catch(function(err) { fail(err + " Ссылка не соответсвует переходу.") });
    });
    it('о нас думают(<a href="/testimonials.php">)', function() {
        browser.get(quality_main_page);
        var elem = element(by.xpath('//a[text()="о нас думают"]'));
        elem.click();
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/testimonials.php');
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        }).catch(function(err) { fail(err + " Ссылка не соответсвует переходу.") });
    });
	 it('инструкцию(<a href="/word.php">)', function() {
        browser.get(quality_main_page);
        var elem = element(by.xpath('//a[text()="инструкцию"]'));
        elem.click();
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
            expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/word.php');
            browser.driver.close();
            browser.driver.switchTo().window(handles[0]);
        }).catch(function(err) { fail(err + " Ссылка не соответсвует переходу.") });
    });
});
