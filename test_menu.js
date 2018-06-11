let quality_main_page = 'http://quality.net.ua/'

describe('Проверка меню раздела "О нас". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('О нас <a href="/">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="О нас"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/');
		});
		it('Портнеры <a href="/partners">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Партнеры"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/partners');
		});
		it('Контакты <a href="/contacts">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Контакты"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/contacts');
		});
		it('Почему мы <a href="/whyus">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Почему мы"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/whyus');
		});
		it('Что нового <a href="/whatsnew">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Что нового"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/whatsnew');
		});
		it('Видео-уроки <a href="/lessons">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Видео-уроки"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/lessons');
		});
		it('Мы в медиа <a href="/media">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Мы в медиа"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="О нас"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/media');
		});
});
describe('Проверка меню раздела "Заказать". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Заказать <a href="/order">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Заказать"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order');
		});
		it('Тарифы на рассылку QUALITY <a href="/order">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Тарифы на рассылку QUALITY"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Заказать"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/order');
		});
		it('Тарифы на рассылку по своей базе <a href="/its-base-order">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Тарифы на рассылку по своей базе"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Заказать"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
		});
		it('Правила рассылки QUALITY <a href="/agreement">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Правила рассылки QUALITY"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Заказать"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/agreement');
		});
		it('Правила рассылки по своей базе <a href="/its-base-agreement">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Правила рассылки по своей базе"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Заказать"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-agreement');
		});
});
describe('Проверка меню раздела "Рассылка QUALITY". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Рассылка QUALITY <a href="/sent">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Рассылка QUALITY"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/sent');
		});
		it('Рассылка on-line <a href="/sent">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Рассылка on-line"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Рассылка QUALITY"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/sent');
		});
		it('Подписаться на рассылку <a href="/subscribe#subscribe">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Подписаться на рассылку"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Рассылка QUALITY"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#subscribe');
		});
		it('Отписаться от рассылки <a href="/subscribe#unsubscribe">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Отписаться от рассылки"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Рассылка QUALITY"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/subscribe#unsubscribe');
		});
});
describe('Проверка меню раздела "Рассылка по своей базе". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Рассылка по своей базе <a href="/its-base-order">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Рассылка по своей базе"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
		});
		it('Заказать рассылку <a href="/its-base-order">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Заказать рассылку"]'));
			browser.actions().mouseMove(element(by.xpath('//ul[@id="mainNavi"]/li[4]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-order');
		});
		it('Правила рассылки <a href="/its-base-agreement">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Правила рассылки"]'));
			browser.actions().mouseMove(element(by.xpath('//ul[@id="mainNavi"]/li[4]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/its-base-agreement');
		});
		it('Анти-СПАМ политика <a href="/antispam_policy_quality">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Анти-СПАМ политика"]'));
			browser.actions().mouseMove(element(by.xpath('//ul[@id="mainNavi"]/li[4]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/antispam_policy_quality');
		});
});
describe('Проверка меню раздела "Дайджест". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Дайджест <a href="/digest/daily/subscribe">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Дайджест"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/subscribe');
		});
		it('Подписаться на дайджест <a href="/digest/daily/subscribe">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Подписаться на дайджест"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Дайджест"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/subscribe');
		});
		it('Отписаться от дайджеста <a href="/digest/daily/unsubscribe">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Отписаться от дайджеста"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Дайджест"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/digest/daily/unsubscribe');
		});
});
describe('Проверка меню раздела "Клиенты". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Клиенты <a href="/clients">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Клиенты"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/clients');
		});
		it('Наши клиенты <a href="/clients">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Наши клиенты"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Клиенты"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/clients');
		});
		it('Отзывы туроператоров <a href="/testimonials">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Отзывы туроператоров"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Клиенты"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/testimonials');
		});
		it('Отзывы турагентов <a href="/travel_agents">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Отзывы турагентов"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Клиенты"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/travel_agents');
		});
		it('Рекомендации <a href="/recommendation">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Рекомендации"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Клиенты"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/recommendation');
		});
		it('Quality клуб <a href="/club">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Quality клуб"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Клиенты"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/club');
		});
});
//В этом разделе нет выхода с Бонуса в выподающем списке свосем не очеведно должно быть "Бонусы для клиентов" и ссылку http://quality.net.ua/discounts
describe('Проверка меню раздела "Бонусы". Под меню:', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
		it('Бонусы <a href="/discounts">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Бонусы"]'));
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/discounts');
		});
		it('Безлимитная лояльность <a href="/unlimitedloyalty">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Безлимитная лояльность"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Бонусы"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/unlimitedloyalty');
		});
		it('Акции <a href="/discounts">', function() {
			browser.get(quality_main_page);
			var subMenuItem = element(by.xpath('//a[text()="Акции"]'));
			browser.actions().mouseMove(element(by.xpath('//a[text()="Бонусы"]'))).perform();
			subMenuItem.click();
			expect(browser.getCurrentUrl()).toBe('http://quality.net.ua/discounts');
		});	
});