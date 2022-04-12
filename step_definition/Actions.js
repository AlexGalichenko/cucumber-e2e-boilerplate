const { When } = require('@cucumber/cucumber');
const { po } = require('@cucumber-e2e/po2');
const memory = require('@cucumber-e2e/memory2');

When(/open '(.+)' url/, async function (url) {
  const parsedUrl = memory.getValue(url);
  await browser.url(parsedUrl);
});

When(/type '(.+)' to '(.+)'/, async function (value, alias) {
  const parsedValue = memory.getValue(value);
  const element = await po.getElement(alias);
  await element.addValue(parsedValue);
});

When(/click '(.+)'/, async function (alias) {
  const element = await po.getElement(alias);
  await element.waitForClickable();
  await element.click();
});

When(/wait '(.+)' sec/, async function (sec) {
  await browser.pause(sec * 1000);
});

When(/setValue '(.+)' to '(.+)'/, async function (value, alias) {
  const parsedValue = memory.getValue(value);
  const element = await po.getElement(alias);
  await element.setValue(parsedValue);
});

