(function (global) {
  const target = global || globalThis;

  class ResultValidator {
    static validate(result) {
      if (!result || typeof result !== 'object') {
        throw new Error('Retrieved result is invalid.');
      }

      const requiredFields = ['examination', 'year', 'indexNumber', 'candidateName', 'school', 'source'];
      const missing = requiredFields.filter((field) => !result[field]);

      if (missing.length > 0) {
        throw new Error('Result is incomplete or not trustworthy for display.');
      }

      return {
        ...result,
        status: 'validated'
      };
    }
  }

  target.ResultValidator = ResultValidator;
})(globalThis);
