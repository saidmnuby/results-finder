(function (global) {
  class SourceConfig {
    constructor(data = {}) {
      this.id = data.id || null;
      this.examinationId = data.examinationId || null;
      this.yearId = data.yearId || null;
      this.sourceType = data.sourceType || 'public_html';
      this.sourceIdentifier = data.sourceIdentifier || '';
      this.parserVersion = data.parserVersion || 'v1.0.0';
      this.status = data.status || 'active';
      this.lastVerifiedAt = data.lastVerifiedAt || null;
      this.createdAt = data.createdAt || new Date().toISOString();
    }
  }

  global.SourceConfig = SourceConfig;
})(window);
