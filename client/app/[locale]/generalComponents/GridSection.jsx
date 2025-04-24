import React from 'react'
import img1 from "@/public/rooms/single4.jpg"
import Image from 'next/image'

const GridSection = () => {
  return (
    <div className='flex w-screen items-center justify-center bg-irenicGray py-[25px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[96%] gap-[10px] md:gap-[20px] lg:gap-[30px] text-[14px] lg:text-[16px] font-heebo uppercase leading-[14px] tracking-[1px] text-white'>
        {["Rooms","Restaurant","Pool","Lobby Bar"].map((label, i) => (
          <div 
            key={i}
            className="group relative w-full min-h-[220px] max-h-[250px] overflow-hidden"  /* sabit yükseklik örneği */
          >
            {/* resim kapsayıcı: overflow-hidden */}
            <div className="w-full h-full transform transition-transform duration-500 ease-out
                            group-hover:scale-120 group-hover:rotate-2">
              <Image 
                src={img1} 
                alt={label} 
                width={img1.width}
                height={img1.height} 
                className="object-cover" 
              />
            </div>
            {/* üzerine binmiş yazı */}
            <span className='absolute top-[50%] left-[50%] -translate-y-[50%]  -translate-x-[50%] flex items-center justify-center bg-black/50 text-white px-[16px] py-[8px]'>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GridSection
