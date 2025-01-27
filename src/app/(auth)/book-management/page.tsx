'use client'
import React from 'react'
import { Heading, Container } from '@radix-ui/themes'
import TableComponent from './table'

export default function BookManagement() {
  return (
      <Container>
          <Heading>Book Management</Heading>
          <TableComponent/>
      </Container>
   
  )
}
