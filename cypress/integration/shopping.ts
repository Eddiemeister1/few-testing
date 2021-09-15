describe('shopping!', () => {

    it('using some good data', () => {
        //cy.Visit("/")
        //use cypress to find the link, follow the link

        cy.intercept('GET', 'http://localhost:3000/shopping-items', { fixture: 'shopping-ok.json' })
        cy.visit('/shopping');

        cy.get('[data-shopping-list]').should('have.length', 3);
    });

    it('the api is down - now what?', () => {
        cy.intercept('GET', 'http://localhost:3000/shopping-items', {
            statusCode: 404
        })
        cy.visit('/shopping');
        //then your plan goes here..
        cy.get('[data-error]').should('have.text', 'The API Seems Like It Down. Bummer!');
    });
});