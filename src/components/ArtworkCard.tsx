type Props = {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function ArtworkCard({ src, alt, style, className }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={src}
        alt={alt}
        style={style}
        className={`${className} object-cover`}
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-end p-3 text-white">
        <p>Artwork</p>
      </div>
    </div>
  );
}
