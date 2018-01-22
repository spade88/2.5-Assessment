const selectors = require('../test_data/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    //input even and odd numbers in appropriate field seperated by (,) to sort evens from odd numbers 
    'evenOddBox': browser => {

        browser
            .waitForElementVisible(selectors.evenOddBox.eoi, 3000)
            .setValue(selectors.evenOddBox.eoi, '1,2,3,4,5,6')
            .click(selectors.evenOddBox.eob)
            .expect.element(selectors.evenOddBox.er).text.to.contain('2,4,6')
        browser
            .expect.element(selectors.evenOddBox.or).text.to.contain('1,3,5')
    },
    //expect name "jimmy joe" be filtered out when "name" is entered into input line
    'filterBox': browser => {
        browser
            .setValue(selectors.filterBox.ofi, 'name')
            .click(selectors.filterBox.ofb)
            .expect.element(selectors.filterBox.ofr).text.to.contain('Jimmy Joe')
    },
    //From the listed strings, only those containing the string 'y' will appear in the results.
    'filterStringBox': browser => {
        browser
            .setValue(selectors.filterStringBox.nfi, 'y')
            .click(selectors.filterStringBox.nfb)
            .expect.element(selectors.filterStringBox.nfr).text.to.contain('Filtered Names: [ "Melody", "Tyler", "Maddy" ]')
    },
    //Click the button to see whether the string you entered is, or is not, a palindrome.
    'palindromeBox': browser => {
        browser
            .setValue(selectors.palindromeBox.pi, 'word')
            .click(selectors.palindromeBox.pb)
            .expect.element(selectors.palindromeBox.pr).text.to.contain('false')

    },
    //On the input lines, put in two numbers, click the button to see their sum.
    'sumBox': browser => {
        browser
        .setValue(selectors.sumBox.si1, '2')
        .setValue(selectors.sumBox.si2, '2')
        .click(selectors.sumBox.sb)
        .expect.element(selectors.sumBox.sr).text.to.contain('Sum: 4')
    },


}








