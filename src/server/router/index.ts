// src/server/router/index.ts
import { createRouter } from "./context";
import { urlRouterData } from "./urlDataRouter";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("question.", protectedExampleRouter)
  .merge("url.", urlRouterData  )

// export type definition of API
export type AppRouter = typeof appRouter;
