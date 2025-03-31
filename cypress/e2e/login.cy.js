/// <reference types="cypress"/>

// funcionalidade
describe("Login", ()=> {

    // cenários
    it("Login válido", ()=> {

        //DADO (entrada)
        // abrir a aplicação
        cy.visit('https://10.3.0.204/ncall/main.php')

        // preenche e-mail e senha
        cy.get('#usuario').type('__mahayana.vitoria')
        cy.get('#senhaLogin').type('a')

        //QUANDO (processamento)
        // clica em entrar
        cy.get('#bt_senha').click()

        //ENTAO (validação)
        // valida mensagem
        cy.get('.ui-pnotify-title').should('have.text', 'Sucesso!')
        cy.get('.alert').should('be.visible')
    })

    // cenários
    it("E-mail e senha vazios", ()=> {
        cy.visit('https://10.3.0.204/ncall/main.php')
        cy.get('#bt_senha').click()
        cy.get('.ui-pnotify > .alert').should('be.visible')
        cy.get('.alert')
    })

    it("E-mail inválido", ()=> {
        cy.visit('https://10.3.0.204/ncall/main.php')
        cy.get('#usuario').type('a')
        cy.get('#senhaLogin').type('a')
        cy.get('#bt_senha').click()
        cy.get('.ui-pnotify > .alert').should('be.visible')
        cy.get('.alert')
        cy.get('.ui-pnotify-title').should('have.text', 'Informação do Sistema')
        
    })
    
})