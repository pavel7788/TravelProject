const SignUpPage = require('../pageobjects/signup.page');
const {expect} = require("chai");

describe('My SignUp application', () => {
    it('should attempt sign up', async () => {
        await SignUpPage.load();
        await SignUpPage.chooseEnglish()
        await SignUpPage.open();
        await SignUpPage.signup('Tom', 'Smith', '0501232333', 'tomsmith@gmail.com', 'myPassword', 0);
        expect(SignUpPage.res).to.be.equal(true);
    });
});



