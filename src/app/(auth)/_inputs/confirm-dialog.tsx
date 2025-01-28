import { noop } from '@/utils/func'
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import React from 'react'

export type BtnColor = "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky"

export interface ConfirmDialogProps{
    btnText?: string
    alertTitle?: string
    alertDescription?: string
    cancelBtnText?: string;
    confirmBtnText?:string
    confirmBtnColor?: BtnColor
    btnColor?: BtnColor
    onConfirm?: () => void
    disabled?: boolean
}

export default function ConfirmDialog({
    alertTitle = 'Delete',
    alertDescription = '',
    cancelBtnText = 'Cancel',
    btnText = 'Delete',
    confirmBtnText = 'Confirm',
    confirmBtnColor = 'amber',
    btnColor = 'blue',
    onConfirm = noop,
    disabled = false
}: ConfirmDialogProps) {
  return (
    <AlertDialog.Root>
        <AlertDialog.Trigger>
            <Button disabled={disabled} color={btnColor}>{btnText}</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
            <AlertDialog.Title>{alertTitle}</AlertDialog.Title>
            <AlertDialog.Description size="2">
                {alertDescription}
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                    <Button variant="soft" color="gray">
                        {cancelBtnText}
                    </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                    <Button onClick={onConfirm} variant="solid" color={confirmBtnColor}>
                        {confirmBtnText}
                    </Button>
                </AlertDialog.Action>
            </Flex>
            </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
