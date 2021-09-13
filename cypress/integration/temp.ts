import { CompileShallowModuleMetadata } from "@angular/compiler";

describe('the temperature converter', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-app-link-temp]').click();

    });
    it('should take us to the route', () => {
        cy.url().should('contain', 'temp');
    });
    describe('converting to fahrenheit', () => {

        it('can convert freezing', () => {
            cy.get('[data-temp-converter-value-input').type('0');
            cy.get('[data-temp-converter-convert-to-f-button').click();

            cy.get('[data-temp-converter-answer-span]').should('contain', '32');
        });

        it('can convert boiling', () => {
            cy.get('[data-temp-converter-value-input]').type('100');
            cy.get('[data-temp-converter-convert-to-f-button]').click();

            cy.get('[data-temp-converter-answer-span]').should('contain', '212');
        });
    });
});