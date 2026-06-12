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
      <header className="border-b-2 border-ink px-6 pt-24 pb-16 lg:pt-32 lg:pb-20 bg-paper text-center">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-colors mb-12">
            <span className="text-lg leading-none">←</span> Geri Dön
          </Link>
          
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-8">
            <span className="bg-ink text-white px-3 py-1">{post.category}</span>
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-ink rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="font-display text-[clamp(3rem,6vw,6rem)] uppercase leading-[1.05] tracking-tighter mb-8 text-pretty mx-auto">
            {post.title}
          </h1>
          
          <p className="text-xl lg:text-2xl font-medium opacity-80 leading-relaxed max-w-3xl mx-auto text-pretty">
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Author & Share Strip */}
      <div className="border-b-2 border-ink bg-white px-6 py-6 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-ink bg-paper flex items-center justify-center font-display text-2xl uppercase">
              {post.author[0]}
            </div>
            <div className="text-left">
              <div className="font-bold uppercase text-sm">{post.author}</div>
              <div className="text-xs opacity-70 uppercase tracking-widest mt-0.5 text-accent">Breles Editörü</div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-white transition-colors">X'te Paylaş</button>
            <button className="flex-1 sm:flex-none border-2 border-ink px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-colors">LinkedIn</button>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 lg:py-24 max-w-3xl mx-auto">
        <div className="max-w-none">
          {/* A simple Markdown parser substitute since we just have headers and text in mock data */}
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="font-display text-3xl lg:text-5xl uppercase tracking-tighter leading-[1.1] mt-16 mb-8">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="ml-4 mb-3 text-xl leading-relaxed text-ink/80 font-medium" dangerouslySetInnerHTML={{ __html: paragraph.replace('- ', '').replace(/\*(.*?)\*/g, '<strong class="text-ink font-bold">$1</strong>') }} />;
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
              return <li key={index} className="ml-4 mb-3 text-xl leading-relaxed text-ink/80 font-medium" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*(.*?)\*/g, '<strong class="text-ink font-bold">$1</strong>') }} />;
            }
            if (paragraph.trim() === '') return null;
            return <p key={index} className="text-xl lg:text-2xl leading-relaxed mb-8 text-ink/80 font-medium text-pretty" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*(.*?)\*/g, '<strong class="text-ink font-bold">$1</strong>') }} />;
          })}
        </div>
      </div>
    </article>
  );
}
