"use server";

import { protectedProcedure } from "./procedure";

const getCurrentUser = protectedProcedure.handler(
  async (opts) => opts.ctx.session
);

export { getCurrentUser };
