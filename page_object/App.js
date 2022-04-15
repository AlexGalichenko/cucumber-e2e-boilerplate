const { $, $$ } = require('@cucumber-e2e/po2');
const GoogleResults = require('./GoogleResults');
const Wikipedia = require('./Wikipedia');

class App {
    GoogleInput = $('input.gLFyf.gsfi');
    GoogleSearch = $('.FPdoLc.lJ9FBc input[name="btnK"]');
    GoogleResults = $$(new GoogleResults());
    Wikipedia = $(new Wikipedia());
}

module.exports = new App();
