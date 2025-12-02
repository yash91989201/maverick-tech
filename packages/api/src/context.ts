import type { NextRequest } from "next/server";

export function createContext(req: NextRequest) {
  console.log(req.method);
  return {};
}

export type Context = Awaited<ReturnType<typeof createContext>>;
