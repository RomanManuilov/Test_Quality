module.exports = class LoginPage {
    constructor(){
        this.usernameLocator =element(by.css('#varLogin'));
        this.passwordLocator = element(by.css('#varPassword'));
        this.loginButtonLocator = element(by.css('.uibutton'));
    }
    setUserName(userName){
       return this.usernameLocator.sendKeys(userName);
    }
    setUserPassword(userPassword){
        return this.passwordLocator.sendKeys(userPassword);
    }
    enterLogin(login, pass){
        this.setUserName(login);
        this.setUserPassword(pass);
        this.loginButtonLocator.click();
    }
}
