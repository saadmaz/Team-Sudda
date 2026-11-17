import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GALLERY_PROJECTS, GALLERY_CATEGORIES } from "@/lib/constants/gallery";

// Show the first 4 projects as a teaser
const PREVIEW_PROJECTS = GALLERY_PROJECTS.slice(0, 4);

export const GalleryPreview = () => {
  if (PREVIEW_PROJECTS.length === 0) return null;

  return (
    <section className="section bg-muted/40">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow">Our Work</span>
            <h2 className="heading-lg font-display text-navy mt-3">
              Results That <span className="text-[hsl(var(--yellow))]">Speak for Themselves.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              From offices to homes, events to renovations - here's a glimpse of the spaces we've
              transformed.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="shrink-0">
            <Link to="/gallery">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {GALLERY_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              to={`/gallery?category=${cat}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border border-border bg-background text-navy hover:bg-navy hover:text-white hover:border-navy transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PREVIEW_PROJECTS.map((project) => (
            <Link
              key={project.id}
              to="/gallery"
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-card-soft block"
            >
              <img
                src={project.after}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-yellow-brand mb-1">
                  {project.category}
                </span>
                <h3 className="text-white font-display font-bold text-sm leading-tight">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
