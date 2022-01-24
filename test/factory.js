import chai from 'chai';
let assert = chai.assert;

import { Brain, Neurone, Graph } from '../src/index.js'
import neurone1 from '../src/templates/neurone1.js'

let brain

describe("neurone-factory", async function(){
  this.timeout(5000)
  before(async function(){})
  beforeEach(async function(){})
  after(async function(){})
  afterEach(async function(){})

  it('brain', async function(){
    brain = new Brain({"name": "A brain", boom: "tchak"})
    brain.debug()
    //  console.log("brain ", brain)
  })

  it('graph', async function(){
    let graph = new Graph({ "name": "The viz", bibop: true})
    graph.debug()
    //  console.log("graph", graph)
    //  console.log("template of neurone1 ", neurone1)
    //  assert.typeOf(neurone1, 'object');
    // assert(neurone1["type"] == 'node', "type is node");
    // assert.typeOf(neurone1["links"], 'array');
  })

  it('brain create one neurone', async function(){
    let neurone = new Neurone({blip: "blop"})
    neurone.debug()
    //  console.log("neurone one", neurone)
  })

  it('brain create second neurone', async function(){
    let neurone = new Neurone(
      {"name": "Name of the Neurone",
      "type" : "specialized-neurone",
      "privacy": "public"
    })
    neurone.debug()
    //  console.log("neurone two", neurone)

  })


})
