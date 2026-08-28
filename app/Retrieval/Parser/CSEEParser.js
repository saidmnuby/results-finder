(function (global) {
  const target = global || globalThis;

  class CSEEParser {
    static parse(responseText) {
      let payload;

      try {
        payload = JSON.parse(responseText);
      } catch (error) {
        throw new Error('The approved source response could not be parsed.');
      }

      if (!payload || payload.examination !== 'CSEE' || !payload.year || !payload.indexNumber || !payload.candidateName || !payload.school || !payload.source) {
        throw new Error('The approved source response has an unexpected structure.');
      }

      return {
        examination: payload.examination,
        year: String(payload.year),
        indexNumber: payload.indexNumber,
        candidateName: payload.candidateName,
        school: payload.school,
        division: payload.division,
        subjectResults: Array.isArray(payload.subjectResults) ? payload.subjectResults : [],
        source: payload.source
      };
    }
  }

  target.CSEEParser = CSEEParser;
})(globalThis);
