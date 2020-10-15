Feature: Login page validation

  User try to login with different user roles with correct username and password

  Scenario: User try to login with incorrect username and password
    Given user go to mspace login page
    When user type username as "shehan3"
    And user type password as "test123#"
    And click on login button
    Then user should be displayed error message

  Scenario: User login with correct username or password
    Given user go to mspace login page
    When  user type username as "shehan3"
    When user type password as "Test123#"
    And click on login button
    Then user should logged in successfully
    And user logout from mspace


  Scenario Outline: User try to login with different user roles
    Given user go to mspace login page
    When user type username as <username>
    And user type password as <password>
    And click on login button
    Then user should logged in successfully should contain "<no_of_modules>" modules
    And user logout from mspace
    Examples:
      |username|password|no_of_modules|
      |"shehan3"|"Test123#"|3            |
      |"sdpadmin"|"test123#"|4            |