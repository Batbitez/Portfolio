import { useNavigate } from "react-router";

const base = import.meta.env.BASE_URL;

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col gap-4 text-lg px-4">
          <h1 className="font-display text-4xl">Game Artist & Illustrator</h1>
          <p>
            I'm a 3D modeler and 2D artist passionate about creating immersive
            game worlds, memorable characters, and engaging visuals that bring
            games to life.
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/portfolio");
          }}
          className="bg-charcoal border-white border hover:bg-black text-white py-2 px-10 m-6 rounded-full transition hover:scale-110 cursor-pointer"
        >
          View My Work
        </button>
      </div>

      <div className="mt-16 bg-charcoal py-6">
        <h1 className="font-display text-4xl">Ongoing Projects</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start justify-center max-w-full mx-auto mt-4 px-4">
          {/* First Image */}
          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <div
              onClick={() => navigate("/portfolio/wosc")}
              className="relative group cursor-pointer w-full"
            >
              <img
                src={`${base}images/art/3d/Witch/WitchModel.png`}
                alt="Witch of Sugar Creek"
                className="w-full h-auto sm:h-60 sm:w-auto max-w-full rounded transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <p className="text-white text-xl sm:text-2xl text-center px-4">
                  The Witch of Sugar Creek
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full sm:w-auto">
            <div
              onClick={() => navigate("/portfolio/lso")}
              className="relative group cursor-pointer w-full"
            >
              <img
                src={`${base}images/art/2d/LastSeenOnline/Room.jpg`}
                alt="Last Seen Online"
                className="w-full h-auto sm:h-60 sm:w-auto max-w-full rounded transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded">
                <p className="text-white text-xl sm:text-2xl text-center px-4">
                  Last Seen Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
