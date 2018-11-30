let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['test_MainMenu_quality.js'],
    //specs: ['test_menu'],
    //specs: ['./SmokeTest/test_Form_AskQuestion_quality.js'],
    specs: ['./SmokeTest/test_Form_CallMeBack_quality.js'],
    //specs: ['test_Form_PageDocsQuality.js'],
    // specs: ['./SmokeTest/test_Form_Order_quality.js'], // smoke testing
    //specs: ['./SmokeTest/test_Form_LoginPass.js'], // smoke testing
    //specs: ['./test_checkID.js'],

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