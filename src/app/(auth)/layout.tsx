'use client'
import { Flex, IconButton, Heading, Box, Text } from '@radix-ui/themes'
import React from 'react'
import style from './layout.module.css'
import { PinLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import QueryWrapper from './query-wrapper'

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const router = useRouter()

    function onLogout(){
        Cookies.remove('TOKEN')
        router.replace('/login')
    }
    return (
        <Flex direction="column">
            <Flex className={style.heading} height="60px" align="center" p="4" justify="between" width="100%"  direction="row">
                <Heading as="h5">Digital Library Analytics</Heading>
                <IconButton onClick={onLogout} color="red"> 
                    <PinLeftIcon/>
                </IconButton>
            </Flex>
            <Flex mt="4" direction="row">
                <Flex width="25%" px="3" direction='column'>
                    <Link href="/dashboard">
                        <Box className={style.headingItem} width="100%" minHeight="20px" >
                            <Text mb="2" align="center" as="div">Dashboard</Text>
                        </Box>
                    </Link>
                <Link href="/book-management">
                        <Box className={style.headingItem} width="100%" minHeight="20px" >
                                <Text mb="2" align="center" as="div">Book Management</Text>
                        </Box>
                </Link>
                <Link href="/lending-management">
                    <Box className={style.headingItem} width="100%" minHeight="20px" >
                            <Text mb="2" align="center" as="div">Lending Management</Text>
                        </Box>
                </Link>
                
                </Flex>
                <Flex pl="9" mb="5" flexGrow="1">
                    <QueryWrapper>
                        {children}
                    </QueryWrapper>
                </Flex>
            </Flex>
        </Flex>
    )
}
