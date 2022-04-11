Feature: Wikipedia

  Scenario: search in wikipedia
    When open 'https://www.wikipedia.org/' url
    And type 'javascript' to 'Wiki Home > Search Input'
    And click 'Wiki Home > Search Button'
    Then wait '10' sec
