
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from './footer'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
	title: 'Finnan',
	description: 'Your personal finance manager',
}

import 'finnaz/styles/globals.css'
import NavBar from './navBar'
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={`${inter.className} bg-gradient-to-br from-[#1D0E29] to-black text-white`}
				>
					<NavBar />
					<div className="flex w-full justify-center relative" >
						<div className="pt-[3.6rem] w-full min-h-screen items-center" >{children} </div>
						<Footer />
					</div>
					
				</body>
			</html>
		</ClerkProvider>
	)
}
