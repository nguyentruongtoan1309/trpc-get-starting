const { initTRPC } = require("@trpc/server");
const { createHTTPServer } = require("@trpc/server/adapters/standalone");

const t = initTRPC.create();

const router = t.router;
const publicProcedure = t.procedure;

const db = {
  // fake database with users
  users: ["user1", "user2", "user3"],
};

const appRouter = router({
  getUsers: publicProcedure.query(() => {
    
    return db.users;
  }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
console.log("Server running on port 3000");
