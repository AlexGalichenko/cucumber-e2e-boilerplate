const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { po } = require('@cucumber-e2e/po2');
const memory = require('@cucumber-e2e/memory2');
const { remote } = require('webdriverio');
const app = require('../page_object/App');
const constants = require('../memory/constants');

setDefaultTimeout(60000);

Before(async function () {
    global.browser = await remote(
        {
            logLevel: 'warn',
            waitforTimeout: 15000,
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    args: [
                        '--window-size=1920,1080'
                    ]
                }
            },
            services: ['devtools']
        }
    );

    po.init(browser, {
        timeout: 15000
    });
    po.register(app);
    memory.register(constants);
});

After(async function() {
    await browser.deleteSession();
});
