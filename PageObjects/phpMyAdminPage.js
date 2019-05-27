module.exports = class PhpMyAdminPage {
    constructor(){
        this.phpUsermameLocator = element(by.css('#input_username'));
        this.phpPasswordLocator = element(by.css('#input_password'));
        this.phpButtonLocator = element(by.css('#input_go'));
        this.phpUserLocator = element(by.css('#li_user_info'));
        this.phpVarNameLocator = element(by.css('#fieldID_1'));
        this.phpVarTagBodyLocator = element(by.css('#fieldID_3'));
        this.phpSearchButtonLocator = element(by.xpath('//input[@value="OK"]'));
        this.phpMessageSuccessLocator = element(by.xpath('//*[@class="success"]'));
    };
    async setPhpMyAdminUserName(userName){
        return await this.phpUsermameLocator.sendKeys(userName);
    }
    async setPhpMyAdminUserPassword(userPassword){
        return await this.phpPasswordLocator.sendKeys(userPassword);
    }
    async enterPhpMyAdminLogin(login, pass){
        await this.setPhpMyAdminUserName(login);
        await this.setPhpMyAdminUserPassword(pass);
        await this.phpButtonLocator.click();
    }
    async setSearchVarName(varName){
        await this.phpVarNameLocator.sendKeys(varName);
        await this.phpSearchButtonLocator.click();
        return this.searchSuccessMessage()
    }
    async setSearchTagBody(tagBody){
        await this.phpVarTagBodyLocator.sendKeys(tagBody);
        await this.phpSearchButtonLocator.click();
        return this.searchSuccessMessage()
    }
    async searchSuccessMessage(){
        await browser.sleep(2000);
        let successMessage = await this.phpMessageSuccessLocator.getText();
        await browser.get('http://maria.quality.net.ua/pma/index.php');
        return successMessage.includes('пустой результат') ? false : true;
    }
};
