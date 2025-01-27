'use client'
import { Container, Heading } from '@radix-ui/themes'
import React from 'react'
import TableComponent from './table'

export default function LendingManagement() {
  return (
    <Container>
        <Heading>Lending Management</Heading>
        <TableComponent/>
    </Container>
  )
}
