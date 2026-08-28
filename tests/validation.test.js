(async function () {
  const assert = (condition, message) => {
    if (!condition) {
      throw new Error(message);
    }
  };

  const root = typeof window !== 'undefined' ? window : globalThis;

  if (!root.InputValidator || !root.RequestController || !root.RetrievalManager || !root.CSEEFixtureAdapter) {
    throw new Error('Browser-safe globals are not available for validation tests.');
  }

  const valid = root.InputValidator.validateIndexNumber('S1673/3472');
  assert(valid.valid === true, 'Valid index number should pass validation.');

  const invalid = root.InputValidator.validateIndexNumber('bad-input');
  assert(invalid.valid === false, 'Invalid index number should fail validation.');

  const request = root.RequestController.validate({
    examination: 'CSEE',
    year: '2025',
    indexNumber: 'S1673/3472'
  });
  assert(request.examination === 'CSEE', 'Request controller should preserve examination.');

  const manager = new root.RetrievalManager();
  const retrievalResult = await manager.retrieve({
    examination: 'CSEE',
    year: '2025',
    indexNumber: 'S1673/3472'
  });
  assert(retrievalResult.status === 'validated', 'Retrieval should validate result before returning.');
  assert(retrievalResult.source.includes('fixture'), 'Demo retrieval should identify its fixture source.');

  console.log('All validation and retrieval checks passed.');
})();
