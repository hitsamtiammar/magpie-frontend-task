import { Container } from '@radix-ui/themes'
import Form from './form'
import React from 'react'
import QueryWrapper from './query-wrapper'
// import Cookies from 'js-cookie'
import { redirect } from 'next/navigation'
// import client from '@/api/client'
import { cookies } from 'next/headers'

export default async function Login () {
    const cookie = await cookies()
    const TOKEN = cookie.get('TOKEN')
    if(TOKEN){
        redirect('/dashboard')
    }

    async function setToken(token: string){
        'use server'
        try{
            const cookie = await cookies()
            console.log('token', token)
            cookie.set('TOKEN', token)
            redirect('/dashboard')
        }catch(err){
            throw err;
        }
    }

    return (
        <Container className="flex bg-slate-100 w-screen h-screen flex-col items-center justify-center">
            <QueryWrapper>
                <Form setToken={setToken} />
            </QueryWrapper>
        </Container>
    )
}
