import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from 'finnaz/server/api/trpc'

export const usersRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.user.findMany()
	}),
	getOne: publicProcedure.input(z.string()).query(async opts => {
		const { ctx, input } = opts
		const user = await ctx.prisma.user.findUnique({
			where: { id: input },
		})
		if (!user) {
			return 'No user found'
		}
		return user
	}),
})
