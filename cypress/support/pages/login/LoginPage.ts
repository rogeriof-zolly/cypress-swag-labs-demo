import { LOGIN_PAGE_BUTTONS } from '../../elements/loginPage/buttons';
import { LOGIN_PAGE_INPUTS } from '../../elements/loginPage/inputs';
import { std_user_username, password } from '../../fixtures/login.json';

class LoginPage {
	login(username: string, password: string) {
		cy.visit('/');
		cy.get(LOGIN_PAGE_INPUTS.USERNAME).type(username);
		cy.get(LOGIN_PAGE_INPUTS.PASSWORD).type(password);
		cy.get(LOGIN_PAGE_BUTTONS.SUBMIT_FORM).click();
	}
}

export default new LoginPage();
