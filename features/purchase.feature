@regression
Feature: Purchase Product feature

  @purchase
  Scenario: Verify purchase functionality
    Given user navigate to the website "https://www.saucedemo.com/"
    And user enters "standard_user" into the input field "homepage.username"
    And user enters "secret_sauce" into the input field "homepage.password"
    And user will click the "homepage.login-button"
    And user will click the "inventory.add-to-cart"
    And user will click the "inventory.shopping-cart-link"
    And user will click the "checkout.checkout-button"
    And user enters "Alekya" into the input field "checkout-step-one.first-name"
    And user enters "Manepalli" into the input field "checkout-step-one.last-name"
    And user enters "560001" into the input field "checkout-step-one.postal-code"
    And user will click the "checkout-step-one.continue-submit"
    And user will click the "checkout-step-two.continue-button"
    And user expect "checkout-complete.success-message" to be "isDisplayed"
    And user expect "checkout-complete.success-message" to contain "Thank you for your order!"
    And user will click the "checkout-complete.back-to-home"
    And user will click the "inventory.menu-button"
    And user pause for "1000" ms
    And user will click the "inventory.logout-link"

