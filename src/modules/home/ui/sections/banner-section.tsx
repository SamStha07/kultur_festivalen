import Image from 'next/image';
import React from 'react';

import { Icons } from '@/components/icons';

export const BannerSection = () => {
  return (
    <section className="relative mt-7 md:mt-[54px]">
      <div className="relative aspect-video">
        <Image
          src={'/images/banner.jpg'}
          alt="banner-img"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="flex size-[55px] items-center justify-center rounded-full bg-[#242424] md:size-[67px]">
          <Icons.playIcon className="h-[21px] md:h-auto md:w-auto" />
        </div>
      </div>
    </section>
  );
};
