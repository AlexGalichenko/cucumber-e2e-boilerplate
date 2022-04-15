Feature: Google

  Scenario: search in google
    When open 'https://google.com' url
    And type '$searchTerm' to 'Google Input'
    And click 'Google Search'
    And click '#cucumber-e2e in Google Results > Header'
    Then url should be '$expectedUrl'
