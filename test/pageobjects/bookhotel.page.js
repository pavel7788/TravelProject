
const Page = require('./page');

class BookHotelPage extends Page {

    res = false;

    get inputCity () {
        return $("//*[@id=\"fadein\"]/span/span/span[1]/input");
    }

    get inputCheckIn () {
        return $('input[id="checkin"]');
    }

    get inputCheckOut () {
        return $('input[id="checkout"]');
    }

    get btnSubmit () {
        return $('button[id="submit"]');
    }

    get btnBackToSearch () {
        return $(`//*[text()="Back to Search"]`);
    }

    async enterCity (city) {
        await $('//*[@id="select2-hotels_city-container"]').click();
        await this.inputCity.setValue(city);

        //await $(`//*[@id="select2-hotels_city-results"]/li[1]`).click();
        let expression = '';
        if (city.toLowerCase()==='lon')
            expression = "London,United Kingdom";
        await $(`//*[text()="${expression}"]`).click();
    }

    async enterCheckIn () {
        await this.inputCheckIn.click();
        await $('//*[@id="fadein"]/div[6]/div[1]/table/thead/tr[1]/th[3]/i').click();
        await $('//*[@id="fadein"]/div[6]/div[1]/table/tbody/tr[4]/td[6]').click();
    }

    async enterCheckOut () {
        //await this.inputCheckOut.click();
        //await $('//*[@id="fadein"]/div[6]/div[1]/table/tbody/tr[5]/td[6]').click();
    }

    async book (city) {
        await this.enterCity(city);
        await this.enterCheckIn();
        await this.enterCheckOut();
        await this.btnSubmit.click();
        if (this.btnBackToSearch.isExisting())
            this.res = true;
        await browser.pause(5000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('hotels');
    }
}

module.exports = new BookHotelPage();
