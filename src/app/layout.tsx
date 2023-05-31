
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
					className={`${inter.className} min-h-screen bg-gradient-to-br from-[#1D0E29] to-black text-white`}
				>
					<NavBar />
					<div className="flex w-full justify-center">
						<div className="mt-[3.6rem] w-full">{children} </div>
					</div>
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	)
}
