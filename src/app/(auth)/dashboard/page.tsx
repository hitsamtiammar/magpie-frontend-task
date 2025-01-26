'use client'
import { Container, Flex, Heading } from '@radix-ui/themes'
import ReactECharts from 'echarts-for-react';
import React from 'react'

const option = {
    tooltip: {},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Harry Potter', 'Laskar Pelangi', 'Apa aja boleh', 'Dilan', 'Buku hehe']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [1, 4, 5, 6, 4, 3, 4],
        type: 'line',
        lineStyle: {
            color: '#26489e'
        },
        areaStyle: {
          color: '#2a54bf'
        }
      }
    ]
  };

const option2  = {
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['Harry Potter', 'Laskar', 'Apa aja boleh', 'Dilan', 'Buku hehe']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [2, 3, 5, 3, 2],
        type: 'bar',
        color: '#2a54bf'
      }
    ]
  };

export default function Dashboard() {
  return (
    <Container>
        <Flex direction="row">
        <div className="flex-1 min-h-20">
                <Heading>Monthly lending trends</Heading>
                <ReactECharts className="w-full h-full" option={option2} />
            </div>
            <div className="flex-1 min-h-20">
                <Heading>Most Borrowed Book</Heading>
                <ReactECharts className="w-full h-full" option={option} />
            </div>
           
        </Flex>
    </Container>
  )
}
