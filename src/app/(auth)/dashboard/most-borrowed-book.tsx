'use client'
import { Heading, Text } from '@radix-ui/themes'
import React, { useMemo } from 'react'
import ReactECharts from 'echarts-for-react';
import { useMostBorrowedBook } from '@/api/use-most-borrowed-book';

export default function MostBorrowedBook() {
    const {data, isLoading } = useMostBorrowedBook()
    
    const bookMap = useMemo(() => {
        if(!data){
            return {
                bookTitle: [],
                bookCountLending: []
            }
        }
        const bookTitle = data?.data.map(item => item.title)
        const bookCountLending = data?.data.map(item => item.countLending)
        return {
            bookTitle,
            bookCountLending
        }
    }, [data])

    const option = useMemo(() => ({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: bookMap.bookTitle
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: bookMap.bookCountLending,
            type: 'bar',
            color: '#2a54bf'
          }
        ]
    }), [bookMap])

    if(isLoading){
        return (
        <div className="flex-1 justify-center items-center min-h-20">
            <Text>Loading chart..</Text>
        </div>
        )
    }

  return (
      <div className="flex-1 min-h-20">
            <Heading>Most Borrowed Book</Heading>
            <ReactECharts className="w-full h-full" option={option} />
        </div>
  )
}
