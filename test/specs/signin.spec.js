const SignInPage = require('../pageobjects/signin.page');
const { expect } = require('chai');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SignInPage.load();
        await SignInPage.chooseEnglish()
        await SignInPage.open();
        await SignInPage.login('tom@gmail.com', 'SuperSecretPassword!');
        expect(SignInPage.res).to.be.equal(true);
    });
});



