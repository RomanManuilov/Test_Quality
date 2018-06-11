describe('Проверка страницы на ошибку по клиенту Орбита "414 Request-URL Too Large"', function() {
		beforeAll(function() {
			browser.ignoreSynchronization = true;
		});
			it('Ошибка "414 Request-URL Too Large"', function() {
				browser.get('http://quality.net.ua/');
				let inputName = element(by.xpath('//input[@name="varLogin"]'));
				let inputPass = element(by.xpath('//input[@name="varPassword"]'));
				let btn = element(by.css('.loginForm .button'));
				let formStartDate = element(by.xpath('//input[@id="shed_start_date"]'));
				let clickDate = element(by.xpath('//table[@class="ui-datepicker-calendar"]/tbody/tr[2]/td[2]'));
				let clickImgGrafik = element(by.xpath('//input[@title="Показать график"]'));
				inputName.sendKeys('Quality')
				inputPass.sendKeys('quality@user');
				btn.click();
				formStartDate.click();
				browser.sleep('9000');
				clickDate.click();
				clickImgGrafik.click();
		}, 60000);
});