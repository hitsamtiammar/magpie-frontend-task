'use client'
import { Heading, Text } from '@radix-ui/themes'
import React, { useMemo, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import { useMonthlyTrends } from '@/api/use-monthly-trend';
import moment from 'moment';

export default function MonthlyLendingTrends() {
    const [currDate] = useState(moment())
    const {data, isLoading } = useMonthlyTrends({
      month: currDate.format('MMMM'),
      year: currDate.format('YYYY')
    })

    const lendingMap = useMemo(() => {
        if(!data){
            return {
                bookTitle: [],
                bookCountLending: []
            }
        }
        const bookTitle = data?.data.map(item => item.bookName)
        const bookCountLending = data?.data.map(item => item.countLend)
        return {
            bookTitle,
            bookCountLending
        }
    }, [data])

    const option = useMemo(() => ({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: lendingMap.bookTitle
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: lendingMap.bookCountLending,
            type: 'bar',
            color: '#2a54bf'
          }
        ]
    }), [lendingMap])

    if(isLoading){
      return (
      <div className="flex-1 justify-center items-center min-h-20">
          <Text>Loading chart..</Text>
      </div>
      )
  }

    return (
      <div className="flex-1 min-h-20">
          <Heading>Monthly lending trends</Heading>
          <ReactECharts className="w-full h-full" option={option} />
      </div>
    )
}
