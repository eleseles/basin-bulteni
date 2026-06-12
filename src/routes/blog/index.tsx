import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "../../lib/blog-data";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog ve Kaynaklar | Breles" },
      { name: "description", content: "Basın bülteni yazımı, PR stratejileri ve medya ilişkileri hakkında uzman rehberleri, saha notları ve veri analizleri." },
      { property: "og:url", content: "https://basin-bulteni.com/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com/blog" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <header className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Masadan Notlar
            </div>
            <h1 className="font-display text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-6">
              PR<br />Araştırmaları
            </h1>
            <p className="text-xl font-medium opacity-80 max-w-lg">
              Eski haber merkezi editörlerimizden ve ajans uzmanlarımızdan basın bülteni stratejileri, vaka çalışmaları ve sektör verileri.
            </p>
          </div>
          
          <div className="hidden md:flex gap-4">
            {["Tümü", "Rehber", "Saha Notları", "Veri"].map((cat) => (
              <button key={cat} className="border-2 border-ink px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-ink hover:text-white transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Featured / Latest Post (First item) */}
      <section className="border-b-2 border-ink grid lg:grid-cols-2">
        <div className="p-12 lg:p-24 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-ink">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-8">
            <span>{blogPosts[0].category}</span>
            <span className="w-1 h-1 bg-ink rounded-full"></span>
            <span>{blogPosts[0].date}</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl uppercase leading-[0.95] mb-6">
            <Link to="/blog/$slug" params={{ slug: blogPosts[0].slug }} className="hover:text-accent transition-colors">
              {blogPosts[0].title}
            </Link>
          </h2>
          <p className="text-lg font-medium opacity-80 mb-10 max-w-xl">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full border-2 border-ink bg-paper flex items-center justify-center font-display text-xl uppercase">
              {blogPosts[0].author[0]}
            </div>
            <div>
              <div className="font-bold uppercase text-sm">{blogPosts[0].author}</div>
              <div className="text-xs opacity-60 uppercase tracking-widest">{blogPosts[0].readTime}</div>
            </div>
          </div>
        </div>
        <div className="bg-ink flex items-center justify-center p-12 overflow-hidden relative group">
          <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
          <div className="font-display text-[12rem] lg:text-[18rem] text-paper opacity-5 leading-none absolute -right-12 -bottom-12 select-none group-hover:scale-110 transition-transform duration-700">
            PR
          </div>
          <div className="relative z-20 text-center">
             <Link to="/blog/$slug" params={{ slug: blogPosts[0].slug }} className="inline-block border-2 border-paper text-paper px-8 py-4 font-bold uppercase tracking-widest hover:bg-paper hover:text-ink transition-colors">
               Makaleyi Oku →
             </Link>
          </div>
        </div>
      </section>

      {/* Grid Posts */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {blogPosts.slice(1).map((post) => (
              <article key={post.slug} className="group flex flex-col h-full border-2 border-transparent hover:border-ink p-8 transition-colors -m-8">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-70 mb-6">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-ink rounded-full"></span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-display text-3xl uppercase leading-[0.95] mb-4 group-hover:text-accent transition-colors">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="font-medium opacity-80 mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t-2 border-ink group-hover:border-paper/20">
                  <span className="font-bold uppercase text-sm flex-grow">{post.author}</span>
                  <Link to="/blog/$slug" params={{ slug: post.slug }} className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-accent">
                    Oku <span className="text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="border-t-2 border-ink bg-paper px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block border-2 border-ink px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 bg-white">
            Breles Bülteni
          </div>
          <h2 className="font-display text-5xl uppercase leading-[0.95] mb-8">
            PR zekasını doğrudan gelen kutunuza alın.
          </h2>
          <form className="flex flex-col sm:flex-row gap-0 border-2 border-ink max-w-xl mx-auto bg-white" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="siz@sirketiniz.com"
              className="flex-1 bg-transparent px-6 py-4 placeholder:text-ink/40 focus:outline-none font-medium"
            />
            <button type="submit" className="bg-ink text-paper px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors">
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
