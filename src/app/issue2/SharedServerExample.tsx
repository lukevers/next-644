'use server';

import { getServerSession } from 'next-auth/next';

export default async function ServerExample(message: string) {
  return await getServerSession({});
}