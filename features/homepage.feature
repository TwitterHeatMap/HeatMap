Feature: See Home page

  @watch
  Scenario: I want to see home page
  Given I am viewing the page at "/"
  Then I can see the header item "hello world."
