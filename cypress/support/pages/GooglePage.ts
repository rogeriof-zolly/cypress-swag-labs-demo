import { GOOGLE_PAGE_BUTTONS } from '../elements/googlePage/buttons';
import { GOOGLE_PAGE_ITEMS } from '../elements/googlePage/items';

export class GooglePage {
	visit() {
		cy.visit('https://www.google.com');
	}

	search(search: string) {
		cy.get(GOOGLE_PAGE_ITEMS.SEARCH_BAR).type(search).type('{enter}');
	}

	assertSearchResult(resultText: string) {
		cy.get(GOOGLE_PAGE_ITEMS.MAIN_RESULT).contains(resultText);
	}
}
