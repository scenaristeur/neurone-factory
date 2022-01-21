export { Base }

class Base {
  constructor(options = {}) {
    Object.assign(this, options);
    this.options = options
    console.log(this)
    // ...
  }
}
