module.exports = class CallMeBack {
    constructor() {
        this.linkCallMeBackLocator = element(by.xpath('//a[text()="Перезвоните мне"]'));
        this.nameCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varNameCallMe"]'));
        this.phoneCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//input[@name="varPhoneCallMe"]'));
        this.buttonCallMeBackLocator = element(by.xpath('//div[@id="facebox"]//a[@class="button"]'));
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

    async sendCallMeBack(name,phone) {
        try {
            await this.setNameCallMeBack(name);
            await this.setPhoneCallMeBack(phone)
            await this.buttonCallMeBackLocator.click()
        } catch (err) {
            fail(err)
        }
    }
}