import { testData } from '../../fixtures/api/data';

describe('catfacts API', () => {
  context("GET /facts", () => {
    it('validates GET response of /facts api path for status code, current_page and data', () => {
      cy.request("GET", `${testData.catFacts}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.current_page).to.eq(1);
        expect(response.body.data).length.to.be.greaterThan(0);
      })
    })
  })
})