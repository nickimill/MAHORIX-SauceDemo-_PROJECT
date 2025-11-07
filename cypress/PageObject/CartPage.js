class CartPage {
  // Locators
  addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  removeFromCartButton = '[data-test="remove-sauce-labs-backpack"]';
  cartIcon = '.shopping_cart_link';
  cartBadge = '.shopping_cart_badge';
  checkoutButton = '[data-test="checkout"]';
  cartItem = '.cart_item';

  // Add an item to the cart
  addItemToCart() {
    cy.get(this.addToCartButton).should('be.visible').click();
  }

  // Verify item is added (badge should appear)
  verifyItemAddedToCart() {
    cy.get(this.cartBadge).should('contain', '1');
  }

  // Open the cart
  openCart() {
    cy.get(this.cartIcon).click();
  }

  // Verify item appears in cart page
  verifyItemInCart() {
    cy.get(this.cartItem).should('be.visible');
  }

  // Remove item from cart
  removeItemFromCart() {
    cy.get(this.removeFromCartButton).click();
  }

  // Verify cart is empty
  verifyCartIsEmpty() {
    cy.get(this.cartBadge).should('not.exist');
  }
}

export default CartPage;
