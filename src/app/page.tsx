"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

const navbarLinks = [
  { name: 'hero', id: 'hero' },
  { name: 'about', id: 'about' },
  { name: 'how-to-buy', id: 'how-to-buy' },
  { name: 'tokenomics', id: 'tokenomics' },
  { name: 'footer', id: 'footer' },
];

const navbarProps = {
  logoSrc: '/images/logo.svg',
  logoAlt: 'MemeCoin',
};

export default function Home() {
  return (
    <>
      <NavbarBase navItems={navbarLinks} logoSrc={navbarProps.logoSrc} logoAlt={navbarProps.logoAlt} />
      <BillboardHero title='Welcome to MemeCoin' subtitle='A fun and engaging memecoin for everyone' />
      <SplitAbout description='MemeCoin is designed to bring joy and excitement to crypto trading.' />
      <HowToBuy3D title='How to Buy MemeCoin' steps={[{ title: 'Step One', description: 'Create an account on an exchange.', image: '/images/placeholder1.avif', position: 'left', isCenter: false }, { title: 'Step Two', description: 'Purchase MemeCoin using your account.', image: '/images/placeholder2.avif', position: 'center', isCenter: true }, { title: 'Step Three', description: 'Store your MemeCoin in a secure wallet.', image: '/images/placeholder3.avif', position: 'right', isCenter: false }]} />
      <BigNumberTokenomics title='Tokenomics Overview' description='An overview of funding and asset allocation.' kpiItems={[{ value: '80', description: 'Burn Rate', longDescription: 'Percentage of total supply burned over a year', icon: 'LucideIcon' }, { value: '20', description: 'Circulating Supply', longDescription: 'Current supply available in the market', icon: 'LucideIcon' }]} />
      <FooterLogoEmphasisBackgroundGradient logoSrc='/images/logo.svg' logoAlt='MemeCoin Logo' logoText='MemeCoin' items={[{ label: 'Privacy Policy', onClick: () => {} }, { label: 'Terms of Service', onClick: () => {} }, { label: 'Contact Us', onClick: () => {} }]} />
    </>
  );
}
