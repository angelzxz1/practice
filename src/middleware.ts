import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
	
	publicRoutes: ['/', '/sign-in', '/testing', '/userProfile', '/about' , 'contactus'],
})

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
