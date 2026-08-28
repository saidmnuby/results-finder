(function (global) {
  const target = global || globalThis;

  class RequestController {
    static validate(payload) {
      const examination = String(payload?.examination || '').trim().toUpperCase();
      const year = String(payload?.year || '').trim();
      const indexNumber = String(payload?.indexNumber || '').trim();

      if (!examination || !year || !indexNumber) {
        throw new Error('Examination, year, and index number are required.');
      }

      if (!['CSEE', 'ACSEE', 'PSLE'].includes(examination)) {
        throw new Error('Unsupported examination requested.');
      }

      if (!/^\d{4}$/.test(year)) {
        throw new Error('Invalid year format.');
      }

      return {
        examination,
        year,
        indexNumber,
        searchType: indexNumber ? 'index' : 'school'
      };
    }
  }

  target.RequestController = RequestController;
})(globalThis);
