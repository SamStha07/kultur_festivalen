import React from 'react';
import { ImageCard } from '../components/image-card';

const list = [
  {
    id: 0,
    title: 'Festivalen genom tiderna',
    image: '/images/image-1.jpg'
  },
  {
    id: 1,
    title: 'Nyheter',
    image: '/images/image-2.jpg'
  },
  {
    id: 2,
    title: 'Festivalens områden',
    image: '/images/image-3.jpg'
  },
  {
    id: 3,
    title: 'Frågor och svar',
    image: '/images/image-4.jpg'
  },
  {
    id: 4,
    title: 'UNG Kulturfestival',
    image: '/images/image-5.jpg'
  },
  {
    id: 5,
    title: 'Partner och sponsorer',
    image: '/images/image-6.jpg'
  }
];

export const ProgramImageSection = () => {
  return (
    <section className="container m-auto mt-[60px] px-4 md:mt-[100px]">
      <h2 className="text-center text-[27px] uppercase sm:text-[40px]">
        Det här är KULTURFESTIVALEN
      </h2>

      {/* images grid */}
      <div className="mt-[40px] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(data => (
          <ImageCard key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
};
