import { When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/home/HomePage';
import { HOME_PAGE_BUTTONS } from '../../elements/homePage/buttons';
import ShoppingPage from '../../pages/shopping/ShoppingPage';

When('I see the {string} product', (shopItem: string) => {
	HomePage.assertItemInInventory(shopItem);
});

When('I add the Bike Light item to the cart', () => {
	HomePage.addToCart(HOME_PAGE_BUTTONS.ADD_BIKE_LIGHT);
});

When('I see the {string} in the cart', (itemName: string) => {
	ShoppingPage.assertItemInCart(itemName);
});

When('I click the checkout button', () => {
	ShoppingPage.checkout();
});

When('I enter my order data and continue', () => {
	ShoppingPage.fillOrderForm();
});

When('I see the order details', () => {
	ShoppingPage.assertOrderDetails();
});
