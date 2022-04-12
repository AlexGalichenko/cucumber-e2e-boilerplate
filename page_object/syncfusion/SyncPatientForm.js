const { $, $$ } = require('@cucumber-e2e/po2');

class SyncPatientForm {
    selector = '#_dialog-content';

    PatientName = $('[name="Name"]');
    DOB = $('#DOB_input');
    Mobile = $('#PatientMobile');
    Email = $('[name="Email"]');
    BloodGroup = $('#BloodGroup');
    Symptoms = $('[name="Symptoms"]');
}

module.exports = SyncPatientForm;