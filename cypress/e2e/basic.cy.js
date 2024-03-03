
describe('Cypress basic',()=>{

    it('should visit a page and assert title',()=>{

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        cy.title()
            .should('be.equal','Campo de Treinamento')
            .and('contain','ampo');

        
        
    });

    it('should find a element in page',()=>{

        cy.visit('https://wcaquino.me/cypress/componentes.html');
        
        cy.get('#buttonSimple').click().should('have.value','Obrigado!');


    });


    
});