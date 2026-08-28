(function (global) {
  class School {
    constructor({ id, districtId, name, centreCode, status = 'active' }) {
      this.id = id;
      this.districtId = districtId;
      this.name = name;
      this.centreCode = centreCode;
      this.status = status;
    }
  }

  global.School = School;
})(window);
