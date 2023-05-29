import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
	beforeAuth(req, evt) {
		// handle users who aren't authenticated
		console.log('Esto es antes del auth')
	},

	afterAuth: (auth, req, evt) => {
		// handle users who aren't authenticated
		console.log('Esto es despues del auth')
	},
	publicRoutes: ['/', '/sign-in', '/testing'],
})

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
