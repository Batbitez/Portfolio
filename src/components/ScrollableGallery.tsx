import { useRef, useState, type MouseEvent } from "react";

interface ScrollableGalleryProps {
  images: string[];
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

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="flex-shrink-0 snap-start rounded-lg overflow-hidden w-[80%] max-w-[600px]"
        >
          <img
            src={img}
            alt={alt || `Image ${i + 1}`}
            className="w-full h-full object-contain select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollableGallery;
