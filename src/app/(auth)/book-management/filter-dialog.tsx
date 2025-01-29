import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import CategoryInput from '../_inputs/category-input';
import { noop } from '@/utils/func';

export interface FilterParams{
    search?: string
    categoryId?: number | null;
    quantity?: number | null;
}
export interface FilterDialogProps{
    open?: boolean;
    setOpen?: (flag: boolean) => void;
    onFilterChange?: (filter: FilterParams | null) => void
}

export default function FilterDialog({ open, setOpen, onFilterChange: onFilterChangeProps = noop } : FilterDialogProps) {
    const [filter, setFilter] = useState<FilterParams>({
        categoryId: null,
        quantity: null
    })

    function onFilterChange(key: string, value: string | number){
        setFilter({
            ...filter,
            [key]: value
        })
    }

    function onReset(){
        setFilter({
            categoryId: -1,
            quantity: 0
        })
        onFilterChangeProps(null)
    }

    function onSave(){
        onFilterChangeProps(filter)
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content saria-description='Edit Content' maxWidth="450px">
            <Dialog.Title>Filter</Dialog.Title>
            <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Quantity more than
                    </Text>
                    <TextField.Root
                        placeholder="Enter your quantity"
                        type="number"
                        value={filter?.quantity || 0}
                        onChange={(e) => onFilterChange('quantity', e.target.value)}
                    />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Categories
                    </Text>
                    <CategoryInput 
                        onValueChange={(value) => onFilterChange('categoryId', value)}
                        value={filter?.categoryId?.toString()}
                    />
                </label>
            </Flex>
            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Button color="red" onClick={onReset}>Reset</Button>
                <Button onClick={onSave}>Save</Button>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
    )
}
