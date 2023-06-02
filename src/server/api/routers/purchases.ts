import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from 'finnaz/server/api/trpc'
import { Prisma } from '@prisma/client'

export const purchasesRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.purchase.findMany()
	}),
	getOne: publicProcedure.input(z.string()).query(async opts => {
		const { ctx, input } = opts
		const purchase = await ctx.prisma.purchase.findUnique({
			where: { id: parseInt(input) },
		})
		if (!purchase) {
			return 'No purchase found'
		}
		return purchase
	}),
	getByDate: publicProcedure.input(z.string()).query(async opts => {
		const { ctx, input } = opts
		const purchase = await ctx.prisma.purchase.findMany({
			where: { date: input },
		})
		if (!purchase) {
			return 'No purchase found'
		}
		return purchase
	}),
	addPurchase: publicProcedure
		.input(
			z.object({
				date: z.string(),
				amount: z.number(),
				time: z.string(),
				userId: z.number(),
			}),
		)
		.query(async ({ ctx, input }) => {
			const {amount,date,time,userId}=input
			const purchase = await ctx.prisma.purchase.create({ data:{
				amount:amount,
				userId:userId.toString(),
				date:date,
				time:time
			}})
			return purchase
		}),
	create: publicProcedure
		.input(
			z.object({
				date: z.string(),
				amount: z.number(),
				time: z.string(),
				userId: z.number(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const {amount,date,time,userId}=input
			const purchase = await ctx.prisma.purchase.create({ data:{
				amount:amount,
				userId:userId.toString(),
				date:date,
				time:time
			}})
			return purchase
		}),
})
