import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  title: string;
  image: string;
}

export const ImageCard = ({ image, title }: ImageCardProps) => {
  return (
    <div className="relative flex flex-col">
      <Image
        src={image}
        width={496}
        height={377}
        alt={title}
        className="h-full w-full"
        sizes="100vw"
        quality={100}
      />
      <div className="bg-background absolute bottom-3 left-3 px-3 py-2">
        <p className="text-[20px] leading-[130%] font-bold tracking-wide">
          {title}
        </p>
      </div>
    </div>
  );
};
