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

Then(/^it clicks on an assets$/, async () => {
  const div = element(by.tagName('ion-card'));
  await div.click();
})

Then(/^it goes in the page of the asset$/, async () => {
  const url = await browser.getCurrentUrl()
  expect(url).to.equal("http://127.0.0.1:4200/asset/e7833d96");
})