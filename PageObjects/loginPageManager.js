module.exports = class LoginPageManager {
    constructor(){
        this.usernameLocator = element(by.css('#varLogin')); //https://manager.quality-mail.com/ - Quality
        this.passwordLocator = element(by.css('#varPassword')); //https://manager.quality-mail.com/ - Quality
        this.loginButtonLocator = element(by.css('.uibutton')); //https://manager.quality-mail.com/ - Quality
        this.picLogoLocator = element(by.css('#logoBar')); //https://manager.quality-mail.com/ - Quality
        this.inputCompanyName = element(by.css('#varCompanyName')); //https://manager.quality-mail.com/ - Quality
        this.inputWebAdress = element(by.css('#varWWW')); //https://manager.quality-mail.com/ - Quality
        this.contactLocator = element.all(by.xpath('//div[@id="contacts_table"]')); //https://manager.quality-mail.com/
        this.phpUsermameLocator = element(by.css('#input_username')); //http://maria.quality.net.ua - phpMyAdmin
        this.phpPasswordLocator = element(by.css('#input_password')); //http://maria.quality.net.ua - phpMyAdmin
        this.phpButtonLocator = element(by.css('#input_go')); //http://maria.quality.net.ua - phpMyAdmin
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
    getCompanyName(){
        return this.inputCompanyName.getAttribute('value');
    }
    getWebDomen(){
        return this.inputWebAdress.getAttribute('value').then((result)=>{
             result = result.replace(/.com[\S]*/g,'');
             result = result.replace(/http:\/\//g,'');
             result = result.replace(/www./g,'');
                return result
        });
    }
    getContactsCompany(){
         return this.contactLocator.getText().then((str)=>{
             str = str.join()
             str = str.replace(/[а-яФА-Я,.]*/g,'');
             str = str.replace(/e-mail/g,'');
             str = str.replace(/ICQ/g,'');
             str = str.replace(/[\s]{2,}/g,' ');
             str = str.split(' ');
                return str
        });
    }
};
