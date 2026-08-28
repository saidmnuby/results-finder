(function () {
  const statusBox = document.getElementById('status-box');
  const resultBox = document.getElementById('result-box');
  const regionSelect = document.getElementById('region-select');
  const districtSelect = document.getElementById('district-select');
  const schoolSelect = document.getElementById('school-select');

  function showStatus(type, message) {
    statusBox.className = 'status-box visible ' + type;
    statusBox.textContent = message;
  }

  function renderResult(data) {
    const cards = (data.subjectResults || []).map(function (item) {
      return '<div class="result-card"><strong>' + window.Sanitizer.escapeHtml(item.subject) + '</strong><span>' + window.Sanitizer.escapeHtml(item.grade) + '</span></div>';
    }).join('');

    resultBox.innerHTML = '<h3>Result Details</h3>' +
      '<div class="result-grid">' +
      '<div class="result-card"><strong>Candidate</strong><span>' + window.Sanitizer.escapeHtml(data.candidateName) + '</span></div>' +
      '<div class="result-card"><strong>Index Number</strong><span>' + window.Sanitizer.escapeHtml(data.indexNumber) + '</span></div>' +
      '<div class="result-card"><strong>School</strong><span>' + window.Sanitizer.escapeHtml(data.school) + '</span></div>' +
      '<div class="result-card"><strong>Examination</strong><span>' + window.Sanitizer.escapeHtml(data.examination) + '</span></div>' +
      '<div class="result-card"><strong>Year</strong><span>' + window.Sanitizer.escapeHtml(data.year) + '</span></div>' +
      '<div class="result-card"><strong>Division</strong><span>' + window.Sanitizer.escapeHtml(data.division) + '</span></div>' +
      '<div class="result-card"><strong>Source</strong><span>' + window.Sanitizer.escapeHtml(data.source) + '</span></div>' +
      '<div class="result-card"><strong>Status</strong><span>' + window.Sanitizer.escapeHtml(data.status) + '</span></div>' +
      '</div>' +
      '<h3>Subject Performance</h3>' +
      '<div class="result-grid">' + cards + '</div>';
  }

  function clearResult() {
    resultBox.innerHTML = '';
  }

  async function requestRoute(method, path, payload) {
    const response = await fetch(path, {
      method,
      headers: { 'content-type': 'application/json' },
      body: method === 'GET' ? undefined : JSON.stringify(payload || {})
    });

    if (!response.ok) {
      throw new Error('The application could not process this request.');
    }

    return response.json();
  }

  async function handleIndexSearch(event) {
    event.preventDefault();
    clearResult();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      examination: formData.get('examination'),
      year: formData.get('year'),
      indexNumber: formData.get('indexNumber')
    };

    const response = await requestRoute('POST', '/search/index', payload);

    if (!response.ok) {
      showStatus('error', response.message);
      return;
    }

    showStatus('info', response.message || 'Demo result generated from an approved fixture.');
    renderResult(response.data);
  }

  async function handleSchoolSearch(event) {
    event.preventDefault();
    clearResult();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await requestRoute('POST', '/search/school', {
      examination: formData.get('examination'),
      year: formData.get('year'),
      region: formData.get('region'),
      district: formData.get('district'),
      school: formData.get('school')
    });

    if (!response.ok) {
      showStatus('error', response.message);
      return;
    }

    showStatus('info', 'School lookup is currently a demo flow. No live source was queried.');
    resultBox.innerHTML = '<h3>School Search Snapshot</h3>' +
      '<div class="result-grid">' +
      '<div class="result-card"><strong>Examination</strong><span>' + window.Sanitizer.escapeHtml(response.data.examination) + '</span></div>' +
      '<div class="result-card"><strong>Year</strong><span>' + window.Sanitizer.escapeHtml(response.data.year) + '</span></div>' +
      '<div class="result-card"><strong>Region</strong><span>' + window.Sanitizer.escapeHtml(response.data.region) + '</span></div>' +
      '<div class="result-card"><strong>District</strong><span>' + window.Sanitizer.escapeHtml(response.data.district) + '</span></div>' +
      '<div class="result-card"><strong>School</strong><span>' + window.Sanitizer.escapeHtml(response.data.school) + '</span></div>' +
      '<div class="result-card"><strong>Source</strong><span>' + window.Sanitizer.escapeHtml(response.data.source) + '</span></div>' +
      '</div>';
  }

  function populateRegions() {
    requestRoute('GET', '/locations/regions').then(function (response) {
      regionSelect.innerHTML = '<option value="">Select region</option>';
      response.data.forEach(function (region) {
        const option = document.createElement('option');
        option.value = region.name;
        option.textContent = region.name;
        regionSelect.appendChild(option);
      });
    }).catch(function () {
      showStatus('error', 'Locations are temporarily unavailable.');
    });
  }

  async function onRegionChange() {
    const selectedRegionName = regionSelect.value;

    districtSelect.innerHTML = '<option value="">Select district</option>';
    schoolSelect.innerHTML = '<option value="">Select school</option>';
    districtSelect.disabled = true;
    schoolSelect.disabled = true;

    if (!selectedRegionName) {
      return;
    }

    const response = await requestRoute('GET', '/locations/districts?region=' + encodeURIComponent(selectedRegionName));
    response.data.forEach(function (district) {
      const option = document.createElement('option');
      option.value = district.name;
      option.textContent = district.name;
      districtSelect.appendChild(option);
    });

    districtSelect.disabled = false;
  }

  async function onDistrictChange() {
    const selectedRegionName = regionSelect.value;
    const selectedDistrictName = districtSelect.value;

    schoolSelect.innerHTML = '<option value="">Select school</option>';
    schoolSelect.disabled = true;

    if (!selectedRegionName || !selectedDistrictName) {
      return;
    }

    const response = await requestRoute('GET', '/locations/schools?region=' + encodeURIComponent(selectedRegionName) + '&district=' + encodeURIComponent(selectedDistrictName));
    response.data.forEach(function (school) {
      const option = document.createElement('option');
      option.value = school.name;
      option.textContent = school.name;
      schoolSelect.appendChild(option);
    });

    schoolSelect.disabled = false;
  }

  document.getElementById('index-form').addEventListener('submit', handleIndexSearch);
  document.getElementById('school-form').addEventListener('submit', handleSchoolSearch);
  regionSelect.addEventListener('change', onRegionChange);
  districtSelect.addEventListener('change', onDistrictChange);
  populateRegions();
})();
