const fs = require('fs');
const ManagerPage = require('./PageObjects/managerPage.js');
const PhpMyAdmin = require('./PageObjects/phpMyAdminPage.js');
const managerPage = new ManagerPage();
const phpMyAdmin = new PhpMyAdmin();
const EC = protractor.ExpectedConditions;

let arrID = ['14337','14504','14506','14507'];
let arrCustomers = [];
let arrCustomersJson;

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
            /*fs.writeFileSync('client.json', JSON.stringify(arrCustomers));*/
            console.log(JSON.stringify(arrCustomers));
        } catch (err) {
            fail(err)
        }
    });
    it('Проверка на существующие данные в базе phpMyAdmin', async function () {
        try {
            await browser.get('http://maria.quality.net.ua/pma/');
            phpMyAdmin.enterPhpMyAdminLogin("", "");
            browser.wait(EC.presenceOf(phpMyAdmin.phpUserLocator), 5000, 'Мы не попали на странцу - ошибка');
            expect(await phpMyAdmin.phpUserLocator.getText()).toBe('Пользователь: analytics@localhost', 'Имя пользователя не обнаруженно на странице')
            await browser.get('http://maria.quality.net.ua/pma/index.php?token=623e293a84244ca702828e77854fb2b9#PMAURL-10:tbl_select.php?db=analytics&table=clients&server=1&target=&token=623e293a84244ca702828e77854fb2b9');

            for (let key of arrCustomers) {
                expect(await phpMyAdmin.setSearchVarName('%' + key.companyName + '%')).toBeFalsy(key.companyName + " Такое имя есть в базе");
                expect(await phpMyAdmin.setSearchTagBody('%' + key.webDomain + '%')).toBeFalsy(key.webDomain + " Такое домен сайта есть в базе");
                for (let i = 1; i < key.contactsCompany.length; i++) {
                    expect(await phpMyAdmin.setSearchTagBody('%' + key.contactsCompany[i] + '%')).toBeFalsy(key.contactsCompany[i] + " Такое контакт есть в базе");
                }
            }

        } catch (err) {
            fail(err)
        }
    });
});
