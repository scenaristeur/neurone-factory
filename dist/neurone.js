import { Base } from "./base.js";
export { Neurone };

class Neurone extends Base {
  constructor(options = {}) {
    super(options);
    options['ve:type'] == undefined ? this['ve:type'] = "neurone" : ""; // this.options = options
    // this._data = Object.assign({}, modele)
    // this["ve:created"] = Date.now()
    // this.id = uuidv4()
    //console.log(this)
    // ...
  }

}