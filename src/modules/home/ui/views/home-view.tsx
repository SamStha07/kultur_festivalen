import { BannerInfoSection } from '../sections/banner-info-section';
import { BannerSection } from '../sections/banner-section';
import { ProgramImageSection } from '../sections/program-image-section';
import { ProgramInfoSection } from '../sections/program-info-section';

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
