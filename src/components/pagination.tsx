import { noop } from '@/utils/func'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'

export interface PaginationProps{
  page?: number
  totalPage?: number;
  onNext?: () => void
  onPrev?: () => void
}

export default function Pagination({ page = 1, totalPage = Infinity, onNext = noop, onPrev = noop } : PaginationProps) {
  return (
    <Flex gap="2" pt="2" justify="center" align="center" direction="row">
        <Button onClick={onPrev} disabled={page === 1} ><ArrowLeftIcon/> Prev</Button>
        <Text>Page: {page}</Text>
        <Button disabled={page === totalPage} onClick={onNext}>Next <ArrowRightIcon/></Button>
    </Flex>
  )
}
