module.exports = class ManagerPage {
    constructor() {
        this.usernameLocator = element(by.css('#varLogin'));
        this.passwordLocator = element(by.css('#varPassword'));
        this.loginButtonLocator = element(by.css('.uibutton'));
        this.picLogoLocator = element(by.css('#logoBar'));
        this.inputCompanyName = element(by.css('#varCompanyName'));
        this.inputWebAdress = element(by.css('#varWWW'));
        this.contactLocator = element.all(by.xpath('//div[@id="contacts_table"]//tr//td[4]'));
    }

    async setUserName(userName) {
        try {
            return await this.usernameLocator.sendKeys(userName);
        } catch (err) {
            fail(err)
        }
    }

    async setUserPassword(userPassword) {
        try {
            return await this.passwordLocator.sendKeys(userPassword);
        } catch (err) {
            fail(err)
        }

    }

    async enterLogin(login, pass) {
        await this.setUserName(login);
        await this.setUserPassword(pass);
        await this.loginButtonLocator.click();
    }

    async getCompanyName() {
        try {
            return await this.inputCompanyName.getAttribute('value');
        } catch (err) {
            fail(err)
        }
    }

    async getWebDomain() {
        try {
            let str = await this.inputWebAdress.getAttribute('value');
            str = str.replace(/.com[\S]*/g, '');
            str = str.replace(/http:\/\//g, '');
            str = str.replace(/https:\/\//g, '');
            str = str.replace(/www./g, '');
            return str
        } catch (err) {
            fail(err)
        }
    }

    async getContactsCompany() {
        try {
            let str = await this.contactLocator.getText()
            return str
        } catch (err) {
            fail(err)
        }

    }
};
