import chai from 'chai';
let assert = chai.assert;

import { Factory } from '../src/index.js'
import neurone1 from '../src/templates/neurone1.js'


describe("test neurone-factory", async function(){
  this.timeout(5000)
  before(async function(){})
  beforeEach(async function(){})
  after(async function(){})
  afterEach(async function(){})

  it('factory', async function(){
    let factory = new Factory()
    console.log("factory ", factory)
  })

  it('import template', async function(){
    console.log("template of neurone1 ", neurone1)
    assert.typeOf(neurone1, 'object');
    assert.typeOf(neurone1.links, 'array');
  })


})
