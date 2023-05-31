'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
	const {isLoaded, user, isSignedIn} = useUser()
    const {id} = user?user:{id:""}
    if(isLoaded){
        return <main className="flex w-full items-center justify-center">{id?id:'No id found'}</main>
    }else{
        return <main className="flex w-full items-center justify-center">loading...</main>
    }
	
}

export default Page
