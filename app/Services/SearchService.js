(function (global) {
  class SearchService {
    static getMockData() {
      return {
        regions: [
          {
            id: 'dar-es-salaam',
            name: 'Dar es Salaam',
            districts: [
              {
                id: 'kinondoni',
                name: 'Kinondoni',
                schools: [
                  { id: 'school-a', name: 'Jangwani Secondary School' },
                  { id: 'school-b', name: 'Mbezi Beach Secondary School' }
                ]
              },
              {
                id: 'temeke',
                name: 'Temeke',
                schools: [
                  { id: 'school-c', name: 'Azimio Secondary School' },
                  { id: 'school-d', name: 'Nelson Mandela Secondary School' }
                ]
              }
            ]
          },
          {
            id: 'morogoro',
            name: 'Morogoro',
            districts: [
              {
                id: 'morogoro-municipal',
                name: 'Morogoro Municipal',
                schools: [
                  { id: 'school-e', name: 'Kihonda Secondary School' },
                  { id: 'school-f', name: 'Mafiga Secondary School' }
                ]
              }
            ]
          }
        ],
        results: {
          'CSEE:2025:S1673/3472': {
            examination: 'CSEE',
            year: '2025',
            indexNumber: 'S1673/3472',
            candidateName: 'Amina Juma',
            school: 'Jangwani Secondary School',
            division: 'Division I',
            subjectResults: [
              { subject: 'Mathematics', grade: 'A' },
              { subject: 'Biology', grade: 'B' },
              { subject: 'English', grade: 'A' }
            ],
            source: 'Official public source',
            status: 'Verified'
          },
          'PSLE:2025:PS170604-001': {
            examination: 'PSLE',
            year: '2025',
            indexNumber: 'PS170604-001',
            candidateName: 'Yusuph Ally',
            school: 'Mbezi Beach Secondary School',
            division: 'Pass',
            subjectResults: [
              { subject: 'Mathematics', grade: 'A' },
              { subject: 'Science', grade: 'B' }
            ],
            source: 'Official public source',
            status: 'Verified'
          }
        }
      };
    }

    static async searchByIndex({ examination, year, indexNumber }) {
      const validation = global.InputValidator.validateIndexNumber(indexNumber);

      if (!validation.valid) {
        return {
          ok: false,
          status: 'validation_error',
          message: validation.message
        };
      }

      try {
        const result = await new global.RetrievalManager().retrieve({
          examination,
          year,
          indexNumber: validation.value
        });

        return {
          ok: true,
          status: 'demo_success',
          message: 'Demo result generated from the approved CSEE fixture. No live source was queried.',
          data: result
        };
      } catch (error) {
        return {
          ok: false,
          status: error.message.includes('No matching') ? 'not_found' : 'retrieval_error',
          message: error.message
        };
      }
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
          message: 'School search is ready for the next controlled retrieval step.',
          source: 'Approved public result source'
        }
      };
    }
  }

  global.SearchService = SearchService;
})(window);
