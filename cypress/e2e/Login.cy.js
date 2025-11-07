
import LoginPage from '../PageObject/LoginPage';

describe('SauceDemo Login Feature', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.fixture('SwagLabs.json').then((users) => {
      const valid = users.valid;
      loginPage.login(valid.username, valid.password);
      loginPage.verifySuccessfulLogin();
    });
  });

  it('should show error message with invalid credentials', () => {
    cy.fixture('SwagLabs.json').then((users) => {
      const invalid = users.invalid;
      loginPage.login(invalid.username, invalid.password);
      loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });
  });
});

