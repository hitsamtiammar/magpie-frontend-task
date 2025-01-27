import { Book } from '@/api/use-books'
import { useEditBook } from '@/api/use-edit-book'
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'

export interface EditDialogProps{
    selectedBook: Book
    onEditSuccess: () => void
}

export default function EditDialog({ selectedBook, onEditSuccess }: EditDialogProps) {
    const [currBook, setCurrBook] = useState({...selectedBook})
    const [open, setOpen] = useState(false);
    const mutation = useEditBook()
    function onEdit(key: string, value: string){
        setCurrBook({
            ...currBook,
            [key]: value
        })
    }
    

    async function onSave(){
        try{
            await mutation.mutateAsync({
               author: currBook.author,
               categoryId: currBook.categoryId,
               isbn: currBook.isbn,
               quantity: currBook.quantity,
               title: currBook.title,
               id: currBook.id
            })
            onEditSuccess()
            setOpen(false)
        }catch(err){
            console.log('Error on save edit', err)
        }
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button>Edit</Button>
            </Dialog.Trigger>

            <Dialog.Content aria-description='Edit Content' maxWidth="450px">
                <Dialog.Title>Edit Book</Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Title
                        </Text>
                        <TextField.Root
                            value={currBook?.title}
                            placeholder="Enter your full name"
                            onChange={(e) => onEdit('title', e.target.value)}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Author
                        </Text>
                        <TextField.Root
                            value={currBook?.author}
                            placeholder="Enter your author"
                            onChange={(e) => onEdit('author', e.target.value)}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Quantity
                        </Text>
                        <TextField.Root
                            type='number'
                            min={0}
                            placeholder="Enter your quantity"
                            value={currBook?.quantity}
                            onChange={(e) => onEdit('quantity', e.target.value)}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            ISBN
                        </Text>
                        <TextField.Root
                            placeholder="Enter your ISBN"
                            value={currBook?.isbn}
                            onChange={(e) => onEdit('isbn', e.target.value)}
                        />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button disabled={mutation.isLoading} variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Button disabled={mutation.isLoading} onClick={onSave}>Save</Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
