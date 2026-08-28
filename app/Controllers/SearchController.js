//This function is used to handle search operations for index numbers. It validates the input index number and then uses the SearchService to perform the search based on the provided examination, year, and index number. It returns the search results or an error message if the validation fails.
(function (global) {
  const target = global || globalThis;

  class SearchController {
    static async handleIndexSearch(payload) {
      const validation = target.InputValidator.validateIndexNumber(payload?.indexNumber);

      if (!validation.valid) {
        return {
          ok: false,
          status: 'validation_error',
          message: validation.message
        };
      }

      return target.SearchService.searchByIndex({
        examination: payload?.examination || 'CSEE',
        year: payload?.year || '2025',
        indexNumber: validation.value
      });
    }
  }

  target.SearchController = SearchController;
})(globalThis);
