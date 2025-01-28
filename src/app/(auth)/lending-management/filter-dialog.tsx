import { Button, Dialog, Flex, Select, Text, TextField } from '@radix-ui/themes'
import React from 'react'

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
                    Status
                </Text>
                <Select.Root>
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
                    />
                    <Text>To</Text>
                     <TextField.Root
                        className="flex-1"
                        placeholder="Enter Ensd Date"
                        type="datetime-local"
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
                    />
                    <Text>To</Text>
                     <TextField.Root
                        className="flex-1"
                        placeholder="Enter End Date"
                        type="datetime-local"
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
            <Button >Save</Button>
        </Flex>
    </Dialog.Content>
</Dialog.Root>
  )
}
