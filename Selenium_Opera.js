var webdriver = require('selenium-webdriver');
var opera = require('selenium-webdriver/opera');

var options = new opera.Options();
options.setOperaBinaryPath('C:\\Program Files\\Opera\\53.0.2907.88\\opera.exe');
var driver = new webdriver.Builder()
    .forBrowser('opera')
    .setOperaOptions(options)
    .build();

By=webdriver.By, until=webdriver.until, Key = webdriver.Key;

driver.sleep(3000).then(function(){console.log('aeeee')});
driver.close();
driver.quit();