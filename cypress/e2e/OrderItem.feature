# language: en

Feature: Order an item from the shop
  As an user
  I want to order an item from an online shop
  To receive it at my home

Scenario: Order one bike light
  Given I log into SwagLabs with the standard user
  When I see the "Sauce Labs Bike Light" product
  And I add the Bike Light item to the cart
  And I enter the shopping cart
  And I see the "Sauce Labs Bike Light" in the cart
  And I click the checkout button
  And I enter my order data and continue
  And I see the order details
  And I click Finish
  Then I see the sucessful order message
