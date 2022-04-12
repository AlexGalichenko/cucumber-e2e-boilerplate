const { $, $$ } = require('@cucumber-e2e/po2');

class DoctorTableRow {
  selector = 'div.basic-detail>div';
}

class TableRow {
  selector = 'div.active-doctor-info';

  DoctorTableRow = $$(new DoctorTableRow());
}

module.exports = TableRow;