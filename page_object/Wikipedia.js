const { $, $$ } = require('@cucumber-e2e/po2');

class Wikipedia {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = Wikipedia;
