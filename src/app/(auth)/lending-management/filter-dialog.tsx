import { noop } from '@/utils/func';
import { Button, Dialog, Flex, Select, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'

export interface FilterParams{
    search?: string;
    status?: string;
    borrowedDateStart?: string
    borrowedDateEnd?: string
    dueDateStart?: string
    dueDateEnd?: string
}

export interface FilterDialogProps{
    open?: boolean;
    setOpen?: (flag: boolean) => void
    onFilterChange?: (filter: FilterParams | null) => void
}

export default function FilterDialog({ open, setOpen, onFilterChange:onFilterChangeProps = noop } : FilterDialogProps) {
    const [filter, setFilter] = useState({
        status: 'BORROWED',
        borrowedDateStart: '',
        borrowedDateEnd: '',
        dueDateStart: '',
        dueDateEnd: ''
    })

    function onFilterChange(key: string, value: string){
        setFilter({
            ...filter,
            [key]: value
        })
    }

    function onSave(){
        onFilterChangeProps(filter)
    }

    function onReset(){
        setFilter({
            status: 'BORROWED',
            borrowedDateStart: '',
            borrowedDateEnd: '',
            dueDateStart: '',
            dueDateEnd: ''
        })
        onFilterChangeProps(null)
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content aria-description='Edit Content' maxWidth="450px">
            <Dialog.Title>Filter</Dialog.Title>
            <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Status
                    </Text>
                    <Select.Root value={filter.status} onValueChange={(value) => onFilterChange('status', value)}>
                        <Select.Trigger className={`w-full`} />
                        <Select.Content>
                            <Select.Item value="RETURNED">Returned</Select.Item>
                            <Select.Item value="BORROWED">Borrowed</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Borowed Date
                    </Text>
                    <Flex className="w-full" gap="2" align="center" direction="row">
                        <TextField.Root
                            className="flex-1"
                            placeholder="Enter Start Date"
                            type="datetime-local"
                            max={filter.borrowedDateEnd}
                            value={filter.borrowedDateStart}
                            onChange={(e) => onFilterChange('borrowedDateStart', e.target.value) }
                        />
                        <Text>To</Text>
                        <TextField.Root
                            className="flex-1"
                            placeholder="Enter Ensd Date"
                            type="datetime-local"
                            min={filter.borrowedDateStart}
                            value={filter.borrowedDateEnd}
                            onChange={(e) => onFilterChange('borrowedDateEnd', e.target.value) }
                        />
                    </Flex>
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Due Date
                    </Text>
                    <Flex className="w-full" gap="2" align="center" direction="row">
                        <TextField.Root
                            className="flex-1"
                            placeholder="Enter Start Date"
                            type="datetime-local"
                            value={filter.dueDateStart}
                            max={filter.dueDateEnd}
                            onChange={(e) => onFilterChange('dueDateStart', e.target.value) }
                        />
                        <Text>To</Text>
                        <TextField.Root
                            className="flex-1"
                            placeholder="Enter End Date"
                            type="datetime-local"
                            value={filter.dueDateEnd}
                            min={filter.dueDateStart}
                            onChange={(e) => onFilterChange('dueDateEnd', e.target.value) }
                        />
                    </Flex>
                </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Button onClick={onReset} color="red">Reset</Button>
                <Button onClick={onSave}>Save</Button>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    )
}
