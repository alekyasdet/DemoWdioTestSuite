@regression
Feature: Validate login functionality with various type of data

  @InvalidLogin
  Scenario Outline: Login page tested with various data combinations
    Given user navigate to the website "https://www.saucedemo.com/"
    And user enters "<user_name>" into the input field "homepage.username"
    And user enters "<password>" into the input field "homepage.password"
    And user will click the "homepage.login-button"
    And user pause for "2000" ms
    Then user expect "homepage.error-message" to contain "<message>"

    Examples:
      | user_name     | password | message                                                                   |
      |               |          | Epic sadface: Username is required                                        |
      | stan          |          | Epic sadface: Password is required                                        |
      | stan          | srft     | Epic sadface: Username and password do not match any user in this service |
      | standard_user | srft     | Epic sadface: Username and password do not match any user in this service |


