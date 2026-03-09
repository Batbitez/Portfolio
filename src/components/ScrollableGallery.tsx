import { useEffect, useRef, useState, type MouseEvent } from "react";
import React from "react";
import Lightbox from "./Lightbox";

interface ScrollableGalleryProps {
  images: string[]; // thumbnails
  alt?: string;
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({
  images,
  alt,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Map thumbnails → full-size images
  const imagePairs = images.map((thumb) => ({
    thumb,
    full: thumb.replace("/thumb/", "/full/"),
  }));

  useEffect(() => {
    // preload full-size images in the background
    imagePairs.forEach((img) => {
      const preloaded = new Image();
      preloaded.src = img.full;
    });
  }, [imagePairs]);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagePairs.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === imagePairs.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {imagePairs.map((img, i) => (
          <div
            key={i}
            className="shrink-0 snap-start rounded-lg overflow-hidden w-[40%] max-w-150 cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={img.thumb}
              alt={alt || `Image ${i + 1}`}
              className="w-full h-full object-contain select-none"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Lightbox with navigation */}
      <Lightbox
        isOpen={lightboxOpen}
        images={imagePairs.map((img) => img.full)}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={prevImage}
        onNext={nextImage}
        alt={alt}
      />
    </>
  );
};

export default ScrollableGallery;
