import LoginPage from '../PageObject/LoginPage';
import CartPage from '../PageObject/CartPage';

describe('SauceDemo Cart Feature', () => {
  const loginPage = new LoginPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    // Visit and login before each test
    loginPage.visit();
    cy.fixture('SwagLabs.json').then((users) => {
      const valid = users.valid;
      loginPage.login(valid.username, valid.password);
    });
  });

  it('should add an item to the cart successfully', () => {
    cartPage.addItemToCart();
    cartPage.verifyItemAddedToCart();
  });

  it('should display the added item in the cart', () => {
    cartPage.addItemToCart();
    cartPage.openCart();
    cartPage.verifyItemInCart();
  });

  it('should remove an item from the cart', () => {
    cartPage.addItemToCart();
    cartPage.verifyItemAddedToCart();
    cartPage.removeItemFromCart();
    cartPage.verifyCartIsEmpty();
  });
});
