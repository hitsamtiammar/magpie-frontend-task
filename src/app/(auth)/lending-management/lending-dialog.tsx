import { useBooks } from '@/api/use-books';
import { useMember } from '@/api/use-member';
import { Button, Dialog, Flex, Select, Text } from '@radix-ui/themes';
import React, { useState } from 'react'
import { useCreateLending } from '@/api/use-create-lending';
import { showErrorMsg } from '@/utils/showErrorMsg';

export interface LendingDialogProps{
    onCreateSuccess: () => void
}

export default function LendingDialog({ onCreateSuccess } : LendingDialogProps) {
    const [open, setOpen] = useState(false);
    const { data: dataMember } = useMember()
    const { data: dataBook } = useBooks({ showAll: true })
    const [memberId, setMemberId] = useState('')
    const [bookId, setBookId] = useState('')
    const mutation = useCreateLending()

    const bookData = dataBook?.data || []
    const memberData = dataMember?.data || []

    async function onSave(){
        try{
            await mutation.mutateAsync({
                bookId: Number(bookId),
                memberId: Number(memberId)
            })
            onCreateSuccess()
            setOpen(false)
        }catch(err){
            console.log('Error on save edit', err)
            showErrorMsg(err, 'An error on lending book')
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button color='green'>Lend Book</Button>
            </Dialog.Trigger>

            <Dialog.Content aria-description='Edit Content' maxWidth="450px">
                <Dialog.Title>Lend book</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Student Name
                        </Text>
                        <Select.Root onValueChange={(value) => setMemberId(value)} value={memberId} autoComplete='asdjsakldj' size="2" defaultValue="apple">
                            <Select.Trigger className="w-full" />
                            <Select.Content>
                                {memberData.map(item => (
                                    <Select.Item key={item.id} value={item.id.toString()}>{item.name}</Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Root>
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Book Title
                        </Text>
                        <Select.Root onValueChange={(value) => setBookId(value)} value={bookId} autoComplete='test' size="2" defaultValue="apple">
                            <Select.Trigger className="w-full" />
                            <Select.Content>
                                {bookData.map(item => (
                                    <Select.Item key={item.id} value={item.id.toString()}>{item.title} - {item.author}</Select.Item>
                                ))}
                            </Select.Content>
                        </Select.Root>
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button disabled={mutation.isLoading} variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Button onClick={onSave} disabled={mutation.isLoading}>Save</Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
