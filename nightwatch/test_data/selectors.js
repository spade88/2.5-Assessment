module.exports = {
    //expect "odds" and "evens" to sort as expected by app
    evenOddBox: {
        eoi: 'input[name="evenOddInput"]',
        eob: 'button[name="evenOddButton"]',
        er: 'span[name="evenResults"]',
        or: 'span[name="oddResults"]',
    },
    filterBox: {
        //expect "filter" to sort out name, title, age and hairColor
        ofi: 'input[name="objectFilterInput"]',
        ofb: 'button[name="objectFilterButton"]',
        ofr: 'span[name="objectFilterResults"]',

    },

    filterStringBox: {
        //from the listed strings, only those containing the string you input will appear in the results
        nfi: 'input[id="nameFilterInput"]',
        nfb: 'button[id="nameFilterButton"]',
        nfr: 'span[name="nameFilterResults"]',
    },

    palindromeBox: {
        //Click the button to see whether the string you entered is, or is not, a palindrome.
        pi: 'input[name="palindromeInput"]',
        pb: 'button[name="palindromeButton"]',
        pr: 'span[name="palindromeResults"]',
    },

    sumBox: {
        //On the input lines, put in two numbers, click the button to see their sum.
        si1: 'input[name="sumInput1"]',
        si2: 'input[name="sumInput2"]',
        sb: 'button[name="sumButton"]',
        sr: 'span[name="sumResults"]',
    },

}
