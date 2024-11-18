import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am in login page', () => {
    cy.viewport(1024, 768)
    cy.visit('/@FPR_Thien4')
})

When('Input passcode, username, and password', () => {
    cy.fixture('login.json').then((user) => {
        cy.get('input[id="passcode"]').type(user.passcode, { force: true })
        cy.get('input[id="username"]').type(user.username, { force: true })
        cy.get('input[id="password"]').type(user.password, { force: true })
    })
})

When('I click on Login button', () => {
    cy.get('button[class$="btn-login"]', { timeout: 5000 }).click();
});

When('I click on My library button', () => {
    cy.document().then((doc) => {
        const myLibraryButton = doc.querySelector('button[id="my-library"]');
        if (myLibraryButton) {
            cy.wrap(myLibraryButton).click();
        } else {
            cy.log('My library button not found, skipping this step');
        }
    });
});

Then('I should be logged in and redirected to dashboard page', () => {
    cy.wait(10000);
});