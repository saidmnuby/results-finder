(function (global) {
  const target = global || globalThis;

  class ResultController {
    static async getResultByIndex(payload) {
      return target.SearchService.searchByIndex(payload);
    }

    static async getSchoolResult(payload) {
      return target.SearchService.searchBySchool(payload);
    }
  }

  target.ResultController = ResultController;
})(globalThis);
