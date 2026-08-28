(function (global) {
  class InputValidator {
    static normalizeIndex(value) {
      return String(value || '').trim();
    }

    static validateIndexNumber(value) {
      const normalized = this.normalizeIndex(value);

      if (!normalized) {
        return { valid: false, message: 'Index number is required.' };
      }

      const patterns = [
        /^[A-Z]{1,5}\d{4,}[-/]\d{3,}$/i,
        /^[A-Z]{1,5}\d{3,}[-/]\d{3,}$/i,
        /^[A-Z]{1,5}\d{3,}[-/]\d{3,}[-/]\d{2,}$/i
      ];

      const isValid = patterns.some((pattern) => pattern.test(normalized));

      if (!isValid) {
        return {
          valid: false,
          message: 'Invalid index number format. Example: S1673/3472 or PS170604-001.'
        };
      }

      return { valid: true, value: normalized };
    }

    static sanitizeText(value) {
      return String(value || '').replace(/[<>]/g, '').trim();
    }
  }

  global.InputValidator = InputValidator;
})(window);
