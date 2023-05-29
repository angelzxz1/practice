import { SignIn } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
	return (
		<main className="flex w-full items-center justify-center">
			<div>
				<SignIn
					appearance={{
						variables: {},
						elements: {
							header: 'test',
						},
						layout: {
							termsPageUrl: '/penes',
							helpPageUrl: '/help',
							logoImageUrl: '/logo.png',
							// logoPlacement: 'outside',
							shimmer: true,
							privacyPageUrl: '/privacy',
							showOptionalFields: false,
							socialButtonsPlacement: 'bottom',
							socialButtonsVariant: 'iconButton',
						},
					}}
				/>
			</div>
		</main>
	)
}

export default Page
