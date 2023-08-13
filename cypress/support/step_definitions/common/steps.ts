import { Given } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/login/LoginPage';
import { std_user_username, password } from '../../fixtures/login.json';

Given('I log into SwagLabs with the standard user', () => {
	LoginPage.login(std_user_username, password);
});
