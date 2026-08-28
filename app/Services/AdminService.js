(function (global) {
  class AdminService {
    static getDashboardData() {
      return {
        ok: true,
        status: 'operational',
        sourceStatus: [
          { name: 'CSEE 2025', status: 'active', lastVerifiedAt: '2026-08-28T00:00:00Z' },
          { name: 'PSLE 2025', status: 'active', lastVerifiedAt: '2026-08-28T00:00:00Z' }
        ],
        requestStats: {
          totalSearches: 128,
          successfulSearches: 104,
          failedSearches: 9,
          rateLimitedRequests: 3
        },
        errors: [
          { type: 'timeout', count: 2 },
          { type: 'invalid_index', count: 4 }
        ]
      };
    }

    static getSourceStatus() {
      return {
        ok: true,
        data: this.getDashboardData().sourceStatus
      };
    }

    static logEvent(eventType, payload) {
      return {
        ok: true,
        eventType,
        recordedAt: new Date().toISOString(),
        payload: {
          type: eventType,
          details: payload ? String(payload).slice(0, 200) : 'system event'
        }
      };
    }
  }

  global.AdminService = AdminService;
})(window);
