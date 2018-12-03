module.exports = class mainPage {
    constructor() {
        //Локаторы для входа в личный кабинете.
        this.loginCustomerLocator = element(by.xpath('//input[@name="varLogin"]'));
        this.passwordCustomerLocator = element(by.xpath('//input[@name="varPassword"]'));
        this.loginButtonLocator = element(by.css('.loginForm .button'));
        this.nameCustomerLocator = element(by.xpath('//div[@class="loggedInfo"]//strong[contains(text(),"QUALITY")]'));
        //Локаторы для "Задалть вопрос".
        this.linkAskQuestionLocator = element(by.xpath('//a[text()="Задать вопрос"]'));
        this.windowAskQuestionLocator = element(by.css('#sendQuestion'));
        this.nameOrCompanyLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varName"]'));
        this.emailOrphoneLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varEmail"]'));
        this.textQuestionLocator = element(by.xpath('//div[@id="facebox"]//textarea[@name="varText"]'));
        this.buttonSendLocator = element(by.xpath('//div[@id="facebox"]//a[@class="button"]'));
        //Локаторы для "Перезаноить мне."
        this.linkCallMeBackLocator = element(by.xpath('//a[text()="Перезвоните мне"]'));
        this.windowCallMeBackLocator = element(by.xpath('//div[@id="callme"]'));
        this.nameCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varNameCallMe"]'));
        this.phoneCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varPhoneCallMe"]'));
        this.buttonCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//a[@class="button"]'));
        //Локаторы кнопки "Заказать рассылку" и "Подписаться на рассылку"
        this.buttonOrderToSendLocator = element(by.css('.getEvent'));
        this.buttonSubscribeToSendLocator = element(by.css('.getSubscribe'));
        //Локаторы главного меню.
        this.allMenuLocator = element.all(by.xpath('//ul[@id="mainNavi"]//a'));
    }

    setLoginCustomer(userName) {
        return this.loginCustomerLocator.sendKeys(userName);
    }

    setPasswordCustomer(userPassword) {
        return this.passwordCustomerLocator.sendKeys(userPassword);
    }

    async enterAccountCustomer(login, pass) {
        try {
            await this.setLoginCustomer(login);
            await this.setPasswordCustomer(pass);
            await this.loginButtonLocator.click();
        } catch (err) {
            fail(err)
        }
    }

    async setNameOrCompany(str) {
        try {
            return await this.nameOrCompanyLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }

    async setEmailOrPhone(str) {
        try {
            return await this.emailOrphoneLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }

    async setTextQuestion(str) {
        try {
            return await this.textQuestionLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }

    async sendOuestionOnEmail(textName, textEmail, textQuestion) {
        try {
            await this.setNameOrCompany(textName);
            await this.setEmailOrPhone(textEmail);
            await this.setTextQuestion(textQuestion);
            await this.buttonSendLocator.click();
        } catch (err) {
            fail(err)
        }
    }

    async setNameCallMeBack(str) {
        try {
            return await this.nameCallMeBackLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }

    async setPhoneCallMeBack(str) {
        try {
            return await this.phoneCallMeBackLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }

    async sendCallMeBack(name, phone) {
        try {
            await this.setNameCallMeBack(name);
            await this.setPhoneCallMeBack(phone);
            await this.buttonCallMeBackLocator.click()
        } catch (err) {
            fail(err)
        }
    }

    async checkAllItemMenu(menu,subMenu) {
        try {
            await browser.actions().mouseMove(element(by.xpath(`//a[text()="${menu}"]`))).perform();
            await element(by.xpath(`//a[text()="${subMenu}"]`)).click();
        } catch (err) {
            fail(err)
        }
    }

};
