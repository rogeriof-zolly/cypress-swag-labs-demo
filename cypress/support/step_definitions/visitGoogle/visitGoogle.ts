import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { GooglePage } from '../../pages/GooglePage';

const googlePage: GooglePage = new GooglePage();

Given('I visit Google', () => {
	googlePage.visit();
});

When('I search for {string}', (search: string) => {
	googlePage.search(search);
});

Then('I see the {string} search result', (search: string) => {
	googlePage.assertSearchResult(search);
});
