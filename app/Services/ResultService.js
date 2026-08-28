(function (global) {
  class ResultService {
    static async getSearchResult(payload) {
      if (!payload || typeof payload !== 'object') {
        return {
          ok: false,
          status: 'validation_error',
          message: 'Invalid search payload.'
        };
      }

      const sanitized = {
        examination: String(payload.examination || '').trim().toUpperCase(),
        year: String(payload.year || '').trim(),
        indexNumber: String(payload.indexNumber || '').trim()
      };

      if (!sanitized.examination || !sanitized.year || !sanitized.indexNumber) {
        return {
          ok: false,
          status: 'validation_error',
          message: 'Examination, year, and index number are required.'
        };
      }

      return global.SearchService.searchByIndex(sanitized);
    }

    static async getSchoolResult(payload) {
      const sanitized = {
        examination: String(payload?.examination || '').trim().toUpperCase(),
        year: String(payload?.year || '').trim(),
        region: String(payload?.region || '').trim(),
        district: String(payload?.district || '').trim(),
        school: String(payload?.school || '').trim()
      };

      return global.SearchService.searchBySchool(sanitized);
    }
  }

  global.ResultService = ResultService;
})(window);
