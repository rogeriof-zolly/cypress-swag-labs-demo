import { GOOGLE_PAGE_ITEMS } from '../elements/googlePage/items';
import { googleUrl } from '../fixtures/urls.json';

export class GooglePage {
	visit() {
		cy.visit(googleUrl);
	}

	search(search: string) {
		cy.get(GOOGLE_PAGE_ITEMS.SEARCH_BAR).type(search).type('{enter}');
	}

	assertSearchResult(resultText: string) {
		cy.get(GOOGLE_PAGE_ITEMS.MAIN_RESULT).contains(resultText);
	}
}
