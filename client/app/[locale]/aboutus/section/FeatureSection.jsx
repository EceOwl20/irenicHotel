import { FaCocktail, FaSwimmingPool, FaUtensils } from 'react-icons/fa';
import {useTranslations} from 'next-intl';

export default function FeatureSection() {
  const t = useTranslations('About.Features');

  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-12">
      {/* Başlık */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400 tracking-wide uppercase font-heebo">{t("subtitle")}</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-800 mt-2">{t("title")}</h2>
      </div>

      {/* 3'lü Kart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {/* Kart 1 */}
        <div className="space-y-5">
          <FaCocktail className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">{t("feature1")}</h3>
          <p className="text-sm text-gray-500 font-heebo">
          {t("text1")}
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
          {t("buttonText")}
          </button>
        </div>

        {/* Kart 2 */}
        <div className="space-y-5">
          <FaSwimmingPool className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">{t("feature2")}</h3>
          <p className="text-sm text-gray-500 font-heebo">
          {t("text2")}
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
          {t("buttonText")}
          </button>
        </div>

        {/* Kart 3 */}
        <div className="space-y-5">
          <FaUtensils className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">{t("feature3")}</h3>
          <p className="text-sm text-gray-500 font-heebo">
          {t("text3")}
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
          {t("buttonText")}
          </button>
        </div>
      </div>
    </section>
  );
}