class LogOut {
  // Locators
  menuButton = '#react-burger-menu-btn';
  logoutLink = '#logout_sidebar_link';
  inventoryContainer = '.inventory_list';

  // Verify user landed on the Inventory Page after login
  verifyUserIsOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.inventoryContainer).should('be.visible');
  }

  // Open the menu
  openMenu() {
    cy.get(this.menuButton).should('be.visible').click();
  }

  // Click logout
  clickLogout() {
    cy.get(this.logoutLink).should('be.visible').click();
  }

  // Combine actions
  logout() {
    this.openMenu();
    this.clickLogout();
  }

  // Verify user returned to login page
  verifyUserIsLoggedOut() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get('[data-test="login-button"]').should('be.visible');
  }
}

export default LogOut;
