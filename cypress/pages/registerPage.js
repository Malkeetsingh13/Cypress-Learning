//const cypress = require("cypress")

export class registerPage {

    weblocators={

        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        confirmPassword: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continue: '.btn.btn-primary',

}

openURL(){

cy.visit(Cypress.env('URL'))

}


enterFirstName(FName) {

        cy.get(this.weblocators.firstName).type(FName)

}

enterLastName(LName) {

        cy.get(this.weblocators.lastName).type(LName)
}

enterEmail(email) {

    cy.get(this.weblocators.email).type(email)
}

enterTelephone(phoneNo) {

    cy.get(this.weblocators.telephone).type(phoneNo)
}

enterPassword(Password) {

    cy.get(this.weblocators.password).type(Password)
    cy.get(this.weblocators.confirmPassword).type(Password)
}

selectCheckbox() {

    cy.get(this.weblocators.policyCheckbox).click()
}

clickonContinue() {

    cy.get(this.weblocators.continue).click()
}




}