import {Setup} from "../Utils/setup";
import {homePage} from "../Pages/HomePage";
import {ProductPage} from "../Pages/PDP";
import {CartPage} from "../Pages/Cart";
import {CheckoutPage} from "../Pages/Checkout";

const setup = new Setup();
const HP = new homePage();
const PDP = new ProductPage();
const Cart = new CartPage();
const Checkout = new CheckoutPage();

describe('Verify negative cases for Checkout', function() {
   
    before(function() {
      setup.navigateToUrl();
    })
 
     beforeEach( function() {
       // Cypress starts out with a blank slate for each test
       // so we must tell it to visit our website with the `cy.visit()` command.
       // Since we want to visit the same URL at the start of all our tests,
       // we include it in our beforeEach function so that it runs before each test
     //   cy.visit('https://example.cypress.io/todo')
     })
 
 it('Verify that error messages are working as expected for the shipping address form', function() {
  HP.selectGalaxyS21Product();
  PDP.selectFirstDeviceType();
  PDP.selectColour();
  PDP.selectStorage();
  PDP.clickContinueBtn();
  PDP.clickContinueBtnAddonPage();
  Cart.clickPayNowBtn();
  Checkout.clickContinueAsGuestBtn();
  Checkout.focusOnAllFileds();
  Checkout.verifyShippingAddressFormRequiredFeildsErrorMsgs();
  Checkout.fillAllRequiredFields();
  Checkout.verifyAllErrorMsgsDisappeared();
 })
 
 })