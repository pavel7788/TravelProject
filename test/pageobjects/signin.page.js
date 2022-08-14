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

    async login (username, password) {
        logger.info(`Start: ${Date.now()}`);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        this.res = true;
        logger.info("Success!");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new SignInPage();
