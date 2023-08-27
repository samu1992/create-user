'use client'
import Card from "./CardTypeOfUser";
import { useState } from "react";
import '../page.css'
import Link from "next/link";

export default function Process() {
  const [selectedCard, setSelectedCard] = useState('');


  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(cardTitle);
  };

  return (
    <section className="main">
      <div className='title'>
        <h4 className='h4'>Welcome aboard!</h4>
        <p className='p'>What brings you to Seaclub?</p>
      </div>
      <section className='containerCard'>
        <Link href='/company'>
        <Card
          title='I`m an Agency'
          text='(Select if you provide marketing, development, or design services)'
          isSelected={selectedCard === 'I`m an Agency'}
          onClick={handleCardClick}
        />
        </Link>
        <Card
          title='I`m a Company!'
          text='(Select if you are registering a business entity)'
          isSelected={selectedCard === 'I`m a Company!'}
          onClick={handleCardClick}
        />
      </section>
      <p style={{ color: '#42474E' }}>Already have an account? <span style={{ color: '#3244D7', cursor: 'pointer' }}>Login here.</span></p>
    </section>
  )
}