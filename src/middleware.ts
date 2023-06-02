import { authMiddleware } from '@clerk/nextjs'
// import { NextResponse } from 'next/server'

export default authMiddleware({
	
	publicRoutes: ['/', '/login', '/testing', '/userProfile', '/about' , '/contactus'],
	beforeAuth(req, evt) {

		console.log(req.url)
		console.log(evt.sourcePage)
		console.log("before auth")
	},
	// afterAuth(auth, req) {
	// 	if (!auth.userId && !auth.isPublicRoute){
	// 		console.log(auth.userId , auth.isPublicRoute)
	// 		const signInUrl = new URL('/testing', req.url)
	// 		signInUrl.searchParams.set('redirect_url', req.url)
	// 		return NextResponse.redirect(signInUrl)
	// 	}
	// },
})

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)','/(api|trpc)(.*)'],
}
