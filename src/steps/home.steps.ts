import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { HomePage } from '../app/home/home.page';
import { AssetService } from '../app/shared/services/asset.service'

let assetService: AssetService;
let page: HomePage;

Before(() => {
  assetService = new AssetService()
  page = new HomePage(assetService);
});

Given(/^the user is on the home page$/, () => {
  page.ionViewWillEnter();
});

Then(/^a list of all assets is displayed$/, async () => {
  expect(page.assets.length).to.equal(6)
  expect(page.isToastOpen).to.equal(false)
});