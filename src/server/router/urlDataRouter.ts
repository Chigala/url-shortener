import { UrlData } from "./../../../node_modules/.prisma/client/index.d";
import { createRouter } from "./context";
import { z } from "zod";

export const urlRouterData = createRouter()
  .mutation("createShortUrl", {
    input: z.object({
      url: z.string(),
      userId: z.string().optional(),
    }),
    async resolve({ ctx, input }) {
      try {
        const data = await ctx.prisma.urlData.create({
          data: <UrlData>{
            url: input.url,
            userId: input.userId,
            shortUrl: Math.random().toString(36).substring(2, 7),
          },
        });
        return {
          data,
        };
      } catch (error) {
        console.log(error);
      }
    },
  })

  .mutation("redirect", {
    input: z.object({
      shortUrl: z.string(),
    }),
    async resolve({ input, ctx }) {
      try {
        const data = await ctx.prisma.urlData.findFirst({
          where: {
            shortUrl: input.shortUrl,
          },
        });
        if (data) {
          // const longUrl = data.url as string;

          return {
            data: "I did it",
          };
        } else {
          return {
            error: "No url found",
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
