import React from 'react'

const SubBanner = ({img,header}) => {
  return (
    <div className="relative w-full h-[60vh] mb-12">
    {/* Arka plan görseli */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${img.src})` }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Başlık */}
    <div className="relative z-10 flex items-center justify-center h-full px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat text-center">
      {header}
      </h1>
    </div>
  </div>
  )
}

export default SubBanner
