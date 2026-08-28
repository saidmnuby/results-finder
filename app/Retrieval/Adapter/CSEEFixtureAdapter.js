(function (global) {
  const target = global || globalThis;

  class CSEEFixtureAdapter {
    static retrieve(request) {
      const fixture = {
        examination: 'CSEE',
        year: '2025',
        indexNumber: 'S1673/3472',
        candidateName: 'Demo candidate',
        school: 'Demo secondary school',
        division: 'Demo result',
        subjectResults: [
          { subject: 'Mathematics', grade: 'A' },
          { subject: 'Biology', grade: 'B' },
          { subject: 'English', grade: 'A' }
        ],
        source: 'CSEE approved-source fixture (demo only)'
      };

      if (request.examination !== fixture.examination || request.year !== fixture.year || request.indexNumber !== fixture.indexNumber) {
        throw new Error('No matching result was found in the approved demo fixture.');
      }

      return target.CSEEParser.parse(JSON.stringify(fixture));
    }
  }

  target.CSEEFixtureAdapter = CSEEFixtureAdapter;
})(globalThis);
