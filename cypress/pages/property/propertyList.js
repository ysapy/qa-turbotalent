class propertyList {
    elements ={
        propertyName : () => cy.get(".dataInput h3"),
        propertyDescription : () => cy.get(".dataInput p"),
        propertyRentValue : () => cy.get(".dataInput p").should("contain", "Rent"),
        addPropertyBtn : () => cy.get(".header").contains("button", "Add Property")
    }

    propertyNameVisibleInList(name){
        this.elements.propertyName().contains(name)
    }
    
    propertyNameNotVisibleInList(name){
        this.elements.propertyName().should("not.contain", name)
    }

    propertyRentValueNotVisibleInList(rentValue){
        this.elements.propertyRentValue().should("not.contain", rentValue)
    }

    propertyDescriptionVisibleInList(ds){
        this.elements.propertyDescription().contains(ds)
    }

    propertyRentValueVisibleInList(rentValue){
        this.elements.propertyRentValue().contains(rentValue)
    }

    clickOnAddProperty(){
        this.elements.addPropertyBtn().click()
    }

    addPropertyVisible(){
        this.elements.addPropertyBtn().should("be.visible")
    }
}

module.exports = new propertyList();