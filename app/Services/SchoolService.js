(function (global) {
  const target = global || globalThis;

  class SchoolService {
    static getRegions() {
      return [
        { id: 'dar-es-salaam', name: 'Dar es Salaam' },
        { id: 'morogoro', name: 'Morogoro' }
      ];
    }

    static getDistricts(region) {
      const map = {
        'Dar es Salaam': [
          { id: 'kinondoni', name: 'Kinondoni' },
          { id: 'temeke', name: 'Temeke' }
        ],
        'Morogoro': [
          { id: 'morogoro-municipal', name: 'Morogoro Municipal' }
        ]
      };

      return map[region] || [];
    }

    static getSchools(region, district) {
      const map = {
        'Dar es Salaam': {
          'Kinondoni': [
            { id: 'school-a', name: 'Jangwani Secondary School' },
            { id: 'school-b', name: 'Mbezi Beach Secondary School' }
          ],
          'Temeke': [
            { id: 'school-c', name: 'Azimio Secondary School' },
            { id: 'school-d', name: 'Nelson Mandela Secondary School' }
          ]
        },
        'Morogoro': {
          'Morogoro Municipal': [
            { id: 'school-e', name: 'Kihonda Secondary School' },
            { id: 'school-f', name: 'Mafiga Secondary School' }
          ]
        }
      };

      return map[region]?.[district] || [];
    }

    static async searchBySchool({ examination, year, region, district, school }) {
      if (!examination || !year || !region || !district || !school) {
        return {
          ok: false,
          status: 'validation_error',
          message: 'Please select examination, year, region, district, and school.'
        };
      }

      return {
        ok: true,
        status: 'success',
        data: {
          examination,
          year,
          region,
          district,
          school,
          message: 'School search is accepted and ready for controlled retrieval.',
          source: 'Approved public result source'
        }
      };
    }
  }

  target.SchoolService = SchoolService;
})(globalThis);
