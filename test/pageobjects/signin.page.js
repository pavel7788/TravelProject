const Page = require('./page');
const logger = require('../config/logger.config');

class SignInPage extends Page {

    res = false;

    get inputUsername () {
        return $('input[name="email"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async loginResult () {
        if (await $(`//*[text()=" Logout"]`).isExisting())
            logger.info("Successful" + '\n');
        else
            logger.info("Failure" + '\n');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        if (this.btnSubmit.isClickable())
            this.res = true;
        await this.btnSubmit.click();
        logger.info(`Login attempt: ${Date.now()}`);
        await this.loginResult();
        await browser.pause(5000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new SignInPage();
