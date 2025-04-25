"use client"
import {useTranslations} from 'next-intl';
import MainCarousel from "./generalComponents/MainBanner";
import InfoSection from "./generalComponents/InfoSection";
import SlidingImageSection from "./generalComponents/SlidingImageSection";
import GridSection from "./generalComponents/GridSection";

export default function Home() {
  const t = useTranslations('Homepage');

// InfoSection
const infoSubtitle = t('infoSection.subtitle')
const infoTitle = t('infoSection.heading')
const infoText = t('infoSection.text')

// Sliding sections
const slidingTitle = t('slidingSections.first.title')
const slidingText = t('slidingSections.first.text')
const slidingButton = t('slidingSections.first.button')
const slidingTitle2 = t('slidingSections.second.title')
const slidingText2 = t('slidingSections.second.text')
const slidingButton2 = t('slidingSections.second.button')



  return (
    <div className="flex flex-col overflow-hidden gap-[40px] md:gap-[70px] lg:gap-[90px]">
      <MainCarousel/>
      <InfoSection subtitle={infoSubtitle} title={infoTitle} text={infoText}/>
     <div className="flex flex-col">
     <SlidingImageSection title={slidingTitle} text={slidingText} buttonText={slidingButton} isReversed={false}/>
     <SlidingImageSection title={slidingTitle2} text={slidingText2} buttonText={slidingButton2} isReversed={true}/>
     </div>
     <GridSection/>
    </div>
  );
}
