import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import luminskinPage from '../PurchaseProduct/PurchaseProductPage'

Given(/^I visit the page$/, () => {
	luminskinPage.homePage()
});

Then (/^I select a product of choice and make payment$/, () => {
	luminskinPage.Product()
});

