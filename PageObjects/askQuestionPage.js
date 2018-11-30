module.exports = class AskQuestionPage {
    constructor() {
        this.linkAskQuestionLocator = element(by.xpath('//a[text()="Задать вопрос"]'));
        this.windowAskQuestionLocator = element(by.css('#sendQuestion'));
        this.nameOrCompanyLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varName"]'));
        this.emailOrphoneLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varEmail"]'));
        this.textQuestionLocator = element(by.xpath('//div[@id="facebox"]//textarea[@name="varText"]'));
        this.buttonSendLocator = element(by.xpath('//div[@id="facebox"]//a[@class="button"]'));
    }

    async setNameOrCompany(str) {
        try {
            return await this.nameOrCompanyLocator.sendKeys(str)
        }catch (err) {
            fail(err)
        }
    }

    async setEmailOrPhone(str) {
        try {
            return await this.emailOrphoneLocator.sendKeys(str)
        }catch (err) {
            fail(err)
        }
    }

    async setTextQuestion(str) {
        try {
            return await this.textQuestionLocator.sendKeys(str)
        }catch (err) {
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
};