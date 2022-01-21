import { v4 as uuidv4 } from 'uuid';
import { Base } from "./base.js";
import modele from '../src/templates/neurone1.js';
export { Neurone };

class Neurone extends Base {
  constructor(options = {}) {
    super(options);
    this.options = options;
    this._data = Object.assign({}, modele);
    this._data["ve:created"] = Date.now();
    this._data.id = uuidv4(); //console.log(this)
    // ...
  }

}