import { Context, publicProcedure, router } from "./trpc/init-trpc";
import { prisma } from "./database/prisma";
import * as trpcExpress from "@trpc/server/adapters/express";

export const appRouter = router({
  hello: publicProcedure.query(() => "Hello, tRPC!"),
});

export type AppRouter = typeof appRouter;

function createContext({}: trpcExpress.CreateExpressContextOptions): Context {
  return { prisma };
}

export const trpcMiddleware = trpcExpress.createExpressMiddleware({
  router: appRouter,
  createContext,
});
