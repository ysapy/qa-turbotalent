class propertyCreation {
    elements ={
        propertyNameInput : () => cy.get(".addForm").find('input[placeholder="Title"]'),
        propertyDescriptionInput : () => cy.get(".addForm").find('input[placeholder="Description"]'),
        propertyRentValueInput : () => cy.get(".addForm").find('input[placeholder="Rent"]'),
        addPropertySubmit : () => cy.get(".addForm").contains("button", "Submit"),
        addPropertyCancel : () => cy.get(".addForm").contains("button", "Cancel"),
        successMsg : () => cy.get(".message-success").contains("Property added successfully!"),
        failedMsg : () => cy.get(".message-error").contains("Failed to add property.")
    }

    createNewProperty(name, ds, rent){
        this.elements.propertyNameInput().should('be.visible').type(name);
        this.elements.propertyDescriptionInput().should('be.visible').type(ds);
        this.elements.propertyRentValueInput().should('be.visible').type(rent);
        this.elements.addPropertySubmit().click();
    }

    successMsgVisible(){
        this.elements.successMsg().should("be.visible");
    }

    failureMsgVisible(){
        this.elements.failedMsg().should("be.visible");
    }

    completeAndCancelNewProperty(name, ds, rent){
        this.elements.propertyNameInput().should('be.visible').type(name);
        this.elements.propertyDescriptionInput().should('be.visible').type(ds);
        this.elements.propertyRentValueInput().should('be.visible').type(rent);
        this.elements.addPropertyCancel().click();
    }

    failedErrorVisible(){
        this.elements.failedMsg().should("be.visible");
    }
}

module.exports = new propertyCreation();