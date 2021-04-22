const url = 'https://store.luminskin.com/products'
const selectProduct = ':nth-child(3) > .chakra-stack > .chakra-button'


class luminskinPage {

    static homePage(){

        cy.visit(url)
}

    static Product(){

 //Add product to cart       
cy.get(selectProduct).click({force: true})    
cy.get('.variant-form > input').type('Aniekan')
cy.get('select[name="Age Bracket"]').select('25-34')
cy.get('select[name="Skin Type"]').select('Dry')
cy.get('.checkout-btn').click()
cy.get('#cart-form > .cart-footer2 > .react-cart-buttons > .checkout-btn').click()


//Enter shipping information(S)
cy.wait(5000)
cy.get('.css-ay34j9')
cy.get('.css-8atqhb')
cy.get('#field-3').type('anixumoh7@gmail.com')
cy.get('#field-4').type('Aniekan')
cy.get('#field-5').type('Umoh')
cy.get('#field-6').type('19523 Riverwalk Drive, Porter, TX 77365')
cy.get('#field-7').type('4')
cy.get('#field-8').type('Banff')
cy.get('select[name="country"]').select('CA')
cy.get('select[name="province"]').select('AB')
cy.get('#field-10').type('T0L0C0')
cy.get('select[name="phone_country_code"]').select('United States (+1)')
cy.get('#field-12').type('02334445')
//cy.get('.css-1hqwcr3 > .chakra-button').click()
cy.get('.chakra-button > .chakra-text').click()
cy.get('.chakra-modal__footer > .chakra-button').click()
cy.get('.css-1be9gdt > .chakra-button').click()

//Fill in card details
cy.get('.css-8atqhb')
cy.get('.__PrivateStripeElement > iframe')
  .iframe()
  .find('input[name="cardnumber"]')
   .type('4848420036617932', {force:true})

   //cy.get('#field-626').type('Aniekan Umoh')
  

    }

}


export default luminskinPage 