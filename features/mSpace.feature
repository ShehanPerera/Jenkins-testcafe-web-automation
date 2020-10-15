Feature: mSpace Login Example

  Scenario: Verification of admin login
    Given user go to mspace login page
    When user type username as "robiadmin"
    And user type password as "test123#"
    Then click on login button
    Then username need to be as "ROBIADMIN"
    Then user logout from mspace

  Scenario: Verification of sp login
    Given user go to mspace login page
    When user type username as "robisp"
    And user type password as "test123#"
    Then click on login button
    Then username need to be as "ROBISP"
    Then user logout from mspace