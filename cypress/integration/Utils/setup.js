import {Data} from "../Data/data";

export class Setup {

    navigateToUrl() {
        cy.visit(Data.url);
    }
    
}