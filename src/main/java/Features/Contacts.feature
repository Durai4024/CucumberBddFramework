Feature: Free CRM New Contacts Feature

Scenario Outline: Free CRM Creating New Contacts Scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user clicks on new contacts
Then user enters contact details "<firstname>" and "<lastname>" and "<company>"
Then user clicks on save button
Then close the browser

Examples:
      |username | password | firstname |lastname | company |
      |naveenk  | test@123 | Steve     |Jobs     | Apple |
      |naveenk  |  test@123| jerome    |Miechal  | CTS |
      |naveenk  | test@123 | Murali    |dieu     | Inautix |
 