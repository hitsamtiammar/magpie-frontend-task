'use client'
import Pagination from '@/components/pagination'
import Searchbar from '@/components/Searchbar'
import { Flex, Table } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useBooks } from '@/api/use-books'
import Loading from '@/components/Loading'

export default function TableComponent() {
    const [page, setPage] = useState(1)
    const { data, isLoading } = useBooks({ page })
    console.log('data', data?.data)

    if(isLoading){
        return (
            <Flex mt="5" direction="column" align="center">
                <Loading/>
            </Flex>
        )
    }

    const currData = data?.data

    return (
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
                    {currData?.map(item => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Table.Cell>{item.author}</Table.Cell>
                        <Table.Cell>{item.quantity}</Table.Cell>
                        <Table.Cell>{item.category.name}</Table.Cell>
                        <Table.Cell>{item.isbn}</Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
            <Pagination
                onPrev={() => setPage(page - 1)} 
                onNext={() => setPage(page + 1)}
                totalPage={data?.totalPage}
                page={page}
            />
        </Flex>
    )
}
