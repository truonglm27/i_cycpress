Feature: Login
    Scenario: Verify Login
        Given I am in login page
        When Input passcode, username, and password
        # When I enter "$3cur3T!3r" in passcode field
        # And I enter "thtch" in username field
        # And I enter "t1ger1" in password field
        And I click on Login button
        And I click on My library button
        # And I choose Grade 3 BRS 
        Then I should be logged in and redirected to dashboard page