'use client'
import Pagination from '@/components/pagination'
import Searchbar from '@/components/Searchbar'
import { Flex, Table } from '@radix-ui/themes'
import React, { useState } from 'react'
import { useBooks, Book } from '@/api/use-books'
import EditDialog from './edit-dialog'
import DeleteDialog from './delete-dialog'

export interface FilterProps{
    search?: string;
}

export default function TableComponent() {
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState<FilterProps>({})
    const { data, isLoading, refetch } = useBooks({ page, ...filter })

    function onSearch(text: string){
        const newFilter = {...filter}
        setPage(1)
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

    function renderEditDialog(book: Book){
        return (
            <EditDialog onEditSuccess={() => refetch()} selectedBook={book} />
        )
    }

    function renderDeleteDialog(book: Book){
        return (
            <DeleteDialog onDeleteSuccess={() => refetch()} selectedBook={book} />
        )
    }

    const currData = data?.data ||[]

    return (
        <Flex mt="5" direction="column">
            <Searchbar onSearch={onSearch} placeholder="Search by title" />
            <Table.Root mt="5" variant="surface">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>ISBN</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Number of lending</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {currData?.map(item => (
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.title}</Table.Cell>
                            <Table.Cell>{item.author}</Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                            <Table.Cell>{item.category?.name}</Table.Cell>
                            <Table.Cell>{item.isbn}</Table.Cell>
                            <Table.Cell>{item._count?.lending}</Table.Cell>
                            <Table.Cell className="gap-2">
                                <Flex gap="3" direction="row">
                                    {renderEditDialog(item)}
                                    {renderDeleteDialog(item)}
                                </Flex>
                            </Table.Cell>
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
