const { $, $$ } = require('@cucumber-e2e/po2');

class WikiHome {
    selector = '.search-container';

    SearchInput = $('#searchInput');
    SearchButton = $('button[type=submit]');
}

module.exports = WikiHome;
