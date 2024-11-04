// Card.tsx
import React from 'react'
import { StatisticCard as CardType } from '@/types/statisticcards'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'

interface CardProps {
  card: CardType
}

const StatisticsCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <Card className='flex-auto'>
          <CardHeader className='bg-accent/40 p-4'>
            <CardTitle className='flex items-center'>
              <card.icon className='mr-2 inline h-5 w-5 items-center' />
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className='grid-cols grid divide-x-0 p-4 py-12 text-center sm:gap-4 lg:py-8 xl:grid-cols-3 xl:divide-x'>
            {card.statistics.map((stat, index) => (
              <div key={index} className='statistic'>
                <div className='px-5'>
                  <h4
                    className={
                      stat.value_color + ' mb-2 text-3xl font-extrabold'
                    }
                  >
                    {stat.value}
                  </h4>

                  <p className={stat.description_color + ' text-sm'}>
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          {card.footer.url && (
            <CardFooter className='item-center flex flex-col content-center border-0 border-t p-3 text-sm'>
              <Link
                to='{card.footer.url}'
                className='text-muted-foreground hover:text-primary'
              >
                {card.footer.label} →
              </Link>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}

export default StatisticsCard
