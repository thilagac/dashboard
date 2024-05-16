
import { AreaChart, BarChart, Card, Title } from '@tremor/react'

const generateData = () => {
  let dataset = []
  const dates = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thus',
    'fri'
  ]

  for (let date of dates) {
    dataset.push({
      date,
      'Sales': Math.round(100 + Math.random() * 20 - 10),
      'Revenue': Math.round(200 + Math.random() * 20 - 10),
 
    })
  }

  return dataset
}

const mockDataset = generateData()
console.log(mockDataset)

export default function Bar() {
  return (
    <Card className='  lg:w-full sm:w-full md:w-full  shadow-md '>
      <Title className='mb-2'>My admin dashboard</Title>
      <BarChart
        className='mt-4 h-60'
        defaultValue={0}
        data={mockDataset}
        categories={['Sales', 'Revenue']}
        index='date'
        colors={['red', 'red' ]}
        allowDecimals={false}
        yAxisWidth={60}
        noDataText='No data. Run your first test to get started!'
      />
    </Card>
  )
}