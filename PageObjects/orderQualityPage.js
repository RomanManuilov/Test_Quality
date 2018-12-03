module.exports = class OrderQuality {
    constructor() {
        this.contactPersonLocator = element(by.xpath('//input[@name="varContactPerson"]'));
        this.companyNameLocator = element(by.xpath('//input[@name="varCompany"]'));
        this.phoneLocator = element(by.xpath('//input[@name="varPhone"]'));
        this.urAddressLocator = element(by.xpath('//input[@name="varUrAddress"]'));
        this.mailLocator = element(by.xpath('//input[@name="varMail"]'));
        this.icqLocator = element(by.xpath('//input[@name="varICQ"]'));
        this.infoLocator = element(by.xpath('//textarea[@name="varInfo"]'));
        this.buttonLocator = element(by.css('#orderButton'));
        this.textMessLocator = element(by.css('.messagebody .pmessagesbox'));
    }

    async setContactPerson(str) {
        try {
            return await this.contactPersonLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setCompanyName(str) {
        try {
            return await this.companyNameLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setPhone(str) {
        try {
            return await this.phoneLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setUrAddress(str) {
        try {
            return await this.urAddressLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setMail(str) {
        try {
            return await this.mailLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setIcq(str) {
        try {
            return await this.icqLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async setInfo(str) {
        try {
            return await this.infoLocator.sendKeys(str)
        } catch (err) {
            fail(err)
        }
    }
    async sendOrder(name,company,phone,addres,mail,icq,info){
        try{
            await this.setContactPerson(name);
            await this.setCompanyName(company);
            await this.setPhone(phone);
            await this.setUrAddress(addres);
            await this.setMail(mail);
            await this.setIcq(icq);
            await this.setInfo(info);
            await this.buttonLocator.click();
        }catch (err) {
            fail(err)
        }
    }
};