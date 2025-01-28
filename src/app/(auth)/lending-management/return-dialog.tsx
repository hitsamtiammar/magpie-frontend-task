import React from 'react'
import ConfirmDialog from '../_inputs/confirm-dialog'
import { useReturnBook } from '@/api/use-return-book'
import { noop } from '@/utils/func'
import { Lending } from '@/api/use-lending'
import Swal from 'sweetalert2'
import { AxiosError } from 'axios'

export interface DeleteDialogProps{
    disabled?: boolean
    selectedLending: Lending
    onReturnSuccess: () => void
}

export default function ReturnDialog({ selectedLending, onReturnSuccess = noop, disabled = false } : DeleteDialogProps) {
    const mutation = useReturnBook()
    async function onReturnPress(){
        try{
            await mutation.mutateAsync({ id: selectedLending.id })
            onReturnSuccess()
        }catch(err){
            console.log('Delete book error', err)
            const e = err as AxiosError<{message: string}>
            Swal.fire('Error on return book', e?.response?.data.message)
        }
    }

  return (
    <ConfirmDialog  
        btnColor="blue"
        btnText="Return"
        alertDescription="Are you sure want to return this book?"
        cancelBtnText="No"
        confirmBtnText="Yes"
        alertTitle="Return Confirm"
        confirmBtnColor='blue'
        onConfirm={onReturnPress}
        disabled={disabled}
    />
  )
}
