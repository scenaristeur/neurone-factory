import { v4 as uuidv4 } from 'uuid';
import modele from '../src/templates/neurone1.js'


export { Base }

class Base {
  constructor(options = {}) {
    // this['ve:type'] = "base"
    // loading modele
    Object.assign(this, modele);
    // update basic props
    this.id = uuidv4()
    this['ve:type'] = "base"
    this["ve:created"] = Date.now()
    // updating with options
    Object.assign(this, options);
    // this.options = options

    // ...
  }
  debug(){
      console.log(this)
  }
}
