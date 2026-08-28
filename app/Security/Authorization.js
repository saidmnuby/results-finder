(function (global) {
  class Authorization {
    static requireAdmin(sessionToken) {
      if (!sessionToken || sessionToken !== 'admin-session-token') {
        return {
          ok: false,
          status: 'unauthorized',
          message: 'Administrative access is required.'
        };
      }

      return { ok: true, status: 'authorized' };
    }
  }

  global.Authorization = Authorization;
})(window);
