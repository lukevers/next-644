'use server';

import { cookies } from 'next/headers';

export default async function ServerExample(message: string) {
  cookies().get('anything');

  return 'hey';
}