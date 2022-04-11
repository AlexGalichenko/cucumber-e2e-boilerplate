const { $, $$ } = require('@cucumber-e2e/po2');
const GoogleResults = require('./GoogleResults');
const WikiHome = require('./wikipedia/WikiHome');

class App {
    GoogleInput = $('input.gLFyf.gsfi');
    GoogleSearch = $('.FPdoLc.lJ9FBc input[name="btnK"]');
    GoogleResults = $$(new GoogleResults());
    WikiHome = $(new WikiHome());
}

module.exports = new App();
