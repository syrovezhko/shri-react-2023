"use client"

import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { StoreProvider } from '@/redux/StoreProvider'

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
      <body>
        <StoreProvider>
          <Header/>
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  )
}
