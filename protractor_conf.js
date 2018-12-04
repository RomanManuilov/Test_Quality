let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    /*suites: {
        smoke: './smoke/!*.js', // $ protractor protractor.conf.js --suite smoke

    },*/
    //specs: ['test_menu_aboutUs.js'],
    //specs: ['test_menu'],
    //specs: ['./smoke/test_form_askQuestion.js'],
    //specs: ['./smoke/test_form_сallMeBack.js'],
    //specs: ['./smoke/test_form_order.js'], // smoke testing
    //specs: ['./smoke/test_form_loginPass.js'], // smoke testing
    //specs: ['./smoke/test_button_orderAndSubscribe.js'],
    //specs: ['./test_checkID.js'],
    specs: ['./smoke/test_menu_bonus.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        isVerbose: true
    },


    onPrepare: function () {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
        global.qualityMainPage = 'http://quality.net.ua/';
    }
};