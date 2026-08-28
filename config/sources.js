(function (global) {
  const sourceCatalog = {
    CSEE: {
      2025: {
        sourceType: 'public_html',
        sourceIdentifier: 'necta_csee_2025',
        parserVersion: 'v1.0.0',
        status: 'active',
        allowedHosts: ['necta.go.tz', 'www.necta.go.tz']
      }
    },
    ACSEE: {
      2025: {
        sourceType: 'public_html',
        sourceIdentifier: 'necta_acsee_2025',
        parserVersion: 'v1.0.0',
        status: 'active',
        allowedHosts: ['necta.go.tz', 'www.necta.go.tz']
      }
    },
    PSLE: {
      2025: {
        sourceType: 'public_html',
        sourceIdentifier: 'necta_psle_2025',
        parserVersion: 'v1.0.0',
        status: 'active',
        allowedHosts: ['necta.go.tz', 'www.necta.go.tz']
      }
    }
  };

  global.SourceCatalog = sourceCatalog;
})(window);
