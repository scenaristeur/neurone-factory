//console.log("Neurone Factory")
import { Base } from "./base.js"
import { Neurone } from "./neurone.js"



export { Factory }
class Factory extends Base {
  constructor() {
    super()
    console.log('factice factory hihihi')
  }

  create(options = {}){
    console.log("create", options)
    let neurone = new Neurone()
    return neurone
  }
}
