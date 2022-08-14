const SignUpPage = require('../pageobjects/signup.page');
const {expect} = require("chai");

describe('My SignUp application', () => {
    it('should sign up with valid credentials', async () => {
        await SignUpPage.open();
        await SignUpPage.signup('Tom', 'Smith', '0501232333', 'tom@gmail.com', 'myPassword', 0);
        expect(SignUpPage.res).to.be.equal(true);
    });
});



