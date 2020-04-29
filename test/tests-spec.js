const chai = require('chai')
const chaiHttp = require('chai-http')
const {root} = require('../config')

const {expect} = chai
chai.use(chaiHttp)

describe('PokeCards Tests', () => {

  it('List pokemons', (done) => {
    chai.request(root)
      .get('/api/list')
      .end((err, res) => {
        //
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        done()
      })
  })
  it('Catch Bulbasaur', (done) => {
    chai.request(root)
      .get('/api/info/1')
      .end((err, res) => {
        //
        expect(res.status).to.be.eq(200)
        expect(res.body).to.be.a('object')
        expect(res.body.name).to.be.eq('bulbasaur')
        done()
      })
  })

})
