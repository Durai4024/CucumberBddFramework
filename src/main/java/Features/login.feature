Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#Given user is already on Login Page
#When title of login page is Free CRM
#Then user enters username and password
#Then user clicks on login button
#Then user is on home page

Scenario Outline: Free CRM Login Test Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
  |username | password |
  |duraiv   | test345  |
  |naveenk  | test@123 |
  |naveeng  | huiom567 |
  