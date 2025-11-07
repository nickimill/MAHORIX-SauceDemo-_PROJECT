import LoginPage from '../PageObject/LoginPage';
import LogOut from '../PageObject/LogOut';

describe('SauceDemo Logout Feature', () => {
  const loginPage = new LoginPage();
  const logOut = new LogOut();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should logout successfully after login', () => {
    cy.fixture('SwagLabs.json').then((users) => {
      const valid = users.valid;

      // Step 1: Login
      loginPage.login(valid.username, valid.password);
      logOut.verifyUserIsOnInventoryPage();

      // Step 2: Logout
      logOut.logout();
      logOut.verifyUserIsLoggedOut();
    });
  });
});
