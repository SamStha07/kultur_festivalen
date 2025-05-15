import Image from 'next/image';

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background image behind everything */}
      <div className="absolute -top-[520px] -right-[600px] -z-10 h-[900px] w-[1100px] rotate-[220deg] sm:-right-[550px] md:-top-[570px]">
        <Image
          src="/images/nav-background.png"
          alt="navigation background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Children components go on top of background */}
      {children}
    </div>
  );
};
