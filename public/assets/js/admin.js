(function () {
  const statusBox = document.getElementById('admin-status');
  const sourceList = document.getElementById('source-list');
  const adminForm = document.getElementById('admin-form');

  function renderSources(sourceData) {
    sourceList.innerHTML = sourceData.map(function (source) {
      return '<div class="result-card"><strong>' + window.Sanitizer.escapeHtml(source.name) + '</strong><span>' + window.Sanitizer.escapeHtml(source.status) + '</span><small>' + window.Sanitizer.escapeHtml(source.lastVerifiedAt) + '</small></div>';
    }).join('');
  }

  async function renderDashboard(token) {
    const response = await fetch('/admin/monitoring', {
      headers: { authorization: 'Bearer ' + token }
    });

    const dashboard = await response.json();
    if (!response.ok || !dashboard.ok) {
      throw new Error(dashboard.message || 'Monitoring data is unavailable.');
    }

    statusBox.className = 'status-box visible success';
    statusBox.textContent = dashboard.status + ' — ' + dashboard.counts.schools + ' schools configured.';
    renderSources(dashboard.sources);
  }

  adminForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const token = document.getElementById('admin-token').value;
    renderDashboard(token).catch(function (error) {
      statusBox.className = 'status-box visible error';
      statusBox.textContent = error.message;
      sourceList.innerHTML = '';
    });
  });
})();
