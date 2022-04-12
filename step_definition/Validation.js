const { Then } = require('@cucumber/cucumber');
const memory = require('@cucumber-e2e/memory2');
const { expect } = require('chai');
const { po } = require('@cucumber-e2e/po2');

Then(/url should be '(.+)'/, async function (expected) {
  const expectedValue = memory.getValue(expected);
  expect(await browser.getUrl()).to.equal(expectedValue)
});

Then(/info '(.+)' should be find in '(.+)'/, async function (expected, alias) {
  const expectedValue = memory.getValue(expected);
  const element = await po.getElement(alias);
  expect(await element.getText()).to.include(expectedValue)
})
