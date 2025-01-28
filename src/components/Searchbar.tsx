'use client'
import { MagnifyingGlassIcon, ZoomInIcon } from '@radix-ui/react-icons'
import { Button, Flex, IconButton, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import { noop } from '@/utils/func'

export interface SearchbarProps{
    placeholder?: string;
    onFilterPress?: () => void;
    onSearch?: (text: string) => void;
    middleButton?: React.ReactNode
}

export default function Searchbar({
    placeholder = '',
    onFilterPress = noop,
    onSearch = noop,
    middleButton = null
}: SearchbarProps) {
    const [textSearch, setTextSearch] = useState('')
    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            onSearch(textSearch)
        }
    }
    return (
        <Flex direction="row" gap="2">
            <TextField.Root 
                onInput={(e) => setTextSearch(e.currentTarget.value)}
                value={textSearch}
                onKeyDown={(e) => onKeyDown(e)}
                className="flex-1"
                placeholder={placeholder}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
            </TextField.Root>
            <IconButton onClick={() => onSearch(textSearch)} color="cyan">
                <ZoomInIcon/>
            </IconButton>
            {middleButton}
            <Button onClick={() => onFilterPress()}>Filter</Button>
        </Flex>
    )
}
