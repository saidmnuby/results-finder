(function (global) {
  class Examination {
    constructor({ id, code, name, status = 'active' }) {
      this.id = id;
      this.code = code;
      this.name = name;
      this.status = status;
      this.createdAt = new Date().toISOString();
    }
  }

  global.Examination = Examination;
})(window);
