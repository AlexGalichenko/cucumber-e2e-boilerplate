const { Then } = require('@cucumber/cucumber');
const memory = require('@cucumber-e2e/memory2');
const { expect } = require('chai');

Then(/url should be '(.+)'/, async function(expected) {
    const expectedValue = memory.getValue(expected);
    expect(await browser.getUrl()).to.equal(expectedValue)
})
