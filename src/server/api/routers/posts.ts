import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    // publicProcedure is a function that returns a procedure
    return ctx.prisma.post.findMany();
  }),
});
