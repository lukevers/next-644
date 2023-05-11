'use server';

import { getServerSession } from 'next-auth/next';

export default async function ServerExample2(message: string) {
  return await getServerSession({});
}