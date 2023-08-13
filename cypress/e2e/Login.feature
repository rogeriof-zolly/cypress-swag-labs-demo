# language: en

Feature: Log into Swag Labs
  As a QA Automation Engineer
  I want to enter Swag Labs
  To practice my Cypress abilities

Scenario: Login successfully to Swaglabs
  Given I log into SwagLabs with the standard user
  Then I see the Shopping Cart link
