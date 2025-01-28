import { useCategories } from '@/api/use-category'
import { Select } from '@radix-ui/themes'
import React from 'react'

export interface CategoryInput extends Select.RootProps{
    className?: string
    placeholder?: string
}

export default function CategoryInput({className , placeholder, ...props}: CategoryInput) {
    const { data, isLoading } = useCategories()
    const categories = data?.data || []
    return (
        <Select.Root disabled={isLoading} {...props}>
            <Select.Trigger placeholder={placeholder} className={`w-full ${className}`} />
            <Select.Content>
                {categories.map(item => (
                    <Select.Item key={item.id} value={item.id.toString()}>{item.name}</Select.Item>
                ))}
            </Select.Content>
        </Select.Root>
    )
}
