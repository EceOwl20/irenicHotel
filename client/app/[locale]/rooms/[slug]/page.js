// app/[locale]/rooms/[slug]/page.jsx
import { notFound } from 'next/navigation';
import { subrooms } from '@/data/subrooms';
import RoomDetailSection from '../../components/RoomDetailSection';

// hangi slug’lar için page üreteceğimizi bildiriyoruz
export async function generateStaticParams() {
  const locales = ['tr', 'en','de','ru','ae']; 
  return locales.flatMap((locale) =>
    subrooms.map(({ slug }) => ({
      locale,
      slug,
    }))
  );
}


export default function RoomPage({ params }) {
  // const t = useTranslations('subrooms');
  // const array=t(".overview")

  const { slug } = params;
  const roomData = subrooms.find((r) => r.slug === slug);
  if (!roomData) return notFound();
  

  // Burada **sadece** images’ı (ve istersen slug’ı) veriyoruz,
  // metinleri alacak olan Client bileşeni olacak:
  return <RoomDetailSection slug={slug} images={roomData.images}  />;
}
