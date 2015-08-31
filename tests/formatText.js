module.exports = {
    'Bold': function(browser) {
        browser
            .url('http://localhost:3000')
            .waitForElementVisible('body', 1000);

        browser.expect.element('#editor').to.be.present;

        browser.click('#editor');

        browser.keys([browser.Keys.CONTROL, 'b']);

        browser.setValue('#editor', 'asd');

        browser.expect.element('#editor b').to.be.present;

        browser.expect.element('#editor b').text.to.equal('asd');

        browser.end();
    }
};
