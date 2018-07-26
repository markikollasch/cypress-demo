# Cypress Demo

I present some of our learnings from working with [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

Mostly I will demonstrate the basic facilities using the provided examples.
However, I have written a custom command for filling in a labeled input.
Use `yarn http-server` to make accessible a page demonstrating it,
then `yarn cypress open` or `yarn cypress run` to run the test.
Check in `demo.spec.js` for usage and `commands.js` for the definition.

Some points I want to cover are:
- The runner UI
- Saving of videos even in headless mode
- The clock
- Custom commands
- Network stubbing
- Opinionated documentation
