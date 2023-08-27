'use client'
import React, { useState } from 'react'
import '../page.css'

interface CardProps {
    title: string;
    text: string;
    isSelected: boolean;
    onClick: (cardTitle: string) => void;
}
const Card: React.FC<CardProps> = ({ title, text, isSelected, onClick }) => {
    const handleClick = () => {
        onClick(title);
    };

    return (
        <div className={`card ${isSelected ? 'cardActive' : ''}`}
            onClick={handleClick}>
            <h6 className='cardh6'>{title}</h6>
            <p className='cardp'>{text}</p>
            <div className={`cardRadio ${isSelected ? 'cardRadioActive' : ''}`}></div>
        </div>
    )
}

export default Card
