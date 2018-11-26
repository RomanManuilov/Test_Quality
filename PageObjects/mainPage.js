module.exports = class LoginPageCustomer {
    constructor(){
        this.loginCustomerLocator = element(by.xpath('//input[@name="varLogin"]'));
        this.passwordCustomerLocator = element(by.xpath('//input[@name="varPassword"]'));
        this.loginButtonLocator = element(by.css('.loginForm .button'));
        this.nameCustomerLocator = element(by.xpath('//div[@class="loggedInfo"]//strong[contains(text(),"QUALITY")]'));
    }
    setLoginCustomer(userName){
        return this.loginCustomerLocator.sendKeys(userName);
    }
    setPasswordCustomer(userPassword){
        return this.passwordCustomerLocator.sendKeys(userPassword);
    }
    enterAccountCustomer(login, pass){
        this.setLoginCustomer(login);
        this.setPasswordCustomer(pass);
        this.loginButtonLocator.click();
    }
}
