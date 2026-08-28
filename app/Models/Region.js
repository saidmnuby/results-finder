(function (global) {
  class Region {
    constructor({ id, name, code }) {
      this.id = id;
      this.name = name;
      this.code = code;
    }
  }

  global.Region = Region;
})(window);
