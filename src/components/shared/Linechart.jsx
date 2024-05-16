
import { AreaChart, Card, Title } from '@tremor/react'

const generateData = () => {
  let dataset = []
  const dates = [
    'Jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'

  ]

  for (let date of dates) {
    dataset.push({
      date,
      'Total Sales': Math.round(100 + Math.random() * 20 - 10),
      'Total Revenue': Math.round(200 + Math.random() * 20 - 10),
      
    })
  }

  return dataset
}

const mockDataset = generateData()
console.log(mockDataset)

export default function ChartGraph() {
  return (
    <Card className=' lg:w-full sm:w-full md:w-full max-sm:w-full  shadow-md border-slate-600'>
      
      <AreaChart
        className='mt-6 h-64'
        defaultValue={0}
        data={mockDataset}
        categories={['Total Sales', 'Total Revenue' ]}
        index='date'
        colors={["indigo", "green"]}
        allowDecimals={false}
        yAxisWidth={60}
        noDataText='No data. Run your first test to get started!'
      />
    </Card>
  )
}