const BookHotelPage = require('../pageobjects/bookhotel.page');
const {expect} = require("chai");

describe('To book hotel', () => {
    it('should try book hotel in London in the middle of the next month for 2 travellers in 1 room', async () => {
        await BookHotelPage.open()
        await BookHotelPage.chooseEnglish();
        await BookHotelPage.book('Lon');
        expect(BookHotelPage.res).to.be.equal(true);
    });
});

