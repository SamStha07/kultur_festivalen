// import { BannerInfoSection } from '../sections/banner-info-section';
import dynamic from 'next/dynamic';

// import { BannerSection } from '../sections/banner-section';
// import { ProgramImageSection } from '../sections/program-image-section';
// import { ProgramInfoSection } from '../sections/program-info-section';

const BannerInfoSection = dynamic(() =>
  import('../sections/banner-info-section').then(mod => mod.BannerInfoSection)
);
const BannerSection = dynamic(() =>
  import('../sections/banner-section').then(mod => mod.BannerSection)
);
const ProgramImageSection = dynamic(() =>
  import('../sections/program-image-section').then(
    mod => mod.ProgramImageSection
  )
);
const ProgramInfoSection = dynamic(() =>
  import('../sections/program-info-section').then(mod => mod.ProgramInfoSection)
);

export const HomeView = () => {
  return (
    <div>
      <BannerInfoSection />
      <BannerSection />
      <ProgramInfoSection />
      <ProgramImageSection />
    </div>
  );
};
