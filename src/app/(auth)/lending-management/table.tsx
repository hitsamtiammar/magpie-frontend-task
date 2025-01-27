'use client'
import Pagination from '@/components/pagination'
import Searchbar from '@/components/Searchbar'
import { Flex, Table } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useLending } from '@/api/use-lending'
import moment from 'moment'

export interface FilterProps{
    search?: string;
}

export default function TableComponent() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState<FilterProps>({});
    const { data, isLoading } = useLending({ page, ...filter })

    function onSearch(text: string){
        const newFilter = {...filter}
        if(text){
            setFilter({
                ...newFilter,
                search: text
            })
        }else{
            delete newFilter.search;
            setFilter({ ...newFilter })
        }
    }

    const currData = data?.data || []

    return (
        <Flex mt="5" direction="column">
            <Searchbar onSearch={onSearch} placeholder="Search by member name" />
            <Table.Root mt="5" variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Member Name</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Book Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Borrowed Date</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Due Date</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {currData?.map(item => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.Member?.name}</Table.Cell>
                            <Table.Cell>{item.book?.title}</Table.Cell>
                            <Table.Cell>{item.status}</Table.Cell>
                            <Table.Cell>{moment(item.borrowedDate).format('DD MMMM YYYY HH:mm:ss')}</Table.Cell>
                            <Table.Cell>{moment(item.dueDate).format('DD MMMM YYYY HH:mm:ss')}</Table.Cell>
                        </Table.Row>
                    ))}
                   
                </Table.Body>
            </Table.Root>
            <Pagination
                onPrev={() => setPage(page - 1)} 
                onNext={() => setPage(page + 1)}
                totalPage={data?.totalPage}
                disabled={isLoading}
                page={page}
            />
        </Flex>
    )
}
