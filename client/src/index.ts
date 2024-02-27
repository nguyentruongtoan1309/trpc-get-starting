"use strict";

import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

const trpc = createTRPCProxyClient({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
})! as any;

async function main() {
  const users = await trpc.getUsers.query();
  console.log(users); // we got users from trpc server!
  console.log("Woohh! we got the users from the server!");
}

main();
