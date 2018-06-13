let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['test_MainMenu_quality.js'],
  //specs: ['test_longer_URL.js'],
  //specs: ['test_menu','',''],
    specs: ['test_MenuFooter_quality.js','test_MainMenu_quality.js','test_MainPage_quality.js'],

  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots'
      }).getJasmine2Reporter());

      jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
  	}));
   }
};