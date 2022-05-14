const productModel = require('../../../models/products');
const productsService = require('../../../services/products');
const { expect } = require('chai');

const sinon = require('sinon');

describe('Chamada na camada Service no Create', () => {
    describe("quando é inserido com sucesso", async () => {
        const payloadProduct =     {
            name: 'Produto',
            quantity: 10
          }
      ;
    
        beforeEach(() => {
          const ID_EXAMPLE = 1;
    
          sinon.stub(productModel, 'createProduct').resolves({ id: ID_EXAMPLE });
        });
    
        afterEach(() => {
          productModel.createProduct.restore();
        });
    
        it("retorna um objeto", async () => {
          const response = await productsService.registerProduct(payloadProduct);
    
          expect(response).to.be.a("object");
        });
    
        it('tal objeto possui o "id" do novo produto inserido', async () => {
          const response = await productsService.registerProduct(payloadProduct);
    
          expect(response).to.have.a.property("id");
        });
      });
});