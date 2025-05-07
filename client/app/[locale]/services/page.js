import Image from 'next/image'
import {useTranslations} from 'next-intl';
import SlidingCarousel from '../generalComponents/SlidingCarousel';
import SubBanner from '../generalComponents/SubBanner';
import img from "../../../public/images/kahvaltı-bar/IRN-restorant2.webp"

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  
  return (
    <div className=" font-jost">
      <SubBanner img={img} header={t("header")}/>
      <SlidingCarousel/>
    </div>
  );
}
