import { exampleRouter } from "~/server/api/routers/example";
import { usersRouter } from "~/server/api/routers/users";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  users: usersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
