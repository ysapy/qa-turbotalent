class loginPage {
    
    elements ={
        usernameInput : () => cy.get(".form-group").contains("Username:").parent().find("input"),
        passwordInput : () => cy.get(".form-group").contains("Password:").parent().find("input"),
        loginBtn : () => cy.get(".form-group").contains("button", "Login")
    }

    login(username, password){
        this.elements.usernameInput().should('be.visible').type(username);
        this.elements.passwordInput().should('be.visible').type(password);
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();