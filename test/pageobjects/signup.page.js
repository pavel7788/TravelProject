
const Page = require('./page');

class SignUpPage extends Page {

    res = false;

    get inputFirstName () {
        return $("input[name = 'first_name']");
    }

    get inputLastName () {
        return $("input[name = 'last_name']");
    }

    get inputPhone () {
        return $("input[name = 'phone']");
    }

    get inputEmail () {
        return $("input[name = 'email']");
    }

    get inputPassword () {
        return $("input[name = 'password']");
    }

    get selectAccount () {
        return $("select[id = 'account_type']");
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async signup (fn, ln, ph, email, pass, index) {
        await this.inputFirstName.setValue(fn);
        await this.inputLastName.setValue(ln);
        await this.inputPhone.setValue(ph);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(pass);
        await this.selectAccount.selectByIndex(index);
        await this.btnSubmit.waitForClickable();
        this.res = true;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signup');
    }
}

module.exports = new SignUpPage();
