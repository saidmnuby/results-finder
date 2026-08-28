(function (global) {
  class RetrievalManager {
    constructor() {
      this.rateLimiter = new global.RateLimiter(20);
    }

    async retrieve(payload) {
      const request = global.RequestController.validate(payload);

      if (!this.rateLimiter.check(`${request.examination}:${request.year}`)) {
        throw new Error('Too many requests. Please try again later.');
      }

      const source = global.SourceResolver.resolve(request);

      if (source.demoAdapter !== 'CSEEFixtureAdapter') {
        throw new Error('The requested approved source is not available in this MVP build.');
      }

      const normalized = global.CSEEFixtureAdapter.retrieve(request);
      return global.ResultValidator.validate(normalized);
    }
  }

  global.RetrievalManager = RetrievalManager;
})(window);
