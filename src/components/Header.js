import React from 'react'
import clsx from 'clsx';

export default function Header({ title, description }) {
    return (
        <header className={clsx('hero hero--primary heroBanner h-56')}>
            <div className="container">
                <h1 className="font-bold text-white text-3xl lg:text-5xl my-4">{title}</h1>
                <p className='font-light lg:text-xl'>{description}</p>
            </div>
        </header>
    )
}
