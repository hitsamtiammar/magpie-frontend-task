'use client'
import Pagination from '@/components/pagination'
import Searchbar from '@/components/Searchbar'
import { Container, Flex, Heading, Table } from '@radix-ui/themes'
import React from 'react'

export default function LendingManagement() {
  return (
    <Container>
        <Heading>Lending Management</Heading>
        <Flex mt="5" direction="column">
            <Searchbar placeholder="Search by book title" />
            <Table.Root mt="5" variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Book Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Member Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Borrowed Date</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>George R. R. Martin</Table.Cell>
                        <Table.Cell>Hitsam Tiammar</Table.Cell>
                        <Table.Cell>Borrowed</Table.Cell>
                        <Table.Cell>05 January 2025 10:00:00</Table.Cell>
                        <Table.Cell>05 February 2025 10:00:00</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
            <Pagination/>
        </Flex>
    </Container>
  )
}
