// app/rooms/page.tsx
import Image from 'next/image';

// Google fonts (Heebo – gövde, Montserrat – başlık)
import { Heebo, Montserrat } from 'next/font/google';
const body = Heebo({ weight: ['400','500'], subsets: ['latin'], variable: '--font-body' });
const heading = Montserrat({ weight: ['700','800'], subsets: ['latin'], variable: '--font-heading' });

export const metadata = { title: 'Rooms | Irenic Hotel' };



export default function RoomsPage() {
  return (
    <main className={`${body.variable} ${heading.variable} bg-neutral-50`}>
      {/* Hero */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src="/images/hero-rooms.jpg"
          alt="Rooms hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white font-heading text-4xl md:text-5xl tracking-wider uppercase">
            Our Rooms
          </h1>
        </div>
      </section>

      {/* Masonry Gallery */}
    
    </main>
  );
}
