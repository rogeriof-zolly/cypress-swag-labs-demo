# language: en

Feature: Visit google
  As a user
  I want to search for Github
  To access my repositories

Scenario: Search for github
  Given I visit Google
  When I search for "GitHub"
  Then I see the "GitHub" search result
