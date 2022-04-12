Feature: SyncfusionPatient

  @debug
  Scenario: Add new patient
    When open 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard' url
    And click 'Sync Base Page > Side Bar Patients';
    And click 'Sync Base Page > Add New Patient';
    And type '$patientName' to 'Sync Patient Form > Patient Name';
    And setValue '$dob' to 'Sync Patient Form > DOB';
    And type '$mobile' to 'Sync Patient Form > Mobile';
    And type '$patientEmail' to 'Sync Patient Form > Email';
    And click 'Sync Patient Form > Blood Group';
    And click 'Blood Group O plus';
    And type '$symptoms' to 'Sync Patient Form > Symptoms';
    And click 'Save Button';
    Then info '$patientName' should be find in 'Table > #8 of Patient Table Row > Name';
    And click 'Patient Info Button';
    Then info '$patientName' should be find in 'OverlayTable > #2 of Patient Overlay Info';
    Then info '$gender' should be find in 'OverlayTable > #3 of Patient Overlay Info';
    Then info '$dobForAssertion' should be find in 'OverlayTable > #4 of Patient Overlay Info';
    Then info '$blood' should be find in 'OverlayTable > #5 of Patient Overlay Info';
    Then info '$mobileForAssertion' should be find in 'OverlayTable > #6 of Patient Overlay Info';
    Then info '$patientEmail' should be find in 'OverlayTable > #7 of Patient Overlay Info';
    Then info '$symptoms' should be find in 'OverlayTable > #8 of Patient Overlay Info';