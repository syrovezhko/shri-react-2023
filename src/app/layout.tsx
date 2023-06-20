import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata = {
  title: 'Домашнее задание "Реакт"',
  description: 'В задании необходимо реализовать интерфейс сервиса поĸупĸи билетов в ĸино.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
