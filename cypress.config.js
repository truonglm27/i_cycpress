const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Disable password manager and notifications
          launchOptions.args.push('--disable-password-manager-reauthentication');
          launchOptions.args.push('--disable-notifications');
 
          // Additional arguments to suppress warnings
          launchOptions.args.push('--disable-gpu'); // Disables GPU hardware acceleration to prevent GPU errors
          launchOptions.args.push('--no-sandbox');  // Disables the sandbox for more stable test environments
          launchOptions.args.push('--disable-infobars'); // Removes infobars in Chrome
        }
        return launchOptions;
      });
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },

    specPattern: "**/*.feature",
    baseUrl: "https://sadlier-sc.banvien.com.vn"
  },
});
