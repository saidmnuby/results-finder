// this function is used to monitor the status of the application and its dependencies like the database. It returns an object with the status of the application and its dependencies.
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
