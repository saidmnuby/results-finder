import '../app/Retrieval/Parser/CSEEParser.js';

(function () {
  const assert = (condition, message) => {
    if (!condition) {
      throw new Error(message);
    }
  };

  const root = globalThis;
  const fixture = JSON.stringify({
    examination: 'CSEE',
    year: '2025',
    indexNumber: 'S1673/3472',
    candidateName: 'Fixture Candidate',
    school: 'Fixture School',
    division: 'Division I',
    subjectResults: [{ subject: 'Mathematics', grade: 'A' }],
    source: 'Fixture source'
  });

  const result = root.CSEEParser.parse(fixture);
  assert(result.candidateName === 'Fixture Candidate', 'Parser should extract candidate name.');
  assert(result.subjectResults.length === 1, 'Parser should extract subject results.');

  let rejected = false;
  try {
    root.CSEEParser.parse('{"unexpected":true}');
  } catch (error) {
    rejected = true;
  }
  assert(rejected, 'Parser should reject an unexpected response structure.');

  console.log('CSEE parser fixture checks passed.');
})();
