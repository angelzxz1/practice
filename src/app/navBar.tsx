'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignOutButton } from '@clerk/nextjs'

interface NavLinkProps {
	href: string
	children: string
}
const NavLink = ({ href, children }: NavLinkProps) => {
	const path = usePathname()
	return (
		<Link
			href={href}
			className={`
				relative
				mr-4
                pr-4
                after:absolute
                after:left-0
                after:h-px
                after:bg-white
                after:content-['']
                ${
					path === href
						? 'after:w-full'
						: 'after:w-0 hover:after:w-full'
				}
                after:bottom-0
                after:duration-150
                after:ease-in-out
            `}
		>
			{children}
		</Link>
	)
}

const NavBar = () => {
	const Links = [
		{ href: '/', label: 'Home' },
		{ href: '/add', label: 'Add' },
		{ href: '/history', label: 'History' },
		{ href: '/about', label: 'About' },
		{ href: '/contactus', label: 'Contact us' },
	]
	const path = usePathname()
	if (path === '/login' || path === '/register') {
		return <></>
	} else {
		return (
			<div
				className="
				fixed
                z-50
				flex
				w-full
                bg-[#42339C19]
                p-4
				backdrop-blur-lg
				
			"
			>
				<div className="flex w-1/5 items-center justify-center">
					Logo
				</div>
				<div className="flex w-1/2  justify-start">
					{Links.map(({ href, label }) => (
						<NavLink key={label} href={href}>
							{label}
						</NavLink>
					))}
				</div>
				<div className="flex w-1/5 items-center justify-center">
					<SignOutButton>Log out</SignOutButton>
				</div>
			</div>
		)
	}
}

export default NavBar
