// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ['../src/features/**/*.feature'],
  capabilities: {
    browserName: 'chrome',
    "goog:chromeOptions": {
      binary: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    }
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['../src/steps/**/*.steps.ts'],
  }
};
