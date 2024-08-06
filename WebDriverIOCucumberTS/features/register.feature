Feature: Form submission of testpages evilister website

  Scenario Outline: Test the basic form submission
    Given I am in basic html form page "https://testpages.eviltester.com/styled/basic-html-form-test.html"
    Then I validate page header "Basic HTML Form Example"
    When I enter userName <uname> and password <password>
    And I click the checkbox items <checkBox> and radio items <radio>
    And I select multiple select values <selectItem> and dropdown <Dropdown>
    And I click the submit button
    Then I validate the result page

    Examples:
      | uname      | password     | checkBox   | radio   | selectItem       |
      | EmmaWatson | Password@123 | Checkbox 2 | radio 1 | Selection Item 2 |
