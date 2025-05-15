import Image from 'next/image';

import { Icons } from '@/components/icons';

export const BannerInfoSection = () => {
  return (
    <>
      <div className="absolute -top-[520px] -right-[600px] -z-10 h-[900px] w-[1100px] rotate-[220deg] bg-cover bg-center bg-no-repeat sm:-right-[550px] md:-top-[570px]">
        <Image
          src="/images/nav-background.png"
          alt="navigation background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="relative mt-6 flex justify-center md:-mt-[62px]">
        <Icons.bannerLogo className="md:h-auto md:w-auto" />
      </section>
    </>
  );
};
