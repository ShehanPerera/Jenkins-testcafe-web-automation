Feature: SP Provisioning app creation

  User create first app with all ncses

  Scenario: User create application to accept from sdpadmin
    Given user go to mspace login page
    When  user type username as "testuserr2"
    When user type password as "Test123#"
    And click on login button
    Then user click on Inzpire and click on create first app
    When user type a app name as "firstapp1" and app description as "Test Provisioning App creation with Testcafe BDD" and allowed hosts as "127.0.0.1"
    And user click on the Next button
    And user click on the Next button
    And user select ncs sms and USSD and caas and subscription
    And user click on the Next button
    Then user type a sms Reciving URL as "http://sms" and sms Default Sender as "071" and sms Send Address Alias as  "071"
    And user click Next button
    And user type smsKeyword as "fa1"
    And user click Next button
    And user click sms MT Charging Amount and type as  "22.00" 
    And user click Next button
    And user type ussd URL as  "http://ussd" 
    And user click Next button 
    And user type ussd KeyWord as "236"
    And user click Next button
    And user click sms ussd Charging Amount and type as  "45.00" 
    And user click Next button
    And user type caas URL as "http://caas" 
    And user click Next button 
    And user click caas Enable Mobile Account for Mobite button
    And user click Next button
    Then user type a subscription Response Message as "Hi" and unsubscription Response Message as "Bye" and subscription URL as "http://sub"
    And user click Next button
    And user click Next button
    Then user click on prepaid Charging Frequency  button and click prepaid Monthly button
    And user click prepaid Charging Amount button and type as "36.00" 
    Then user click on postpaid Charging Frequency  button and click postpaid Daily button
    And user click postpaid Charging Amount button and type as "20.00"
    And user click on send For Approval button
    And user clean created App from database with appName "firstapp1" and sms keyword "fa1" 


  Scenario: User create application to accept from sdpadmin
    Given user go to mspace login page
    # When  user type username as "testuser1"
    # When user type password as "Test123#"
    # And click on login button
    Then user click on Inzpire and click on create a new app
    When user type a app name as "makeapp1" and app description as "Test Provisioning App creation with Testcafe BDD" and allowed hosts as "127.0.0.1"
    And user click on the Next button
    And user click on the Next button
    And user select ncs sms and USSD and caas and subscription
    And user click on the Next button
    Then user type a sms Reciving URL as "http://sms" and sms Default Sender as "071" and sms Send Address Alias as  "071"
    And user click Next button
    And user type smsKeyword as "make1"
    And user click Next button
    And user click sms MT Charging Amount and type as  "22.00" 
    And user click Next button
    And user type ussd URL as  "http://ussd" 
    And user click Next button 
    And user type ussd KeyWord as "283"
    And user click Next button
    And user click sms ussd Charging Amount and type as  "45.00" 
    And user click Next button
    And user type caas URL as "http://caas" 
    And user click Next button 
    And user click caas Enable Mobile Account for Mobite button
    And user click Next button
    Then user type a subscription Response Message as "Hi" and unsubscription Response Message as "Bye" and subscription URL as "http://sub"
    And user click Next button
    And user click Next button
    Then user click on prepaid Charging Frequency  button and click prepaid Monthly button
    And user click prepaid Charging Amount button and type as "36.00" 
    Then user click on postpaid Charging Frequency  button and click postpaid Daily button
    And user click postpaid Charging Amount button and type as "20.00"
    And user click on send For Approval button
    And user clean created App from database with appName "makeapp1" and sms keyword "make1"

  Scenario: User create application to accept from sdpadmin
    Given user go to mspace login page
    # When  user type username as "testuser1"
    # When user type password as "Test123#"
    # And click on login button
    Then user click on Inzpire 
    When user type a app name as "makeapp1" in app search bar
    And user click on makeapp1 app
    And user click on apiDetails
    And user click on chargingDetails  
    And user click on revenueShare
    And user click on activityLog