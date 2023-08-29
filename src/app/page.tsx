'use client'
import './page.css'
import Process from './components/Process'
import { useState } from 'react'
import ProcessBars from './components/ProcessBars'

export default function Home() {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
  };


  return (
    <>
    <section className='process'>
        <ProcessBars isSelected={selectedCard === 'I`m an Agency'} />
        <ProcessBars isSelected={selectedCard === 'I`m a Company!'} />
      </section>
      <Process />
    </>
  )
}
