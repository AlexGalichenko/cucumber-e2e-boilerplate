const { $, $$ } = require('@cucumber-e2e/po2');

class SyncDoctorForm {
  selector = '#_dialog-content';

  DoctorName = $('[name="Name"]');
  Gender = $('[for="patientCheckFemale"]');
  MobileNumber = $('#DoctorMobile');
  Email = $('[name="Email"]');
  DepartamentBar = $('.e-float-input[cssclass="doctor-department e-field"]');
  Education = $('[name="Education"]');
  Designation = $('[name="Designation"]');
  ExperienceBar = $('#Experience');
  DutyTiming = $('#DutyTiming');
}

module.exports = SyncDoctorForm;