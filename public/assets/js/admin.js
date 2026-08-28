(function () {
  const statusBox = document.getElementById('admin-status');
  const sourceList = document.getElementById('source-list');

  function renderSources(sourceData) {
    sourceList.innerHTML = sourceData.map(function (source) {
      return '<div class="result-card"><strong>' + window.Sanitizer.escapeHtml(source.name) + '</strong><span>' + window.Sanitizer.escapeHtml(source.status) + '</span><small>' + window.Sanitizer.escapeHtml(source.lastVerifiedAt) + '</small></div>';
    }).join('');
  }

  function renderDashboard() {
    const dashboard = window.AdminService.getDashboardData();
    statusBox.className = 'status-box visible success';
    statusBox.textContent = dashboard.status + ' — ' + dashboard.requestStats.successfulSearches + ' successful searches recorded.';
    renderSources(dashboard.sourceStatus);
  }

  renderDashboard();
})();
