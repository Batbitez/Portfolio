import { Link } from "react-router";

interface GalleryProps {
  images: { src: string; alt?: string; title?: string; link?: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div className="container mx-auto p-4">
    <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="break-inside-avoid rounded-lg overflow-hidden shadow-lg"
        >
          <Link to={img.link || "#"} className="group relative block">
            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-4xl font-medium text-center px-4 bg-gray-900/50 backdrop-blur-sm">
                {img.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
