module.exports = class LoginPageManager {
    constructor(){
        this.usernameLocator =element(by.css('#varLogin'));
        this.passwordLocator = element(by.css('#varPassword'));
        this.loginButtonLocator = element(by.css('.uibutton'));
        this.inputCompanyName = element(by.css('#varCompanyName'));
        this.inputWebAdress = element(by.css('#varWWW'));
    }
    setUserName(userName){
       return this.usernameLocator.sendKeys(userName);
    }
    setUserPassword(userPassword){
        return this.passwordLocator.sendKeys(userPassword);
    }
    getCompanyName(){
        return this.inputCompanyName.getAttribute('value');
    }
    getWebDomen(){
        let webAdress = this.inputWebAdress.getAttribute('value');

        return
    }
    enterLogin(login, pass){
        this.setUserName(login);
        this.setUserPassword(pass);
        this.loginButtonLocator.click();
    }
}
