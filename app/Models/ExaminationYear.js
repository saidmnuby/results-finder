(function (global) {
  class ExaminationYear {
    constructor({ id, examinationId, year, status = 'active' }) {
      this.id = id;
      this.examinationId = examinationId;
      this.year = year;
      this.status = status;
      this.createdAt = new Date().toISOString();
    }
  }

  global.ExaminationYear = ExaminationYear;
})(window);
