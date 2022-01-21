import { v4 as uuidv4 } from 'uuid';
import { Base } from "./base.js"
import modele from '../src/templates/neurone1.js'

export { Neurone }

class Neurone extends Base {
  constructor(options = {}) {
    super(options)
    Object.assign(this, modele);
    this.options = options

    // this._data = Object.assign({}, modele)
    this["ve:created"] = Date.now()
    this.id = uuidv4()
    //console.log(this)
    // ...
  }
}
