import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useSEO } from "@/hooks/useSEO";
import { GALLERY_PROJECTS, GALLERY_CATEGORIES, type GalleryCategory, type GalleryProject } from "@/lib/constants/gallery";

const GalleryPage = () => {
  useSEO({
    title: "Project Gallery - Team Sudda",
    description:
      "Browse our portfolio of completed cleaning projects - commercial offices, homes, post-renovation and event cleanups across Sri Lanka.",
  });

  const [searchParams] = useSearchParams();
  const initialCategory = (() => {
    const param = searchParams.get("category");
    if (param && (GALLERY_CATEGORIES as readonly string[]).includes(param)) return param as GalleryCategory;
    return "All";
  })();

  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "All">(initialCategory);
  const [lightbox, setLightbox] = useState<GalleryProject | null>(null);
  const [lightboxView, setLightboxView] = useState<"before" | "after">("after");

  const filtered =
    activeCategory === "All"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="gradient-hero pt-28 pb-16">
        <div className="container-x text-center text-white">
          <span className="eyebrow">Our Work</span>
          <h1 className="heading-xl font-display font-extrabold mt-4">
            Before & After - <span className="text-yellow-brand">Real Results.</span>
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Every project tells a story. Browse our completed jobs across Sri Lanka.
          </p>
        </div>
      </section>

      <div className="container-x py-14">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {(["All", ...GALLERY_CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all ${
                activeCategory === cat
                  ? "bg-navy border-navy text-white"
                  : "bg-background border-border text-navy hover:border-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border shadow-card-soft hover:border-yellow-brand transition-all hover:-translate-y-1 cursor-pointer"
              onClick={() => { setLightbox(project); setLightboxView("after"); }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.after}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-yellow-brand text-navy text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-navy/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Click to expand
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy">{project.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{project.location}</p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-background rounded-3xl overflow-hidden max-w-3xl w-full shadow-navy-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={lightboxView === "after" ? lightbox.after : lightbox.before}
                alt={lightbox.title}
                className="w-full aspect-video object-cover"
              />
              <button
                aria-label="Close lightbox"
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 h-9 w-9 rounded-full bg-navy/80 text-white grid place-items-center hover:bg-navy transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              {/* Before / After toggle */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex rounded-full bg-navy/80 backdrop-blur-sm p-1 gap-1">
                {(["before", "after"] as const).map((v) => (
                  <button
                    key={v}
                    aria-pressed={lightboxView === v}
                    onClick={() => setLightboxView(v)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                      lightboxView === v ? "bg-yellow-brand text-navy" : "text-white hover:text-yellow-brand"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold text-yellow-brand uppercase tracking-widest">{lightbox.category} · {lightbox.location}</span>
              <h3 className="font-display font-bold text-xl text-navy mt-1">{lightbox.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default GalleryPage;
