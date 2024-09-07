import { createServerActionProcedure } from "zsa";
import { cookies } from "next/headers";
import { CookiesMap } from "@/shared/lib/admin";
import { db } from "@/shared/lib";

export const protectedProcedure = createServerActionProcedure()
  .handler(async () => {
    try {
      const token = cookies().get(CookiesMap.Session);

      if (!token) throw new Error("Неавторизованный доступ!");

      const session = await db.session.findUnique({
        where: {
          token: token.value,
        },
        include: {
          user: true,
        },
      });

      if (!session) {
        cookies().delete(CookiesMap.Session);
        throw new Error("Неавторизованный доступ!");
      }

      return {
        session: {
          user: session.user,
          expires: session.expires,
        },
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }

      throw new Error("Что-то пошло не так!");
    }
  })
  .createServerAction();
