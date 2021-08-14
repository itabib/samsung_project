import {PDPElements} from "../Selectors/PDPSelectors";

export class ProductPage {

    selectFirstDeviceType() {
        cy.get(PDPElements.allTypesOfDevices).eq(0).click();
    }

    selectConnectivity() {
        cy.get(PDPElements.connectivity).eq(0).click();
    }

    selectColour() {
        cy.get(PDPElements.colour).eq(0).click();
        cy.wait(3000);
    }

    selectStorage() {
        cy.get(PDPElements.storage).eq(1).click();
    }

    clickContinueBtn() {
        cy.wait(2000);
        cy.get(PDPElements.continueBtn).click();
    }
    clickContinueBtnAddonPage() {
        cy.wait(2000);
        cy.get(PDPElements.continueBtnAddonPage).click();
    }
    
}
