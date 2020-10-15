Feature: Admin functions on created apps
  Admin view, approve, reject user created apps

  Scenario: Admin view app details
    Given user go to mspace login page
    When user type username as "sdpadmin"
    And user type password as "test123#"
    And click on login button
    Then user click on Inzpire
    And user type app name as "BDDAlert3" and search the app
    And admin select the app name with "BDDAlert3"
    And admin check details of the app


  Scenario: Admin try to verify app created with unverified user
    Given user go to mspace login page
    Then user click on Inzpire
    And user type app name as "UniApp" and search the app
    And admin select the app name with "UniApp"
    When user click on change state button of the app
    Then user should be displayed verify user modal

  Scenario: Admin try to search a app hasn't been created
    Given user go to mspace login page
    Then user click on Inzpire
    And user type app name as "NoUserApp" and search the app
    And user should be displayed error message


  Scenario: Admin approve user created application
    Given user go to mspace login page
    Then user click on Inzpire
    And user type app name as "ConfirmApp" and search the app
    When user click on change state button of the app
    And user type remarks as "Testcafe Approve"
    And select the status as "Active Production"
    And user click on save changes button



