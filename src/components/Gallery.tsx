interface GalleryProps {
  images: { src: string; alt?: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="container mx-auto p-4">
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="break-inside-avoid rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={img.src}
            alt={img.alt || `Image ${idx + 1}`}
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
