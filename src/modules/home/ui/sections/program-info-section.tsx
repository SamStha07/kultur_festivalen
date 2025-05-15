import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

export const ProgramInfoSection = () => {
  return (
    <section className="relative mt-8 overflow-hidden px-4 pb-[80px]">
      <h2 className="text-center text-[27px] tracking-tight uppercase md:text-[50px] lg:text-[60px] xl:text-[70px]">
        1 festival • 5 dagar • 6 områden
      </h2>
      <div className="mt-6 grid justify-center">
        <Button className="bg-primary w-auto">Se hela programmet här</Button>
      </div>

      <div className="container m-auto mt-[70px]">
        {/* actual image */}
        <div>
          <Image
            src={'/images/background-img-1.png'}
            alt="background-image-1"
            width={1500}
            height={549}
            sizes="100vw"
          />
        </div>
      </div>

      {/* color background */}
      <div className="absolute -bottom-[600px] -left-[400px] -z-20 mt-16 h-[800px] w-[1000px] rotate-[40deg] bg-cover bg-center bg-no-repeat sm:-bottom-[550px] lg:-bottom-[350px]">
        <Image
          src="/images/background-img-2.png"
          alt="navigation background"
          fill
          className="object-cover"
        />
      </div>
      {/* building background */}
      <div className="absolute -bottom-[30px] -left-[250px] -z-10 h-[135px] w-[800px] bg-cover bg-center bg-no-repeat">
        <Image
          src="/images/background-img-3.png"
          alt="navigation background"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
