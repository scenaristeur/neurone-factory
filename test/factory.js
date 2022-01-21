import chai from 'chai';
let assert = chai.assert;

import { Brain } from '../src/index.js'
import neurone1 from '../src/templates/neurone1.js'

let brain

describe("test neurone-factory", async function(){
  this.timeout(5000)
  before(async function(){})
  beforeEach(async function(){})
  after(async function(){})
  afterEach(async function(){})

  it('brain', async function(){
    brain = new Brain()
    console.log("brain ", brain)
  })

  it('import template', async function(){
  //  console.log("template of neurone1 ", neurone1)
    assert.typeOf(neurone1, 'object');
    // assert(neurone1["ve:type"] == 'node', "type is node");
    // assert.typeOf(neurone1["ve:links"], 'array');
  })

  it('brain create one neurone', async function(){
    let neurone = brain.createNeurone(/*{model: "neurone1"}*/)
    console.log("neurone ", neurone)
  })

  it('brain create second neurone', async function(){
    let neurone = brain.createNeurone(/*{model: "neurone1"}*/)
    console.log("neurone ", neurone)

  })


})
