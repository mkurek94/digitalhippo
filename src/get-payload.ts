import dotenv from "dotenv";
import path from "path";
import payload, { Payload } from "payload";
import type { InitOptions } from "payload/config";

interface Args {
  initOptions?: Partial<InitOptions>;
}

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let cached = (global as any).payload;

if (!cached) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cached = (global as any).payload = {
    client: null,
    promise: null,
  };
}

export const getPayloadClient = async ({ initOptions }: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error("PAYLOAD_SECRET is missing");
  }

  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (err: unknown) {
    cached.promise = null;
    throw err;
  }

  return cached.client;
};
