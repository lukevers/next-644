'use server';

import { getSession } from '@/util/session';

export default async function ServerExample2(message: string) {
  return await getSession();
}