(function (global) {
  const target = global || globalThis;

  class RetrievalManager {
    constructor() {
      this.rateLimiter = new target.RateLimiter(20);
    }

    async retrieve(payload) {
      const request = target.RequestController.validate(payload);

      if (!this.rateLimiter.check(`${request.examination}:${request.year}`)) {
        throw new Error('Too many requests. Please try again later.');
      }

      const source = target.SourceResolver.resolve(request);

      if (source.demoAdapter !== 'CSEEFixtureAdapter') {
        throw new Error('The requested approved source is not available in this MVP build.');
      }

      const normalized = target.CSEEFixtureAdapter.retrieve(request);
      return target.ResultValidator.validate(normalized);
    }
  }

  target.RetrievalManager = RetrievalManager;
})(globalThis);
