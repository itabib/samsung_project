import {CartElements} from "../Selectors/CartSelectors";

export class CartPage {

    clickPayNowBtn() {
        cy.get(CartElements.payNowBtn).click();
    }
    
}
