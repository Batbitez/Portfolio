import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="max-w-xl mx-auto">
        <div className="flex flex-col gap-4 text-lg">
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
          className="bg-charcoal border-white border hover:bg-black text-white py-2 px-10 m-6 rounded"
        >
          View My Work
        </button>
      </div>

      <div className="mt-16 bg-charcoal py-6">
        <h1 className="font-display text-4xl">Ongoing Projects</h1>
        <div className="flex items-center justify-between max-w-xl mx-auto mt-4">
          <div className="flex flex-col">
            image
            <p>Witch of Sugar Creek</p>
          </div>
          <div className="flex flex-col">
            image
            <p>Last Seen Online</p>
          </div>
        </div>
      </div>
    </main>
  );
}
