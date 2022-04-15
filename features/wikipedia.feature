Feature: Wikipedia

  Scenario: search in wikipedia
    When open 'https://www.wikipedia.org/' url
    And type 'javascript' to 'Wikipedia > Search Input'
    And click 'Wikipedia > Search Button'
