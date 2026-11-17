import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { BLOG_ARTICLES } from "@/lib/constants/blog";

const Blog = () => {
  usePageMeta({
    title: "Cleaning Guides",
    description:
      "Plain-language cleaning advice from Team Sudda: how to prepare for a clean, what disinfection really does and how to choose a cleaning company.",
    path: "/blog",
  });

  const featured = BLOG_ARTICLES[0];
  const rest = BLOG_ARTICLES.slice(1);

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="gradient-hero pt-28 pb-16">
        <div className="container-x text-center text-white">
          <span className="eyebrow">Our Blog</span>
          <h1 className="heading-xl font-display font-extrabold mt-4">
            Cleaning Tips & <span className="text-yellow-brand">Insights.</span>
          </h1>
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Expert advice on keeping your home and workplace spotless - from the Team Sudda
            professionals.
          </p>
        </div>
      </section>

      <div className="container-x py-14">
        {/* Featured article */}
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid md:grid-cols-2 gap-8 bg-background rounded-3xl border border-border shadow-card-soft overflow-hidden hover:border-yellow-brand transition-colors mb-12"
        >
          <div className="aspect-video md:aspect-auto bg-navy flex items-center justify-center p-10">
            <div className="text-center">
              <div className="inline-block bg-yellow-brand text-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {featured.category}
              </div>
              <div className="text-6xl text-white/10 font-display font-extrabold">Featured</div>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block bg-yellow-brand/10 text-yellow-ink text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">
              {featured.category}
            </span>
            <h2 className="heading-md font-display text-navy group-hover:text-yellow-ink transition-colors">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {featured.readTime}
              </span>
              <span>
                {new Date(featured.date).toLocaleDateString("en-LK", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2 text-navy font-semibold text-sm group-hover:text-yellow-ink transition-colors">
              Read Article <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* Rest of articles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group bg-background rounded-2xl border border-border shadow-card-soft overflow-hidden hover:border-yellow-brand transition-colors flex flex-col"
            >
              <div className="bg-navy aspect-video flex items-center justify-center p-6">
                <span className="text-yellow-brand text-xs font-bold uppercase tracking-widest">
                  {article.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="inline-block bg-yellow-brand/10 text-yellow-ink text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit mb-3">
                  {article.category}
                </span>
                <h3 className="font-display font-bold text-navy text-base leading-snug group-hover:text-yellow-ink transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.readTime}
                  </span>
                  <span>
                    {new Date(article.date).toLocaleDateString("en-LK", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
