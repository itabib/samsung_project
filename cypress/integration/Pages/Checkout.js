import {CheckoutElements} from "../Selectors/CheckoutSelectors";
import {Data} from "../Data/data";

export class CheckoutPage {

    clickContinueAsGuestBtn() {
        cy.wait(2500);
        cy.get(CheckoutElements.continueAsGuest).click();
    }
    
    focusOnFileds(index){
     cy.get(CheckoutElements.shippingAddressInputFields).eq(index).focus();
    }
    
    focusOnAllFileds(){
        for (let index = 0; index < 11; index++) {
            if (index== 5 || index== 6) continue
            this.focusOnFileds(index);
          }
    }
    verifyFirstNameErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(0).should('contain', Data.ShippingAddressErrorMsg);
    }

    verifyLastNameErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(1).should('contain', Data.ShippingAddressErrorMsg);
    }

    verifyAddress1ErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(2).should('contain', Data.ShippingAddressErrorMsg);
    }    

    verifyPincodeErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(4).should('contain', Data.ShippingAddressErrorMsg);
    }  
    
    verifyEmailErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(8).should('contain', Data.ShippingAddressErrorMsg);
    }  

    verifyMobileNumberErrorMsg(){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(9).should('contain', Data.ShippingAddressErrorMsg);
    }  

    verifyShippingAddressFormRequiredFeildsErrorMsgs(){
        this.verifyFirstNameErrorMsg();
        this.verifyLastNameErrorMsg();
        this.verifyAddress1ErrorMsg();
        this.verifyPincodeErrorMsg();
        this.verifyEmailErrorMsg();
        this.verifyMobileNumberErrorMsg();
    }
    inputFirstName(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(0).type(Data.FirstName)
    }

    inputLastName(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(1).type(Data.LastName)
    }

    inputAddress1(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(2).type(Data.AddressLine1)
    }

    inputPincode(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(4).type(Data.Pincode)
    }

    inputEmail(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(8).type(Data.Email)
    }

    inputMobileNumber(){
        cy.get(CheckoutElements.shippingAddressInputFields).eq(9).type(Data.MobileNumber)
    }

    fillAllRequiredFields(){
        this.inputFirstName();
        this.inputLastName();
        this.inputAddress1();
        this.inputPincode();
        this.inputEmail();
        this.inputMobileNumber();
    }

    verifyErrorMsgIsEmpty(index){
        cy.get(CheckoutElements.shippingAddressFormErrorMsg).eq(index)
          .should(($el) => {
               expect($el.text().trim()).equal('');
           });
    }

    verifyAllErrorMsgsDisappeared(){
        for (let index = 0; index < 11; index++) {
            if (index== 5 || index== 6) continue
            this.verifyErrorMsgIsEmpty(index);
          }
    }
}
