import Image from "next/image";

export default function RoomCard() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Görsel */}
      <div className="relative w-full h-64">
        <Image
          src="/images/rooms/suite.jpg" // kendi görsel yolun
          alt="Suite Tanya"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-4 left-4 text-white text-sm font-semibold">
          SUITE TANYA
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">
            ★★★★★
          </span>
        </div>
      </div>

      {/* İçerik */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Pool Suite</h3>
        <p className="text-gray-500 text-sm mb-4">
          Discover the comfort and style of our Pool Suite. A perfect blend of luxury and privacy.
        </p>
        <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800">
          BOOK FROM 130$
        </button>

        {/* İkonlar */}
        <div className="flex justify-between items-center mt-4 text-gray-400 text-xl">
          <i className="ri-pool-line" />
          <i className="ri-sofa-line" />
          <i className="ri-ship-line" />
          <i className="ri-no-smoking-line" />
        </div>

        {/* Alt link */}
        <div className="text-right mt-2">
          <span className="text-sm text-gray-500 hover:underline cursor-pointer">
            FULL INFO
          </span>
        </div>
      </div>
    </div>
  );
}