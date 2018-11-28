module.exports = class PhpMyAdminPage {
    constructor(){
        this.phpUsermameLocator = element(by.css('#input_username'));
        this.phpPasswordLocator = element(by.css('#input_password'));
        this.phpButtonLocator = element(by.css('#input_go'));
    };
    setPhpMyAdminUserName(userName){
        return this.phpUsermameLocator.sendKeys(userName);
    }
    setPhpMyAdminUserPassword(userPassword){
        return this.phpPasswordLocator.sendKeys(userPassword);
    }
    enterPhpMyAdminLogin(login, pass){
        this.setPhpMyAdminUserName(login);
        this.setPhpMyAdminUserPassword(pass);
        this.phpButtonLocator.click();
    }
};