/// <reference types="cypress"/>

// funcionalidade
describe("Usuário", ()=> {

    // cenários
    it("Acessar a tela de Usuários > Em Uso", ()=> {

        // logar
        cy.visit('https://10.3.0.204/ncall/main.php')
        cy.get('#usuario').type('__mahayana.vitoria')
        cy.get('#senhaLogin').type('a')
        cy.get('#bt_senha').click()
        
        // acessar a tela de usuários em uso
        cy.get('#Usuários > .custom-tooltip > span').click()
        //clica no primeiro elemento da lista
        cy.get('.hasChildren').first().click()
        cy.get('.nivel-2 > .active > .nav > :nth-child(1) > a').click()

        // criar um usuário
        cy.get('[name="btnAddUsuario"]').click() // adicionar um usuário
        cy.get('#idTipoUsuario').select('Ramal') //escolhe usuário do tipo Ramal
        cy.get('#tipoUsuario > .modal-dialog > .modal-content > .modal-footer > .btn-default') // cancela
        cy.get('#idTipoUsuario').select('Ramal') //escolhe usuário do tipo Ramal
        cy.get('#tipoUsuario > .modal-dialog > .modal-content > .modal-footer > .btnConfirmar').click() // confirma

        
        
        // cy.get('#ID__CAMPO__FILTRO__Ramal', { timeout: 10000 }).should('be.visible')
        // cy.get('#ID__CAMPO__FILTRO__Ramal').type('8001')
        // cy.get('.top-10 > .col-md-12 > .btn-success').click()
        // cy.get('.right_col > :nth-child(3) > :nth-child(1) > :nth-child(1)').should('be.visible').and('contain.text', '8001')
        
    })
    
})