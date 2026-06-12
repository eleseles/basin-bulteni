import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { blogPosts } from "../../lib/blog-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params: { slug } }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Breles Blog" }]
      };
    }

    return {
      meta: [
        { title: `${loaderData.title} | Breles Blog` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:url", content: `https://basin-bulteni.com/blog/${loaderData.slug}` },
      ],
      links: [
        { rel: "canonical", href: `https://basin-bulteni.com/blog/${loaderData.slug}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": loaderData.title,
            "description": loaderData.excerpt,
            "author": {
              "@type": "Person",
              "name": loaderData.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Breles Dağıtım A.Ş.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://basin-bulteni.com/logo.png"
              }
            },
            "datePublished": loaderData.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://basin-bulteni.com/blog/${loaderData.slug}`
            }
          })
        }
      ]
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="bg-white min-h-screen">
      <header className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-colors mb-12">
            <span className="text-lg leading-none">←</span> Geri Dön
          </Link>
          
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-6">
            <span className="bg-ink text-paper px-2 py-1">{post.category}</span>
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-ink rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-8 text-pretty">
            {post.title}
          </h1>
          
          <p className="text-xl lg:text-2xl font-medium opacity-80 leading-snug">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="px-6 py-16 grid lg:grid-cols-[1fr_300px] gap-16 max-w-6xl mx-auto">
        <div className="prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-accent font-medium opacity-90 max-w-none">
          {/* A simple Markdown parser substitute since we just have headers and text in mock data */}
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-3xl mt-12 mb-6">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-4 mb-2">{paragraph.replace('- ', '').replace(/\*(.*?)\*/g, '<strong>$1</strong>')}</li>;
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
              return <li key={index} className="ml-4 mb-2 font-bold">{paragraph.replace(/\*(.*?)\*/g, '$1')}</li>;
            }
            if (paragraph.trim() === '') return null;
            return <p key={index} className="mb-6">{paragraph.replace(/\*(.*?)\*/g, '<strong>$1</strong>')}</p>;
          })}
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          {/* Author Block */}
          <div className="border-2 border-ink p-6 bg-paper">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Yazar</div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-ink bg-white flex items-center justify-center font-display text-3xl uppercase">
                {post.author[0]}
              </div>
              <div>
                <div className="font-bold uppercase text-lg">{post.author}</div>
                <div className="text-xs opacity-60 uppercase tracking-widest">Breles Editörü</div>
              </div>
            </div>
          </div>

          {/* Share Block */}
          <div className="border-2 border-ink p-6">
            <div className="text-xs font-bold uppercase tracking-widest opacity-50 mb-6">Paylaş</div>
            <div className="flex gap-4">
              <button className="flex-1 border-2 border-ink py-2 font-bold text-sm uppercase hover:bg-accent hover:border-accent hover:text-white transition-colors">X</button>
              <button className="flex-1 border-2 border-ink py-2 font-bold text-sm uppercase hover:bg-accent hover:border-accent hover:text-white transition-colors">In</button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
