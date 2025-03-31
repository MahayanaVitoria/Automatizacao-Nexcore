/// <reference types="cypress"/>

// funcionalidade
describe("Usuário", () => {

    // cenários
    it("Usuários", () => {

        // logar
        cy.visit('https://10.3.0.204/ncall/main.php');
        cy.get('#usuario').type('mahayana.agente');
        cy.get('#senhaLogin').type('a');
        cy.get('#bt_senha').click();
        
        // Interceptar a nova guia antes do clique
        cy.window().then((win) => {
            cy.stub(win, 'open').as('novaGuia'); // Intercepta qualquer tentativa de abrir uma nova guia
        });

        // Clicar para abrir a nova guia
        cy.get('.box-links > :nth-child(2) > .lord-icon').click();

        // Aguardar a URL da nova guia ser capturada e redirecionar para ela
        cy.get('@novaGuia').should('be.called').then((stub) => {
            const novaUrl = stub.args[0][0]; // Captura a URL aberta na nova guia
            cy.visit(novaUrl); // Visita a nova URL na mesma guia do Cypress
        });

        // Agora você pode continuar a automação na nova página

    });

});
