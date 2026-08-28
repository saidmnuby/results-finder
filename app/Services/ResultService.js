(function (global) {
  const target = global || globalThis;

  class ResultService {
    static async getSearchResult(payload) {
      try {
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

        return target.SearchService.searchByIndex(sanitized);
      } catch (error) {
        console.error('[ResultService.getSearchResult]', error.message || error);
        return {
          ok: false,
          status: 'request_error',
          message: error.message || 'An error occurred during search.'
        };
      }
    }

    static async getSchoolResult(payload) {
      const sanitized = {
        examination: String(payload?.examination || '').trim().toUpperCase(),
        year: String(payload?.year || '').trim(),
        region: String(payload?.region || '').trim(),
        district: String(payload?.district || '').trim(),
        school: String(payload?.school || '').trim()
      };

      return target.SearchService.searchBySchool(sanitized);
    }
  }

  target.ResultService = ResultService;
})(globalThis);
