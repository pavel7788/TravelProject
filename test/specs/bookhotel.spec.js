const BookHotelPage = require('../pageobjects/bookhotel.page');
const {expect} = require("chai");

describe('To book hotel', () => {
    it('should book hotel with valid input', async () => {
        await BookHotelPage.open();
        await BookHotelPage.book('Lon', '15-08-2023', '30-08-2023');
        expect(BookHotelPage.res).to.be.equal(true);
    });
});



