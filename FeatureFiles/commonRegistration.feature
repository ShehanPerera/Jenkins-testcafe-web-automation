Feature: Common registration related test scenarios
  New user registration, forget password, edit user details, and admin related test cases

  Scenario: User register as a new mSpace user
    Given user go to mspace login page
    And user click on register as a new user
    When user type user name as "testcafeUse10", email as "testcafe10@gmail.com", mobile no as "94711234794", password as "Test123#"
    And user click on continue button
    Then user type the OTP in otp text field
    And user should be directed to home page with complete your profile modal
    And user delete the created user "testcafe10@gmail.com"


  Scenario: User complete the newly created profile without filling mandatory fields
    Given user go to mspace login page
    When user type username as "testcafeUse10"
    And user type password as "Test123#"
    And click on login button
    Then user should be directed to home page with complete your profile modal
    When user click on Complete button
    Then user should directed to Create Corporate user page
    When user click on Next button
    Then a error message should be displayed to user for mandatory fields

  Scenario: User complete the newly created profile will all the mandatory fields filled
    Given user go to mspace login page
    When user type username as "testcafeUse10"
    And user type password as "Test123#"
    And click on login button
    Then user should be directed to home page with complete your profile modal
    When user click on Complete button
    Then user should directed to Create Corporate user page
    When user type organization Developer name as "TestCafe"
    And user select legal entity as "Individual"
    And user select industry as "IT"
    And user type street address as "Stree1, street2, city"
    And user select city as "Galle", province as "Southern", and country as "Sri Lanka"
    And user type the post code as "80000"
    And user type the contact person as "Andun"
    And user type NIC/BR/Passport no as "930321320V"
    And user upload a scan copy of NIC/BR/Passport
    And user click on Next button