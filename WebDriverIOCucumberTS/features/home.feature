Feature: The Internet Website homepage

  Scenario Outline: As a user, I can lopen the internet website
    Given I open the website and load the url <homepageurl>
    Then I should see a header with text <headertext>

    Examples:
      | homepageurl                         | headertext              |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
