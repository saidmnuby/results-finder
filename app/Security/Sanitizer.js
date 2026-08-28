(function (global) {
  class Sanitizer {
    static escapeHtml(value) {
      return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    static normalizeInput(value) {
      return String(value || '').trim();
    }
  }

  global.Sanitizer = Sanitizer;
})(window);
