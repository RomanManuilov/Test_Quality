let quality_main_page = 'http://quality.net.ua/';
describe('Проверка меню в Footer раздела "О нас". Под меню:', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('О нас <a href="/">', function() {
        browser.get(quality_main_page);
        let subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="О нас"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/');
    });
    it('Портнеры <a href="/partners">', function() {
        browser.get(quality_main_page);
        let subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Партнеры"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/partners');
    });
    it('Контакты <a href="/contacts">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Контакты"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/contacts');
    });
    it('Почему мы <a href="/whyus">', function() {
        browser.get(quality_main_page);
         let menu = $('div.likList');
         let subMenuItem =  menu.element(by.xpath('.//a[text()="Почему мы"]'));
        var subMenuItem = element(by.xpath('//div[@class="likList"]//a[text()="Почему мы"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/whyus');
    });
    it('Что нового <a href="/whatsnew">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Что нового"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/whatsnew');
    });
    it('Видео-уроки <a href="/lessons">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Видео-уроки"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/lessons');
    });
    it('Мы в медиа <a href="/media">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Мы в медиа"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/media');
    });
});
describe('Проверка меню в footer раздела "Заказать". Под меню:', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Заказать <a href="/order">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Заказать"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order');
    });
    it('Тарифы на рассылку QUALITY <a href="/order">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Тарифы на рассылку QUALITY"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order');
    });
    it('Тарифы на рассылку по своей базе <a href="/its-base-order">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Тарифы на рассылку по своей базе"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
    });
    it('Правила рассылки QUALITY <a href="/agreement">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Правила рассылки QUALITY"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/agreement');
    });
    it('Правила рассылки по своей базе <a href="/its-base-agreement">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Правила рассылки по своей базе"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-agreement');
    });
});
describe('Проверка меню в footer раздела "Рассылка QUALITY". Под меню:', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Рассылка QUALITY <a href="/sent">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Рассылка QUALITY"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/sent');
    });
    it('Рассылка on-line <a href="/sent">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Рассылка on-line"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/sent');
    });
    it('Подписаться на рассылку <a href="/subscribe#subscribe">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Подписаться на рассылку"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#subscribe');
    });
    it('Отписаться от рассылки <a href="/subscribe#unsubscribe">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Отписаться от рассылки"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#unsubscribe');
    });
    it('Дайджест <a href="/digest/daily/subscribe">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Дайджест"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/subscribe');
    });
    it('Подписаться на дайджест <a href="/digest/daily/subscribe">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Подписаться на дайджест"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/subscribe');
    });
    it('Отписаться от дайджеста <a href="/digest/daily/unsubscribe">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Отписаться от дайджеста"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/unsubscribe');
    });
});
describe('Проверка меню в footer раздела "Рассылка по своей базе". Под меню:', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Рассылка по своей базе <a href="/its-base-order">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Рассылка по своей базе"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
    });
    it('Заказать рассылку <a href="/its-base-order">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Заказать рассылку"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
    });
    it('Правила рассылки <a href="/its-base-agreement">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Правила рассылки"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-agreement');
    });
    it('Анти-СПАМ политика <a href="/antispam_policy_quality">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Анти-СПАМ политика"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/antispam_policy_quality');
    });
});
describe('Проверка меню раздела "Клиенты". Под меню:', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    it('Клиенты <a href="/clients">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Клиенты"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/clients');
    });
    it('Наши клиенты <a href="/clients">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Наши клиенты"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/clients');
    });
    it('Отзывы <a href="/testimonials">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Отзывы"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/testimonials');
    });
    it('Рекомендации <a href="/recommendation">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Рекомендации"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/recommendation');
    });
    it('Quality клуб <a href="/club">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Quality клуб"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/club');
    });
    it('Бонусы <a href="/discounts">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/h3/a[text()="Бонусы"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/discounts');
    });
    it('Безлимитная лояльность <a href="/unlimitedloyalty">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Безлимитная лояльность"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/unlimitedloyalty');
    });
    it('Акции <a href="/discounts">', function() {
        browser.get(quality_main_page);
        var subMenuItem = element(by.xpath('//div[@class="likList"]/p/a[text()="Акции"]'));
        subMenuItem.click();
        expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/discounts');
    });
});
