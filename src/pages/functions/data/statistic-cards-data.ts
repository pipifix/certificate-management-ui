// sampleData.ts
import { StatisticCard } from '@/types/statisticcards'
import { FileKey2, FileKey, FileBadge2, FileBadge, Import } from 'lucide-react'

export const keyDataCards: StatisticCard[] = [
  {
    title: 'Öffentliche Zertifikate',
    icon: FileBadge2,
    statistics: [
      {
        value: '538',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '43',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '7 / 11',
        value_color: 'text-red-900 dark:text-red-200',
        description: 'Abgelaufen/Ungültig',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht öffenrlicher Zertifikate',
      url: '/public-certificates',
    },
  },
  {
    title: 'Eingereichte Zertifikate',
    icon: Import,
    statistics: [
      {
        value: '204',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '16',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '1/1',
        value_color: 'text-red-800 dark:text-red-200',
        description: 'Abgelaufen/Ungültig',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht eingereichter Zertifikate',
      url: '/public-certificates',
    },
  },
  {
    title: 'Aussteller Zertifikate',
    icon: FileBadge,
    statistics: [
      {
        value: '5377',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '3',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '2808',
        value_color: 'text-red-800 dark:text-red-200',
        description: 'Abgelaufen',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht der Austeller Zertifikate',
      url: '/exhibitor-certificates',
    },
  },
  {
    title: 'Private Schlüssel',
    icon: FileKey2,
    statistics: [
      {
        value: '37',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '1',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '5/5',
        value_color: 'text-red-800 dark:text-red-200',
        description: 'Abgelaufen/Ungültig',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht Private Schlüssel',
      url: '/private-keys',
    },
  },
  {
    title: 'Öffentliche PGP Schlüssel',
    icon: FileKey,
    statistics: [
      {
        value: '16',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '0',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '0',
        value_color: 'text-red-800 dark:text-red-200',
        description: 'Abgelaufen/Ungültig',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht Öffentliche PGP Schlüssel',
      url: '/public-pgp-keys',
    },
  },
  {
    title: 'Private PGP Schlüssel',
    icon: FileKey,
    statistics: [
      {
        value: '2',
        value_color: 'text-green-800 dark:text-green-200',
        description: 'Insgesamt',
        description_color: 'text-muted-foreground',
      },
      {
        value: '0',
        value_color: 'text-orange-700 dark:text-orange-300',
        description: 'Ablaufend',
        description_color: 'text-orange-500',
      },
      {
        value: '0',
        value_color: 'text-red-800 dark:text-red-200',
        description: 'Abgelaufen/Ungültig',
        description_color: 'text-destructive',
      },
    ],
    footer: {
      label: 'Zur Übersicht Private PGP Schlüssel',
      url: '/private-pgp-keys',
    },
  },
]
