(function (global) {
  class District {
    constructor({ id, regionId, name, code }) {
      this.id = id;
      this.regionId = regionId;
      this.name = name;
      this.code = code;
    }
  }

  global.District = District;
})(window);
