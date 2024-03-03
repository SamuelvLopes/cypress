const { before } = require("cypress/types/lodash");

describe('work with basic elements',()=>{
   
    beforeEach(()=>{
      //  cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.reload();
    });
    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html');
    });
    it('Text',()=>{
        //cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('body').should('contain','Cuidado');
        cy.get('span').should('contain','Cuidado');
        cy.get('.facilAchar').should('contain','Cuidado');
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...');
    });

    it('Links',()=>{

        //cy.visit('https://wcaquino.me/cypress/componentes.html');
        cy.get('[href="#"]').click();
        cy.get('#resultado').should('have.text','Voltou!');

        cy.reload();
        cy.get('#resultado').should('have.text','Status: Nao cadastrado');
    });
});