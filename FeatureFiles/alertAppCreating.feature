Feature: Soltura alert app creation

  User try to create alert app with checking different validation methods

  Scenario: User checks charging settings in creating an alert app
    Given user go to mspace login page
    When user type username as "shehan3"
    And user type password as "Test123#"
    And click on login button
    Then user click on Xpand and go to create a new app
    And user select application type Alert
    And user check charge from is set to "Subscriber" only
    And user validate charging settings according to charging modal "per-message"
    And user get a snapshot of screen for UI verify for "creating alert app with subscriber charging modal"
    And user validate charging settings according to charging modal "subscription"
    And user get a snapshot of screen for UI verify for "creating alert app with per message charging modal"

  Scenario: User create Alert app
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Alert
    When user type a app name as "BDDAlert3" and app description as "Test Alert App creation with Testcafe BDD"
    And user choose the short code as "77000"
    And user enter keyword as "BDDAlert3"
    And user click on submit button
    Then a new voting app should be created


  Scenario: User try to create a alert app with an existing app name
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Alert
    When user type a app name as "BDDAlert3" and app description as "Test App creation with Testcafe BDD"
    Then a error message should be displayed for creating app with an existing app name

  Scenario Outline: User checks error in creating voting app with empty fields
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Alert
    When user type a app name as <AppName> and app description as <AppDesc>
    And user enter keyword as <KeyWord>
    And user set yes to expiration date required
    And user set yes to update content via SMS
    And user set allowed mobile numbers to " "
    And user click on submit button
    Then user should be displayed the error messages in creating alert app with empty fields
    And user clean created App from database with appName "BDDAlert3" and keyword "bddalert3"
    Examples:
      |AppName|AppDesc|ShortCode|KeyWord|
      |" "    |" "    |"77000"  |" "    |

  Scenario: User logout from mSpace
    Given user go to mspace login page
    And user logout from mspace