export class AdminController {
  static getMonitoring(database) {
    return {
      ok: true,
      status: 'operational',
      sources: database.getSourceStatus(),
      counts: database.getMetadataCounts()
    };
  }
}
