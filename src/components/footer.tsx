import React from 'react';

import { Icons } from './icons';

const Footer = () => {
  return (
    <footer className="container m-auto mt-[100px] mb-[50px] px-4 md:mt-[150px]">
      <hr className="text-white/20" />
      <div className="mt-[40px] grid grid-cols-1 flex-wrap items-center justify-between gap-5 sm:grid-cols-2 md:grid-cols-3">
        <Icons.footerLogoIcon />

        <div className="grid md:justify-center">
          <p className="text-[17px] font-bold">Följ oss</p>
          <div className="mt-1 flex items-center gap-3">
            <Icons.instagramIcon />
            <Icons.facebookIcon />
            <Icons.tiktokIcon />
          </div>
        </div>

        <div className="grid text-[17px] md:justify-end">
          <p className="font-bold uppercase">KONTAKT</p>
          <span>kulturfestivalen@stockholm.se</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
