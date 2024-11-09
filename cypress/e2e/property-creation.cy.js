/// <reference types="cypress" />
import loginPage from '../pages/login/loginPage'
import propertyList from '../pages/property/propertyList'
import propertyCreation from '../pages/property/propertyCreation'

describe('Validate Properties creation', () => {

    beforeEach(() =>{
        cy.visit('https://qa-app.dev.turbotenant.com/')
        loginPage.login('ysa-ortiz', 'ysapy');
    })

    /*
    * TC ID: 5
    */
    it('Validate that a new property can be created', () => {
        propertyList.addPropertyVisible();
        propertyList.clickOnAddProperty();
        propertyCreation.createNewProperty('New property', 'For testing purposes', 10000);
        propertyCreation.successMsgVisible();
        propertyList.propertyNameVisibleInList('New property');
        propertyList.propertyDescriptionVisibleInList('For testing purposes');
        propertyList.propertyRentValueVisibleInList('10000');
    })

    /*
    * TC ID: 6
    */
    it('Validate that Title is required to create a property', () => {
        propertyList.addPropertyVisible();
        propertyList.clickOnAddProperty();
        propertyCreation.createNewProperty(' ', 'For testing purposes', 10000);
        propertyCreation.failureMsgVisible();
        propertyList.propertyNameNotVisibleInList(' ');
    })

    /*
    * TC ID: 8
    */
    it('Validate that Rent doesnt accept non numeric values', () => {
        propertyList.addPropertyVisible();
        propertyList.clickOnAddProperty();
        propertyCreation.createNewProperty('Empty rent', 'For testing purposes', 'String value');
        propertyCreation.failureMsgVisible();
        propertyList.propertyRentValueNotVisibleInList('String value');
    })


})