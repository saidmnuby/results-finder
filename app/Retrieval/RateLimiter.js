(function (global) {
  const target = global || globalThis;

  class RateLimiter {
    constructor(limitPerMinute = 20) {
      this.limitPerMinute = limitPerMinute;
      this.window = new Map();
    }

    check(key = 'default') {
      const now = Date.now();
      const bucket = this.window.get(key) || [];
      const recent = bucket.filter((timestamp) => now - timestamp < 60000);

      if (recent.length >= this.limitPerMinute) {
        return false;
      }

      recent.push(now);
      this.window.set(key, recent);
      return true;
    }
  }

  target.RateLimiter = RateLimiter;
})(globalThis);
