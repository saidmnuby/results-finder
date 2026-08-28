(function (global) {
  class HttpClient {
    static getAllowedHosts() {
      return ['necta.go.tz', 'www.necta.go.tz'];
    }

    static validateUrl(url) {
      try {
        const parsed = new URL(url);
        const host = parsed.hostname.toLowerCase();
        const isAllowed = this.getAllowedHosts().includes(host) || host.endsWith('.necta.go.tz');

        if (!isAllowed) {
          throw new Error('Only approved public result sources are allowed.');
        }

        return parsed;
      } catch (error) {
        throw new Error('Invalid or disallowed result source URL.');
      }
    }

    static async get(url, options = {}) {
      const parsedUrl = this.validateUrl(url);
      const timeoutMs = options.timeoutMs || 8000;

      return {
        ok: true,
        url: parsedUrl.toString(),
        status: 200,
        statusText: 'OK',
        headers: { 'content-type': 'text/html; charset=utf-8' },
        text: '<html><body>Approved source response placeholder</body></html>',
        timeoutMs
      };
    }
  }

  global.HttpClient = HttpClient;
})(window);
