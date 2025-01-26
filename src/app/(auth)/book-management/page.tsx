'use client'
import React from 'react'
import { Heading, Container, Flex, Table } from '@radix-ui/themes'
import Searchbar from '@/components/Searchbar'
import Pagination from '@/components/pagination'

export default function BookManagement() {
  return (
    <Container>
        <Heading>Book Management</Heading>
        <Flex mt="5" direction="column">
            <Searchbar placeholder="Search by title" />
            <Table.Root mt="5" variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>ISBN</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Tristram Shandy</Table.Cell>
                        <Table.Cell>George R. R. Martin</Table.Cell>
                        <Table.Cell>8</Table.Cell>
                        <Table.Cell>Classic</Table.Cell>
                        <Table.Cell>978-1-4326-9865-2</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Tristram Shandy</Table.Cell>
                        <Table.Cell>George R. R. Martin</Table.Cell>
                        <Table.Cell>8</Table.Cell>
                        <Table.Cell>Classic</Table.Cell>
                        <Table.Cell>978-1-4326-9865-2</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
            <Pagination/>
        </Flex>
    </Container>
  )
}
