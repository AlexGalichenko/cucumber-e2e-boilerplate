const { $, $$ } = require('@cucumber-e2e/po2');

class PatientOverlayInfo {
  selector = 'div.field-row>:nth-child(2)';
}

class OverlayTable {
  selector = 'div.grid-edit-dialog';

  PatientOverlayInfo = $$(new PatientOverlayInfo());
}

module.exports = OverlayTable;