import React, { useState, useRef, useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  alt?: string;
}

const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  alt,
}) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  // Reset zoom/pan and loader on image change or lightbox open
  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    setLoading(true);
  }, [currentIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onPrev, onNext, onClose]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.min(Math.max(prev + delta, 1), 5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => setDragging(false);
  const handleMouseLeave = () => setDragging(false);

  const handleDoubleClick = () => {
    if (scale === 1) setScale(2);
    else setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full flex items-center justify-center overflow-hidden cursor-grab"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onDoubleClick={handleDoubleClick}
      >
        {/* Previous Arrow */}
        <button
          onClick={onPrev}
          className="absolute left-2 text-white text-4xl font-bold hover:text-gray-300 select-none z-10"
        >
          &#10094;
        </button>

        {/* Full-size Image */}
        <img
          src={images[currentIndex]}
          alt={alt || `Image ${currentIndex + 1}`}
          onLoad={() => setLoading(false)}
          style={{
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            maxHeight: "90vh",
            maxWidth: "100%",
            cursor: scale > 1 ? "grab" : "auto",
            transition: dragging ? "none" : "transform 0.2s ease",
            display: loading ? "none" : "block",
          }}
          className="object-contain rounded shadow-lg select-none"
          draggable={false}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Next Arrow */}
        <button
          onClick={onNext}
          className="absolute right-2 text-white text-4xl font-bold hover:text-gray-300 select-none z-10"
        >
          &#10095;
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300 select-none z-10"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
