const { $, $$ } = require('@cucumber-e2e/po2');

class SyncBasePage {
  selector = 'app-main>.planner-wrapper';

  SideBarDoctors = $('.sidebar-item.doctors');
  AddNewDoctor = $('.specialization-types>[cssclass = "e-normal"]');
  SideBarPatients = $('.sidebar-item.patients');
  AddNewPatient = $('[cssclass="e-normal add-details"]');
}

module.exports = SyncBasePage;