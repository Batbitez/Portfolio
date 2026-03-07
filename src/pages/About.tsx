export default function About() {
  return (
    <div className="max-w-4xl mx-auto flex justify-between items-center mb-24">
      <div>
        <img
          src="/images/ui/Portrait.jpg"
          alt="Profile"
          className="h-150 w-auto rounded-full"
        />
      </div>

      <div className="w-sm gap-4 flex flex-col text-md text-left">
        <p>
          I'm a 2D and 3D artist passionate about creating characters and worlds
          that people connect with. As a cosplayer myself, I especially enjoy
          designing characters that others would love to bring to life. Growing
          up on cozy games like The Sims and Animal Crossing, I gravitate toward
          charming, character-driven experiences, often with a spookier
          aesthetic twist.
        </p>
        <p>
          Much of my inspiration comes from designing Dungeons & Dragons
          characters, fueling my love for fantasy art and imaginative
          storytelling. My fascination with 3D work began at Loyalist College in
          the Animation and Game Design program, and it has since become a core
          focus of my creative work.
        </p>
        <p>
          I am currently developing two personal game projects: The Witch of
          Sugar Creek, a cozy witch simulation RPG, and Last Seen Online, an
          isometric pixel art puzzle game inspired by 2000s aesthetics.
          Alongside game development, I enjoy coding applications and websites,
          including CosplayCompanion.ca, which combines my passion for cosplay
          with practical web design.
        </p>
        <p>
          I aim to craft art and experiences that are visually engaging and
          emotionally resonant, bringing characters and worlds to life in ways
          that inspire players, cosplayers, and fellow creators.
        </p>
      </div>
    </div>
  );
}
