import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes'
import React from 'react'

export default function Pagination() {
  return (
    <Flex gap="2" pt="2" justify="center" direction="row">
        <Button><ArrowLeftIcon/> Prev</Button>
        <Button>Next <ArrowRightIcon/></Button>
    </Flex>
  )
}
