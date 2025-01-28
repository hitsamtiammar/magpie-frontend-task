import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React from 'react'
import CategoryInput from '../_inputs/category-input';

export interface FilterDialogProps{
    open?: boolean;
    setOpen?: (flag: boolean) => void
}

export default function FilterDialog({ open, setOpen } : FilterDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Content aria-description='Edit Content' maxWidth="450px">
        <Dialog.Title>Filter</Dialog.Title>
        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Quantity
                </Text>
                <TextField.Root
                    placeholder="Enter your quantity"
                    type="number"
                />
            </label>
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Categories
                </Text>
                <CategoryInput/>
            </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Button >Save</Button>
        </Flex>
    </Dialog.Content>
</Dialog.Root>
  )
}
