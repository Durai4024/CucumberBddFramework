$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Durai V/JAVA Program/CucumberBddFramework/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM New Contacts Feature",
  "description": "",
  "id": "free-crm-new-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Creating New Contacts Scenario",
  "description": "",
  "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "company"
      ],
      "line": 16,
      "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Steve",
        "Jobs",
        "Apple"
      ],
      "line": 17,
      "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "jerome",
        "Miechal",
        "CTS"
      ],
      "line": 18,
      "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;3"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Murali",
        "dieu",
        "Inautix"
      ],
      "line": 19,
      "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Creating New Contacts Scenario",
  "description": "",
  "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Steve\" and \"Jobs\" and \"Apple\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 12671526804,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 21535184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 369936439,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8477968747,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11890164,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_contacts()"
});
formatter.result({
  "duration": 3620255071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve",
      "offset": 29
    },
    {
      "val": "Jobs",
      "offset": 41
    },
    {
      "val": "Apple",
      "offset": 52
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 574099187,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2147019739,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 924815050,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM Creating New Contacts Scenario",
  "description": "",
  "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"jerome\" and \"Miechal\" and \"CTS\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 11932256455,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 26271619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 372584780,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5815016301,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13809504,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_contacts()"
});
formatter.result({
  "duration": 2250668598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jerome",
      "offset": 29
    },
    {
      "val": "Miechal",
      "offset": 42
    },
    {
      "val": "CTS",
      "offset": 56
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 694975288,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 4529281252,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 792859333,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Creating New Contacts Scenario",
  "description": "",
  "id": "free-crm-new-contacts-feature;free-crm-creating-new-contacts-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on new contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Murali\" and \"dieu\" and \"Inautix\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 10593166488,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 28616808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 356326647,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5057103368,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 21055350,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_contacts()"
});
formatter.result({
  "duration": 3310536207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Murali",
      "offset": 29
    },
    {
      "val": "dieu",
      "offset": 42
    },
    {
      "val": "Inautix",
      "offset": 53
    }
  ],
  "location": "LoginStepDefinition.user_enters_contact_details(String,String,String)"
});
formatter.result({
  "duration": 583423310,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2302568155,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 857422226,
  "status": "passed"
});
});