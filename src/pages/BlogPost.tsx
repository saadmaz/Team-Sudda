import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { useSEO } from "@/hooks/useSEO";
import { BLOG_ARTICLES } from "@/lib/constants/blog";
import { CONTACT } from "@/lib/constants/contact";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  const related = BLOG_ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  const seoTitle = article ? `${article.title} — Team Sudda Blog` : "Article Not Found";
  const seoDesc = article?.excerpt ?? "";

  useSEO({ title: seoTitle, description: seoDesc });

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article header */}
      <section className="gradient-hero pt-28 pb-16">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-yellow-brand transition-colors text-sm mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="inline-block bg-yellow-brand text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="heading-lg font-display text-white font-extrabold">{article.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readTime}</span>
            <span>{new Date(article.date).toLocaleDateString("en-LK", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>By Team Sudda</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <div className="container-x max-w-3xl py-14">
        <div className="prose prose-slate max-w-none">
          {article.body.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-5 text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA box */}
        <div className="mt-12 bg-navy text-white rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl">Ready for a Professional Clean?</h3>
            <p className="mt-2 text-white/70 text-sm">Team Sudda serves Colombo, Kandy, Gampaha, Galle and Negombo. Get a free quote today.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Button asChild variant="hero">
              <Link to="/book">Book Now</Link>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
            </Button>
          </div>
        </div>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display font-bold text-2xl text-navy mb-6">More Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group bg-muted/40 rounded-2xl p-6 border border-border hover:border-yellow-brand transition-colors"
                >
                  <span className="text-[10px] font-bold text-yellow-brand uppercase tracking-widest">{a.category}</span>
                  <h3 className="mt-2 font-display font-bold text-navy group-hover:text-yellow-brand transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-sm text-navy font-medium">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default BlogPost;
