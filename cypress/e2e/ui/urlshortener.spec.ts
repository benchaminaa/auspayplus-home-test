import { testData } from '../../fixtures/ui/data';

describe('URL Shortener', () => {
  it('short url should redirect to targer url', () => {
    cy.visit(testData.bitlyHomeUrlShort.shortCase1);
    cy.location().should((loc) => {
      expect(loc.href).to.eq(testData.bitlyHomeUrlShort.target);
    })
  })
})