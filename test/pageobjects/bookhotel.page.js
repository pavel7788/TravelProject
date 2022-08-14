
const Page = require('./page');

class BookHotelPage extends Page {

    res = false;

    get inputCity () {
        //return $('input[type="search"]');
        return $("//*[@id=\"hotels-search\"]/div/div/div[1]/div/div/div/span/span[1]/span")
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

    async book (city, cin, cout) {
        await this.inputCity.addValue(city);
        await this.inputCity.click();
        await this.inputCheckIn.addValue(cin);
        await this.inputCheckIn.click();
        await this.inputCheckOut.addValue(cout);
        await this.inputCheckOut.click();
        await this.btnSubmit.click();
        this.res = true;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('hotels');
    }
}

module.exports = new BookHotelPage();
