import './globals.css'
import type { Metadata } from 'next'
import { Goblin_One } from 'next/font/google'
import theme from './themeConfig'
import { ConfigProvider } from 'antd'

const goblineOne = Goblin_One({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dog Walking App',
  description: 'Sample dog walking scheduler application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ConfigProvider theme={theme}>
        {children}
        </ConfigProvider>
        </body>
    </html>
  )
}
