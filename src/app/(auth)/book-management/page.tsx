'use client'
import React from 'react'
import { Heading, Container } from '@radix-ui/themes'
import TableComponent from './table'
import QueryWrapper from '../query-wrapper'

export default function BookManagement() {
  return (
    <QueryWrapper>
      <Container>
          <Heading>Book Management</Heading>
          <TableComponent/>
      </Container>
    </QueryWrapper>
   
  )
}
