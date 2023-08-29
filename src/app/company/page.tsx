'use client'
import React, { useState } from 'react'
import Form from './components/Form/Form'
import Profile from './components/Profile/Profile'
import style from './company.module.css'
import Image from 'next/image'
import arrow from './arrow-right.svg'
import Link from 'next/link'
import ProcessBars from '../components/ProcessBars'


const Page = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
  };
  return (
    <main className={style.main}>
      <section className='process'>
        <ProcessBars isSelected={selectedCard === 'I`m an Agency'} />
        <ProcessBars isSelected={selectedCard === 'I`m a Company!'} />
      </section>
      <section className={style.containerForm}>
        <Form />
        <Profile />
      </section>
      <section className={style.buttons}>
        <Link href='/'>
          <button className={style.back}> Go back</button>
        </Link>
        <button className={style.continue}>Continue <Image width={18} height={18} alt='arrow' src={arrow} /></button>
      </section>
    </main>
  )
}

export default Page