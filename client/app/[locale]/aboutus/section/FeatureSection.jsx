import { FaCocktail, FaSwimmingPool, FaUtensils } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-12">
      {/* Başlık */}
      <div className="text-center mb-16">
        <p className="text-sm text-gray-400 tracking-wide uppercase font-heebo">A Bit About Us</p>
        <h2 className="text-3xl sm:text-4xl font-bold font-montserrat text-gray-800 mt-2">Finest Hotel</h2>
      </div>

      {/* 3'lü Kart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        {/* Kart 1 */}
        <div className="space-y-5">
          <FaCocktail className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">Welcome Drink</h3>
          <p className="text-sm text-gray-500 font-heebo">
            Enjoy a complimentary welcome drink as you check into your unforgettable stay.
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
            Read More
          </button>
        </div>

        {/* Kart 2 */}
        <div className="space-y-5">
          <FaSwimmingPool className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">Swimming Pool</h3>
          <p className="text-sm text-gray-500 font-heebo">
            Take a dip in our refreshing outdoor pool available daily from 08:00 to 18:00.
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
            Read More
          </button>
        </div>

        {/* Kart 3 */}
        <div className="space-y-5">
          <FaUtensils className="text-4xl mx-auto text-irenicBlack" />
          <h3 className="text-xl font-semibold font-montserrat text-gray-800">Food Included</h3>
          <p className="text-sm text-gray-500 font-heebo">
            Start your day with a rich breakfast included in your stay, every morning.
          </p>
          <button className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}