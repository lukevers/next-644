import { getServerSession } from 'next-auth/next';
import { __internal__unstable__getSession } from './_internal_session';

export async function getSession() {
  return await getServerSession({});
}

export async function __unstable__getSession() {
  return await __internal__unstable__getSession({});
}