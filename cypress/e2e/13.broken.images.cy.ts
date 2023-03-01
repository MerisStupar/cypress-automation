let image:HTMLImageElement;

describe('Broken images', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/broken`, {timeout: 20000});
    });

    it('Valid non-broken image', () => {
        cy.get('div > img[src="/images/Toolsqa.jpg"]')
      .should("be.visible").then(($img) => {
          image =$img[0] as unknown as HTMLImageElement;
          expect(image.naturalWidth).to.be.greaterThan(0);
          cy.log('This is the image yielded', $img);
        });
    });

    it('Broken image assertion', () => {
        cy.get(`div > img[src="/images/Toolsqa_1.jpg"]`)
        .should('be.visible').then(($img) => {
            expect(image.naturalWidth).to.be.greaterThan(0);
                 cy.log('This is the image yielded', $img);
          });
    });
});