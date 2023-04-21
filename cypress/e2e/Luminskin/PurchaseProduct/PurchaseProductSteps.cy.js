import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import luminskinPage from '../PurchaseProduct/PurchaseProductPage.cy.js'

Given(/^I visit the page$/, () => {
	luminskinPage.homePage()
});

Then (/^I select a product of choice and make payment$/, () => {
	//luminskinPage.Product()
});

