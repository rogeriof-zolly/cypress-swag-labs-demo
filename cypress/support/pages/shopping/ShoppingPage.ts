import { SHOPPING_PAGE_BUTTONS } from '../../elements/shoppingPage/buttons';
import { SHOPPING_PAGE_INPUTS } from '../../elements/shoppingPage/inputs';
import { SHOPPING_PAGE_ITEMS } from '../../elements/shoppingPage/items';

class ShoppingPage {
	assertItemInCart(itemName: string) {
		cy.get(SHOPPING_PAGE_ITEMS.INVENTORY_ITEM_NAME).should(
			'have.text',
			itemName,
		);
	}

	checkout() {
		cy.get(SHOPPING_PAGE_BUTTONS.CHECKOUT).click();
	}

	fillOrderForm() {
		const orderData = {
			firstName: 'Rogério',
			lastName: 'Zolly',
			postalCode: '123456',
		};

		cy.get(SHOPPING_PAGE_INPUTS.FIRST_NAME).type(orderData.firstName);
		cy.get(SHOPPING_PAGE_INPUTS.LAST_NAME).type(orderData.lastName);
		cy.get(SHOPPING_PAGE_INPUTS.POSTAL_CODE).type(orderData.postalCode);

		cy.get(SHOPPING_PAGE_BUTTONS.CONTINUE).click();
	}

	assertOrderDetails() {
		let orderDetails = {
			subtotal: '',
			taxes: '',
			total: '',
		};

		cy.get(SHOPPING_PAGE_ITEMS.SHIPPING_INFO).should('not.be.empty');
		cy.get(SHOPPING_PAGE_ITEMS.PAYMENT_INFO).should('not.be.empty');
		cy.get(SHOPPING_PAGE_ITEMS.SUBTOTAL_VALUE).invoke('text').as('subTotal');
		cy.get(SHOPPING_PAGE_ITEMS.TAX_VALUE).then((taxValue) => {
			orderDetails.taxes = taxValue.text();
			cy.log(orderDetails.taxes);
		});
	}
}

export default new ShoppingPage();
