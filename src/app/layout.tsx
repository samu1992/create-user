'use client'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import './page.css'
import Image from 'next/image'
import ProcessBars from './components/ProcessBars'
import { useState } from "react";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["300", "400", "500"],
  style: ["italic", "normal"],
  variable: "--font-dmsans"
})

export const metadata: Metadata = {
  title: 'Process',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
  };
  return (
    <html lang="en">
      <body className={dm_sans.className}>
          <Image className='logo' width={120} height={100} alt='logo' src='/Layer_2.svg' />
        <section className='containerApp'>
          <section className='process'>
            <ProcessBars isSelected={selectedCard === 'I`m an Agency'} />
            <ProcessBars isSelected={selectedCard === 'I`m a Company!'} />
          </section>
          {children}
        </section>
      </body>
    </html>
  )
}