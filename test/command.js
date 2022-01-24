import { Command } from '../src/index.js'

describe("command", async function(){

  this.timeout(5000)
  before(async function(){})
  beforeEach(async function(){})
  after(async function(){})
  afterEach(async function(){})

  it('command init', async function(){
    let command = new Command({inputValue: "Dav a man,"})
    command.debug()
    //  console.log("graph", graph)
    //  console.log("template of neurone1 ", neurone1)
    //  assert.typeOf(neurone1, 'object');
    // assert(neurone1["ve:type"] == 'node', "type is node");
    // assert.typeOf(neurone1["ve:links"], 'array');
  })
})
