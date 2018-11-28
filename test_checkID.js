const ManagerPage = require('./PageObjects/managerPage.js');
const managerPage = new ManagerPage();
const EC = protractor.ExpectedConditions;

describe('Проверка ID в базе PhpMyAdmin', function () {
    beforeAll(function () {
        browser.waitForAngularEnabled(false)
    });
    it('Данные по компании получены: ID,Имя компании,Домен сайта,Контакты', async function () {
        try {
            await browser.get('https://manager.quality-mail.com/logon');
            managerPage.enterLogin("", "");
            browser.wait(EC.presenceOf(managerPage.picLogoLocator), 5000, 'Мы не попали на странцу - ошибка');
            expect(await managerPage.picLogoLocator.isPresent()).toBeTruthy('Лого не найдено');


            let arrID = ['14440', '14435', '6592'];
            let arrCustomers = [];

            for (let i = 0; i < arrID.length; i++) {

                await browser.get(`https://manager.quality-mail.com/clientsedit/?intClientID=${arrID[i]}#about`);

                const customer = {
                    id: arrID[i],
                    companyName: await managerPage.getCompanyName(),
                    webDomain: await managerPage.getWebDomain(),
                    contactsCompany: await managerPage.getContactsCompany()
                };
                arrCustomers.push(customer);
            }
            const arrCustomersJson = JSON.stringify(arrCustomers);
            console.log(arrCustomersJson)
        } catch (err) {
            fail(">>>>>>>>>>>>>" + err)
        }

        /*browser.get('http://maria.quality.net.ua/pma/');
        managerPage.enterPhpMyAdminLogin("", "");*/
    });
});

/*
managerPage.getCompanyName()/!*.then((result)=>{
                console.log("\x1b[32m", 'Имя компании: ', result);
            });*!/
managerPage.getWebDomen()/!*.then((result)=>{
                console.log("\x1b[34m", 'Сайт/домен: ' + result);
            });*!/
managerPage.getContactsCompany()/!*.then((arr)=>{
                for (let i = 1; i < arr.length; i++){
                    console.log("\x1b[37m", "Контакты: "  + arr[i]);
                }
            });*!/*/
