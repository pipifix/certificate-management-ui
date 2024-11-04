import { LucideIcon } from 'lucide-react'

export interface Statistic {
  value: string
  value_color?: string
  description: string
  description_color?: string
}

export interface StatisticCard {
  title: string
  icon?: LucideIcon
  statistics: Statistic[]
  footer: {
    label: string
    url: string
  }
}
