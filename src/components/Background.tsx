export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-charcoal text-white overflow-hidden">
      {/* Radial spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, #2b2b2b 0%, #141414 100%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#444444 1px, transparent 1px),
            linear-gradient(90deg, #444444 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('images/ui/noise.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
