Feature: Assets

   Scenario: User displays the list of assets
      Given the user is on the home page
      Then a list of all assets is displayed

   Scenario: User click on assets
      Given the user is on the home page
      Then it clicks on an assets
      Then it goes in the page of the asset e7833d96
      Then it see the string FORKLIFT