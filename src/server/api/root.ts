import { usersRouter } from "finnaz/server/api/routers/users";
import { purchasesRouter } from "finnaz/server/api/routers/purchases";
import { createTRPCRouter } from "finnaz/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: usersRouter,
  purchases: purchasesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
