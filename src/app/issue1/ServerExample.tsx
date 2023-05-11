'use server';

import { getSession } from '@/util/session';

export default async function ServerExample(message: string) {
  return await getSession();
}