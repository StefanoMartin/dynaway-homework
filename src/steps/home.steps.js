const { Before, Given, Then, When } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { browser, element, by } = require('protractor');

Given(/^the user is on the home page$/, async () => {
  await browser.get('http://127.0.0.1:4200');
});

Then(/^a list of all assets is displayed$/, async () => {
  const divs = await element.all(by.css('.title'));
  expect(divs.length).to.equal(6)
});