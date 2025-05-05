// app/services/page.tsx

import Image from 'next/image'
import breakfastImg from '@/public/images/kahvaltı-bar/IRN-HAVALTI2.webp'
import poolImg from '@/public/images/havuz/IRN-HAV.webp'
import barImg from '@/public/images/kahvaltı-bar/IRN-BAR-2.webp'

export default function ServicesPage() {
  return (
    <div className="w-[87.79%] md:w-[91.4%] lg:w-[76.8%] max-w-[1440px] mx-auto py-12 text-white font-jost">
      <section className="text-center mb-16">
        <h1 className="font-marcellus text-[28px] md:text-[32px] lg:text-[48px] text-lagoGray mb-4">
          Hizmetlerimiz
        </h1>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white/80">
          Irenic Hotel'de sizi bekleyen özel hizmetleri keşfedin.
        </p>
      </section>

      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image src={breakfastImg} alt="Kahvaltı" className="w-full h-auto " />
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-marcellus text-[28px] md:text-[32px] lg:text-[44px] text-lagoGray mb-4 text-[#0f172b]/80">
              Ücretsiz Kahvaltı
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#666565]/80">
              Her sabah taze ürünlerle hazırlanan ücretsiz kahvaltımızla güne enerjik başlayın.
              Açık büfe kahvaltımız konaklamanıza dahildir.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="font-marcellus text-[28px] md:text-[32px] lg:text-[44px] text-lagoGray mb-4 text-[#0f172b]/80">
              Açık Yüzme Havuzu
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#666565]/80">
              Serinlemek ve güneşin tadını çıkarmak isteyen misafirlerimiz için açık havuzumuz tüm gün hizmetinizde.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image src={poolImg} alt="Havuz" className="w-full h-auto " />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image src={barImg} alt="Bar" className="w-full h-auto " />
          </div>
          <div className="lg:w-1/2">
            <h2 className="font-marcellus text-[28px] md:text-[32px] lg:text-[44px] text-lagoGray mb-4 text-[#0f172b]/80">
              Bar
            </h2>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#666565]/80">
              Gündüz ferahlatıcı içecekler, akşam ise keyifli anlar için modern barımızda kaliteli içecek seçenekleri sizi bekliyor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
