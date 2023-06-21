import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
