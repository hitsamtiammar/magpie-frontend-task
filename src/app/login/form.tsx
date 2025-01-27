'use client';
import { Button, Flex, Heading, Strong, Text, TextField } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { useLogin } from '@/api/use-login';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'

export interface FormProps{
    setToken: (token: string) => void
}

export default function Form({ setToken }: FormProps) {
    const mutationLogin = useLogin()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [error, setError] = useState({
        email: '',
        password: ''
    })

    console.log('s', Cookies.get('TOKEN'))

    function onDataChange(value: string, onHook: (value: string) => void){
        setError({
            email: '',
            password: ''
        })
        onHook(value)
    }

    async function onSubmit(e: React.FormEvent){
        e.preventDefault();
        try{
            const response = await mutationLogin.mutateAsync({
                email,
                password
            })
            console.log('response', response)
            setToken(response.data.token)
        }catch(_err:unknown){
            const err= _err as AxiosError<{message: string}>;
            const msg = err.response?.data.message
            setError({
                ...error,
                password: msg || ''
            })
        }
    }

    return (
        <Flex className="border bg-white p-5 rounded-lg items-center border-gray-200" direction="column">
            <Heading align="center" as="h1">Login</Heading>
            <form className="w-full justify-center" onSubmit={onSubmit}>
                <Flex className="w-full" mt="4" direction="column">
                    <Strong>Email</Strong>
                    <TextField.Root 
                        onChange={(e) => onDataChange(e.target.value, setEmail)}
                        value={email}
                        variant={error.email ? "soft" : 'surface'}
                        type="email" 
                        color={error.email ? "red" : 'blue'}
                        radius="large"
                        placeholder="Email"
                        disabled={mutationLogin.isLoading}
                    />
                    {error.email && <Text color="red">{error.email}</Text>}
                </Flex>
                <Flex className="w-full" mt="3" direction="column">
                    <Strong>Password</Strong>
                    <TextField.Root
                        onChange={(e) => onDataChange(e.target.value, setPassword)}
                        value={password}
                        variant={error.password ? "soft" : 'surface'}
                        color={error.password ? "red" : 'blue'}
                        radius="large"
                        type="password"
                        placeholder="Password"
                        disabled={mutationLogin.isLoading}
                    />
                     {error.password && <Text color="red">{error.password}</Text>}
                </Flex>
                <Button disabled={mutationLogin.isLoading} color="amber" variant="solid" className="w-[200px] self-center" mt="3">Submit</Button>
            </form>
        </Flex>
    )
}
