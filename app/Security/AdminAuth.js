import { timingSafeEqual } from 'node:crypto';

export function authorizeAdmin(request, configuredToken = process.env.ADMIN_TOKEN || '') {
  const header = request.headers.authorization || '';
  const suppliedToken = header.startsWith('Bearer ') ? header.slice(7).trim() : '';

  if (!configuredToken || !suppliedToken) {
    return false;
  }

  const supplied = Buffer.from(suppliedToken);
  const expected = Buffer.from(configuredToken);

  return supplied.length === expected.length && timingSafeEqual(supplied, expected);
}
