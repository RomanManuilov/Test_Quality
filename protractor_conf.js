let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    /*suites: {
        smoke: './smoke/!*.js', // $ protractor protractor.conf.js --suite smoke

    },*/
    specs: ['./test_checkID.js',
            //'./smoke/test_button_orderAndSubscribe.js',
            //'./smoke/test_form_askQuestion.js',
            //'./smoke/test_form_loginPass.js',
    ],

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