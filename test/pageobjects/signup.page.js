
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

    get checkCaptcha () {
        //return $('//*[@id="g-recaptcha-anchor-label"]');
        //return $("[id='recaptcha-anchor']");
        return $(`//*[text()="Я не робот"]`);
    }

    get verifyCaptcha () {
        //return $('//*[@id="g-recaptcha-anchor-label"]');
        //return $("[id='recaptcha-anchor']");
        return $("button[id = 'recaptcha-verify-button']");
    }

    get linkConfidential () {
        //return $(`//*[text()="Конфиденциальность"]`);
        return $('//*[@id="rc-anchor-container"]/div[4]/div[2]/a[1]');
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

        await browser.keys('\uE004');
        await browser.keys('\uE007');
        //this.checkCaptcha.click();

        //this.verifyCaptcha.click();
        if (this.verifyCaptcha.isExisting())
            this.res = true;

        //await this.btnSubmit.click();
        await browser.pause(5000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('signup');
    }
}

module.exports = new SignUpPage();
