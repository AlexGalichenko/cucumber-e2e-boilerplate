const { $, $$ } = require('@cucumber-e2e/po2');
const GoogleResults = require('./GoogleResults');
const WikiHome = require('./wikipedia/WikiHome');
const SyncBasePage = require('./syncfusion/SyncBasePage');
const SyncDoctorForm = require('./syncfusion/SyncDoctorForm');
const Table = require('./syncfusion/PatientTableRow');
const OverlayTable = require('./syncfusion/PatientOverlayInfo');
const SyncPatientForm = require('./syncfusion/SyncPatientForm');
const TableRow = require('./syncfusion/DoctorTableRow');

class App {
  GoogleInput = $('input.gLFyf.gsfi');
  GoogleSearch = $('.FPdoLc.lJ9FBc input[name="btnK"]');
  DoctorList = $('#Specialist_8>.specialist-detail>.name');
  Neurology = $('[data-value="neurology"]');
  FiveYears = $('[data-value="5+ years"]');
  DutyTimingSelect = $('[data-value="Shift3"]');
  BloodGroupOplus = $('[data-value="O+"]');
  SaveButton = $('.button-container>.e-primary');
  NewDoctor = $('#Specialist_8');
  NewPatient = $('.e-lastrowcell>span.patient-name');
  AssertTimeExperience = $('.work-experience>.experience');
  AssertWorkTime = $('.work-availability>.available-days');
  AssertDocMobile = $('.contact-info>.mobile');
  PatientInfoButton = $('[aria-rowindex="7"]>[aria-colindex="1"]>span');
  GoogleResults = $$(new GoogleResults());
  WikiHome = $(new WikiHome());
  SyncBasePage = $(new SyncBasePage());
  SyncDoctorForm = $(new SyncDoctorForm());
  Table = $(new Table());
  OverlayTable = $(new OverlayTable());
  SyncPatientForm = $(new SyncPatientForm());
  TableRow = $(new TableRow());
}

module.exports = new App();
