(function (global) {
  const target = global || globalThis;

  class AdminController {
    static getMonitoring(database) {
      return {
        ok: true,
        status: 'operational',
        sources: database.getSourceStatus(),
        counts: database.getMetadataCounts()
      };
    }
  }

  target.AdminController = AdminController;
})(globalThis);
