Feature: SyncfusionDoctor

  @debug
  Scenario: Add new doctor
    When open 'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard' url
    And click 'Sync Base Page > Side Bar Doctors'
    And click 'Sync Base Page > Add New Doctor'
    And type '$docName' to 'Sync Doctor Form > Doctor Name'
    And click 'Sync Doctor Form > Gender'
    And type '$mobile' to 'Sync Doctor Form > Mobile Number'
    And type '$docEmail' to 'Sync Doctor Form > Email'
    And click 'Sync Doctor Form > Departament Bar';
    And click 'Neurology';
    And type '$education' to 'Sync Doctor Form > Education';
    And type '$experience' to 'Sync Doctor Form > Designation';
    And click 'Sync Doctor Form > Experience Bar';
    And click 'Five Years';
    And click 'Sync Doctor Form > Duty Timing';
    And click 'Duty Timing Select';
    And click 'Save Button';
    Then info 'Dr. Jane Dou' should be find in 'Doctor List';
    And click 'New Doctor';
    Then info '$docName' should be find in 'TableRow >#1 of Doctor Table Row';
    Then info '$educationForAssert' should be find in 'TableRow >#2 of Doctor Table Row';
    Then info '$experience' should be find in 'TableRow >#3 of Doctor Table Row';
    Then info '$timeExperience' should be find in 'Assert Time Experience';
    Then info '$workTime' should be find in 'Assert Work Time';
    Then info '$docMobileAssertion' should be find in 'Assert Doc Mobile';
