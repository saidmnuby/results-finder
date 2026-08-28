(function (global) {
  class SourceResolver {
    static resolve({ examination, year, searchType }) {
      const configMap = {
        CSEE: {
          2025: { sourceType: 'fixture', baseUrl: 'https://www.necta.go.tz', parser: 'CSEEParser', demoAdapter: 'CSEEFixtureAdapter' },
          2024: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'CSEEParser' },
          2023: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'CSEEParser' }
        },
        ACSEE: {
          2025: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'ACSEEParser' },
          2024: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'ACSEEParser' },
          2023: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'ACSEEParser' }
        },
        PSLE: {
          2025: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'PSLEParser' },
          2024: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'PSLEParser' },
          2023: { sourceType: 'public_html', baseUrl: 'https://www.necta.go.tz', parser: 'PSLEParser' }
        }
      };

      const yearConfig = configMap[examination]?.[year];

      if (!yearConfig) {
        throw new Error(`No approved source configuration found for ${examination} ${year}.`);
      }

      return {
        ...yearConfig,
        examination,
        year,
        searchType,
        authorized: true
      };
    }
  }

  global.SourceResolver = SourceResolver;
})(window);
