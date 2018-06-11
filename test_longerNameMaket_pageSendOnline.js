//В рассылке онлайн проверка количества символов(длины строки) в колонке "рассылка". Это проверка на написание больших тем макетов свыше 128 символов.  
xdescribe('Стринца рассылка онлайн.', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    for (let itemArr = 1; itemArr <= 50; itemArr++) {
        it('Кол-во сиволов в теме макетов. Старница ' + itemArr, function() {
            browser.get('http://quality.net.ua/sent?varCompanyName=&q=&intClientID=&startfrom=&page=' + itemArr);
            let elementsText = element.all(by.css('.sentmessage'));
            elementsText.map(function(elm) {
                return elm.getText().then(function(result) {
                    expect(result.length).toBeLessThan(128, result);
                });
            })
        });
    }
});
//После устранения проблемы верхнего теста делал проверку на ширину контейнера куда вложена эта таблица, по предположительному варианту если табице в какой-то из колонок 
//будет больше символов она потянет весь контейнер и его ширина станет больше чем 940. 
describe('Стринца рассылка онлайн: ', function() {
    beforeAll(function() {
        browser.ignoreSynchronization = true;
    });
    for (let itemArr = 1; itemArr <= 80; itemArr++) {
        it('Ширина блока контента страница: ' + itemArr, function() {
            browser.get('http://quality.net.ua/sent?varCompanyName=&q=&intClientID=&startfrom=&page=' + itemArr);
            element(by.css('.centerContent_here ')).getSize().then(function(size) {
				var width = size.width;
				expect(width).toBe(940);
			});
        });
    }
});