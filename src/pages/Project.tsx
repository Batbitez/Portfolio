import { useParams } from "react-router";
import { projects } from "../data/projects";
import ScrollableGallery from "../components/ScrollableGallery";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="text-center mt-20">Project not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid md:grid-cols-[3fr_1fr] gap-12">
        {/* RIGHT COLUMN INFO */}
        <aside className="space-y-6 order-1 md:order-2">
          <h1 className="text-4xl font-bold mb-6 font-display">
            {project.title}
          </h1>
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-sm text-light-gray uppercase tracking-widest">
                Links
              </h3>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border rounded-full text-sm hover:bg-white hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-lg leading-relaxed mb-10">{project.description}</p>
          <div>
            <h3 className="text-sm text-light-gray uppercase tracking-widest">
              Role
            </h3>
            <p>{project.role}</p>
          </div>
          <div>
            <h3 className="text-sm text-light-gray uppercase tracking-widest">
              Year
            </h3>
            <p>{project.year}</p>
          </div>
          <div>
            <h3 className="text-sm text-light-gray uppercase tracking-widest">
              Tools Used
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2 justify-center">
              {project.tools.map((tool, i) => (
                <li key={i} className="px-3 py-1 border rounded-full text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* LEFT COLUMN GALLERIES */}
        <div className="order-2 md:order-1">
          {project.youtubeId && (
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Trailer</h2>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={`${project.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </section>
          )}
          {project.galleries?.map((gallery, i) => (
            <section key={i} className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">{gallery.title}</h2>
              <ScrollableGallery images={gallery.images} alt={project.title} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
