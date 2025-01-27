import { Container, Flex } from '@radix-ui/themes'
import React from 'react'
import MostBorrowedBook from './most-borrowed-book';
import MonthlyLendingTrends from './monthly-trends';


export default function Dashboard() {
  return (
    <Container>
        <Flex direction="row">
          <MonthlyLendingTrends/>
          <MostBorrowedBook/>
        </Flex>
    </Container>
  )
}
