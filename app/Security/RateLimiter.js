(function (global) {
  class RateLimiter {
    constructor({ limit = 20, windowMs = 60000 } = {}) {
      this.limit = limit;
      this.windowMs = windowMs;
      this.bucket = new Map();
    }

    check(key) {
      const now = Date.now();
      const current = this.bucket.get(key) || [];
      const validEntries = current.filter((time) => now - time < this.windowMs);

      if (validEntries.length >= this.limit) {
        return false;
      }

      validEntries.push(now);
      this.bucket.set(key, validEntries);
      return true;
    }
  }

  global.RateLimiter = RateLimiter;
})(window);
