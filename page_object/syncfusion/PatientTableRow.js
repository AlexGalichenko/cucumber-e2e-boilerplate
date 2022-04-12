const { $, $$ } = require('@cucumber-e2e/po2');

class PatientTableRow {
  selector = 'tr[role="row"]';

  Title = $('td:first-child');
  Name = $('td:nth-child(2)');
}

class Table {
  selector = '.e-content>.e-table';

  PatientTableRow = $$(new PatientTableRow());
}

module.exports = Table;