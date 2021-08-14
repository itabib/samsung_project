import {HomePageElements} from "../Selectors/HomePageSelectors";

export class homePage {

    selectGalaxyS21Product() {
        cy.contains(HomePageElements.GalaxyS21Product).click()
    }
}
