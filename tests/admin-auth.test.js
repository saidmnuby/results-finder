import test from 'node:test';
import assert from 'node:assert/strict';
import { authorizeAdmin } from '../app/Security/AdminAuth.js';

const requestWithToken = (token) => ({
  headers: token ? { authorization: `Bearer ${token}` } : {}
});

test('admin authorization accepts the configured bearer token', () => {
  assert.equal(authorizeAdmin(requestWithToken('correct-token'), 'correct-token'), true);
});

test('admin authorization rejects missing, malformed, and incorrect tokens', () => {
  assert.equal(authorizeAdmin(requestWithToken(), 'correct-token'), false);
  assert.equal(authorizeAdmin({ headers: { authorization: 'Basic correct-token' } }, 'correct-token'), false);
  assert.equal(authorizeAdmin(requestWithToken('wrong-token'), 'correct-token'), false);
  assert.equal(authorizeAdmin(requestWithToken('correct-token'), ''), false);
});
