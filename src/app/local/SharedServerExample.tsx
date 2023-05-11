'use server';

import { __unstable__getSession } from "@/util/session";

export default async function ServerExample(message: string) {
  return await __unstable__getSession();
}