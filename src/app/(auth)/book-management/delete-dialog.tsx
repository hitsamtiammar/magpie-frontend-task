import React from 'react'
import ConfirmDialog from '../_inputs/confirm-dialog'
import { Book } from '@/api/use-books'
import { useDeleteBook } from '@/api/use-delete-book'

export interface DeleteDialogProps{
    selectedBook: Book
    onDeleteSuccess: () => void
}

export default function DeleteDialog({ selectedBook, onDeleteSuccess } : DeleteDialogProps) {
    const mutation = useDeleteBook()
    async function onDeletePress(){
        try{
            await mutation.mutateAsync({ id: selectedBook.id })
            onDeleteSuccess()
        }catch(err){
            console.log('Delete book error', err)
        }
    }

  return (
    <ConfirmDialog  
        btnColor="red"
        btnText="Delete"
        alertDescription="Are you sure want to delete this book?"
        cancelBtnText="No"
        confirmBtnText="Yes"
        alertTitle="Delete Confirm"
        confirmBtnColor='red'
        onConfirm={onDeletePress}
    />
  )
}
