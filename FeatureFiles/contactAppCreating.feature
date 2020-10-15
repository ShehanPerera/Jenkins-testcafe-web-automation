Feature: Soltura contact app creation

  User try to create alert app with checking different validation methods

  Scenario: User checks charging settings in creating an alert app
    Given user go to mspace login page
    When user type username as "shehan3"
    And user type password as "Test123#"
    And click on login button
    Then user click on Xpand and go to create a new app
    And user select application type Contact
    And user check charge from is set to "Application User" only
    And user get a snapshot of screen for UI verify for "creating contact app with subscriber charging modal"


  Scenario: User create schedule app
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Contact
    When user type a app name as "Contact6" and app description as "Test Schedule App creation with Testcafe BDD"
    And user choose the short code as "77000"
    And user enter keyword as "contact6"
    And user enter automatic response message as "This is a automatic response message with testcafe"
    And user click on submit button
    Then a new voting app should be created


  Scenario: User try to create a alert app with an existing app name
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Contact
    When user type a app name as "Contact5" and app description as "Test App creation with Testcafe BDD"
    Then a error message should be displayed for creating app with an existing app name

  Scenario Outline: User checks error in creating voting app with empty fields
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Contact
    When user type a app name as <AppName> and app description as <AppDesc>
    And user enter keyword as <KeyWord>
    And user click on General Settings tab
    And user set yes to expiration date required
    And user click on submit button
    Then user should be displayed the error messages in creating contact app with empty fields
    And user clean created App from database with appName "Contact6" and keyword "contact6"
    Examples:
      |AppName|AppDesc|ShortCode|KeyWord|
      |" "    |" "    |"77000"  |" "    |

  Scenario: User logout from mSpace
    Given user go to mspace login page
    And user logout from mspace