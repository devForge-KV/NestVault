import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const ImageGallery = ({
  images = [],
  image = "",
  badge = "",
  title = "",
  isLoading = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const galleryList =
    Array.isArray(images) && images.length > 0 ? images : image ? [image] : [];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1));
  };

  if (isLoading || galleryList.length === 0) {
    return (
      <div className="w-full space-y-3">
        <div className="w-full h-[320px] sm:h-[420px] md:h-[480px] bg-slate-900 animate-pulse rounded-2xl border border-slate-800" />
        <div className="grid grid-cols-5 gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-20 bg-slate-900 animate-pulse rounded-xl border border-slate-800"
            />
          ))}
        </div>
      </div>
    );
  }

  const maxThumbnails = 4;
  const visibleThumbnails = galleryList.slice(0, maxThumbnails);
  const extraCount = galleryList.length - maxThumbnails;

  return (
    <div className="w-full space-y-3">
      {}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900 group shadow-2xl">
        <img
          src={galleryList[currentIndex]}
          alt={`${title} - view ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/50 pointer-events-none" />

        {}
        {badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs font-semibold rounded-md bg-[#E5A638] text-slate-950 uppercase tracking-wider shadow-md">
              {badge}
            </span>
          </div>
        )}

        {}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-slate-700/60 hover:bg-slate-900 text-white transition-all duration-200 shadow-lg cursor-pointer"
          aria-label="Save to favorites"
        >
          {isFavorite ? (
            <FaHeart className="w-5 h-5 text-rose-500" />
          ) : (
            <FiHeart className="w-5 h-5 text-slate-200" />
          )}
        </button>

        {}
        {galleryList.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/60 text-white hover:bg-slate-900 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg cursor-pointer"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/60 text-white hover:bg-slate-900 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 shadow-lg cursor-pointer"
              aria-label="Next image"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {}
      {galleryList.length > 1 && (
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {visibleThumbnails.map((imgUrl, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                currentIndex === idx
                  ? "border-[#E5A638] ring-2 ring-[#E5A638]/20 opacity-100"
                  : "border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={imgUrl}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

          {extraCount > 0 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex(maxThumbnails)}
              className="relative h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden border border-slate-800 group cursor-pointer"
            >
              <img
                src={galleryList[maxThumbnails]}
                alt="More photos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-white">
                <span className="text-sm sm:text-base font-bold text-[#E5A638]">
                  +{extraCount}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-medium">
                  Photos
                </span>
              </div>
            </button>
          ) : galleryList[maxThumbnails] ? (
            <button
              type="button"
              onClick={() => setCurrentIndex(maxThumbnails)}
              className={`relative h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                currentIndex === maxThumbnails
                  ? "border-[#E5A638] ring-2 ring-[#E5A638]/20 opacity-100"
                  : "border-slate-800 hover:border-slate-600 opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={galleryList[maxThumbnails]}
                alt="Thumbnail 5"
                className="w-full h-full object-cover"
              />
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
