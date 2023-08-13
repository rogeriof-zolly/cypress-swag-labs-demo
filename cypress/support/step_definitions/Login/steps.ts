import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/home/HomePage';

Then('I see the Shopping Cart link', () => {
	HomePage.assertSuccessfulLogin();
});
