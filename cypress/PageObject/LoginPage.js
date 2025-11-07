class LoginPage {
  // locators
  usernameInput = '[data-test="username"]';
  passwordInput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  errorMessage = '[data-test="error"]';

  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  enterUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifySuccessfulLogin() {
    // On successful login you go to inventory page whose URL ends “/inventory.html”
    cy.url().should('include', '/inventory.html');
  }

  verifyErrorMessage(text) {
    cy.get(this.errorMessage).should('be.visible').and('contain', text);
  }
}

export default LoginPage;

