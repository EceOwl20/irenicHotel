// app/[locale]/rooms/subrooms/[slug]/page.jsx
import { notFound } from 'next/navigation';
import RoomDetailSection from '../../components/RoomDetailSection';
import { subrooms } from '@/public/data/subrooms';

export async function generateStaticParams() {
  return subrooms.map((room) => ({
    slug: room.slug,
    // locale: 'tr' veya 'en' eklemeniz gerekmez, Next.js i18n otomatik halleder
  }));
}

export default function SubroomPage({ params }) {
  const { slug } = params;
  const room = subrooms.find((r) => r.slug === slug);
  if (!room) return notFound();

  return (
    <RoomDetailSection
      images={room.images}
      description={room.description}
      overview={room.overview}
      features={room.features}
    />
  );
}
