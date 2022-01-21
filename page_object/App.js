const { $, $$ } = require('@cucumber-e2e/po2');
const GoogleResults = require('./GoogleResults');

class App {
    GoogleInput = $('input.gLFyf.gsfi');
    GoogleSearch = $('.FPdoLc.lJ9FBc input[name="btnK"]')
    GoogleResults = $$(new GoogleResults())
}

module.exports = new App();
