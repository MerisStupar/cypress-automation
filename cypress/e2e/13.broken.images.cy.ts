let image:HTMLImageElement;

describe.skip('Broken images', () => {
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

describe('Broken images in the list - .first()', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("theInternetHeroku")}/broken_images`, {timeout: 20000});
    });

    it('Broken Image Detected - first image in the list', () => {
        cy.get(`div.example >img`)
        .first()
        .should('be.visible')
        .then(($img)=>{
            image =$img[0] as unknown as HTMLImageElement;
            expect(image.naturalWidth).to.be.eq(0);
            cy.log(`Image yielded info`, $img);
        });
    });


    it('Valid Image Detected - .last()', () => {
        cy.get(`div.example >img`)
        .last()
        .should('be.visible')
        .then(($img)=>{
            image =$img[0] as unknown as HTMLImageElement;
            expect(image.naturalWidth).to.be.greaterThan(0);
            cy.log(`Image yielded info`, $img);
        });
    });

    it('Valid Image Detected - with if condition', () => {
        cy.get(`div.example >img`).each(($img)=>{

        const brokenImagesNum = 0;
        image=$img[0] as unknown as HTMLImageElement;

            if(image.naturalHeight > 0){
               cy.log(`I've found the valid image in the list`, image, $img)
            }else{
                cy.log(`There is ${brokenImagesNum} images with broken image`, image);
            }
      /*       cy.log(`Number of the images are: `, $img); */
        });
    });

    it.only('Valid Image Detected & Broken image - with counter ', () => {

        let brokenImages=0; // Initialize counter for broken images

        cy.get(`div.example >img`).each(($img)=>{

        image=$img[0] as unknown as HTMLImageElement;

            if(image.naturalHeight > 0){
               cy.log(`I've found the valid image in the list`, image);
            }
            else if(image.naturalHeight === 0){
            cy.log(`Found the broken image in the list`, image);
            cy.wrap($img)
            .should('have.attr', 'src').then((src)=>{
                cy.log(`Image source with broken image: ${src}`);
            });
            brokenImages++;
            }
        }).then(()=>{
            cy.log(`Total number of broken images is: ${brokenImages}`);
        });
        
    });
});