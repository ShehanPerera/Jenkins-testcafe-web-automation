Feature: Soltura voting app creation

  User try to create voting app with checking different validation methods

  Scenario: Create a new voting app with soultura
    Given user go to mspace login page
    When user type username as "shehan3"
    And user type password as "Test123#"
    And click on login button
    Then user click on Xpand and go to create a new app
    And user select application type Voting
    When user type a app name as "BDDAPP8" and app description as "Test App creation with Testcafe BDD"
    And user choose the short code as "77000"
    And user enter keyword as "BDDAPP8"
    And user enter candidate "1" code as "001" and short description as "Candidate 001" in voting campaign settings
    And user enter candidate "2" code as "002" and short description as "Candidate 002" in voting campaign settings
    And user click on submit button
    Then a new voting app should be created

  Scenario: User try to create a voting app with an existing app name
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Voting
    When user type a app name as "BDDAPP4" and app description as "Test App creation with Testcafe BDD"
    Then a error message should be displayed for creating app with an existing app name

  Scenario Outline: User checks error in creating voting app with empty fields
    Given user go to mspace login page
    Then user click on Xpand and go to create a new app
    And user select application type Voting
    When user type a app name as <AppName> and app description as <AppDesc>
    And user enter keyword as <KeyWord>
    And user enter candidate <CandidateNo> code as <CandidateCode> and short description as <CandidateDesc> in voting campaign settings
    And user enter candidate <CandidateNo> code as <CandidateCode> and short description as <CandidateDesc> in voting campaign settings
    And user click on submit button
    Then user should be displayed the error messages
    And user clean created App from database with appName "BDDAPP8" and keyword "bddapp8"
    Examples:
      |AppName|AppDesc|ShortCode|KeyWord|CandidateNo|CandidateCode|CandidateDesc|
      |" "    |" "    |"77000"  |" "    |"1"        |" "          |" "          |

  Scenario: User logout from mSpace
    Given user go to mspace login page
    And user logout from mspace
