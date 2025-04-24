import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const OtherOptions = () => {
    const rooms = [
        {
          slug: 'deluxe-room',
          title: 'Deluxe Room',
          price: 120,
          capacity: '2 Adults',
          size: '20 m²',
          cover: '/rooms/deluxe/cover.webp',
          images: [
            '/rooms/deluxe/1.webp',
            '/rooms/deluxe/2.webp',
            '/rooms/deluxe/3.webp',
          ],
        },
        {
          slug: 'corner-room',
          title: 'Corner Room',
          price: 160,
          capacity: '3 Adults',
          size: '30 m²',
          cover: '/rooms/corner/cover.webp',
          images: [
            '/rooms/corner/1.webp',
            '/rooms/corner/2.webp',
            '/rooms/corner/3.webp',
          ],
        },
        {
          slug: 'jacuzzi-suite',
          title: 'Jacuzzi Suite',
          price: 220,
          capacity: '2 Adults',
          size: '30 m²',
          cover: '/rooms/jacuzzi/cover.webp',
          images: [
            '/rooms/jacuzzi/1.webp',
            '/rooms/jacuzzi/2.webp',
            '/rooms/jacuzzi/3.webp',
          ],
        },
        // … diğer odalar
      ];

  return (
    <div>
        <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {rooms.map((room) => (
            <article
              key={room.slug}
              className="break-inside-avoid relative group cursor-pointer"
            >
              <Image
                src={room.cover}
                alt={room.title}
                width={600}
                height={800}
                className="w-full rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-heading text-xl">{room.title}</h3>
                <p className="text-neutral-100 text-sm">
                  {room.size} • {room.capacity}
                </p>
                <span className="mt-4 inline-block bg-white text-neutral-900 px-4 py-2 rounded-full text-sm font-medium">
                  from ${room.price}
                </span>
              </div>
              <Link href={`/rooms/${room.slug}`} className="absolute inset-0">
                <span className="sr-only">Go to {room.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default OtherOptions
