import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dagitim-agi")({
  head: () => ({
    meta: [
      { title: "Küresel Dağıtım Ağı | Breles" },
      { name: "description", content: "Haberlerinizi 4.500'den fazla premium yayına, Bloomberg ve AP News dahil olmak üzere doğrudan iletiyoruz." },
      { property: "og:url", content: "https://basin-bulteni.com/dagitim-agi" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com/dagitim-agi" },
    ],
  }),
  component: DagitimAgi,
});

function DagitimAgi() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <header className="border-b-2 border-ink px-6 py-24 bg-ink text-paper">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-16">
          <div className="flex-1">
            <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Network Haritası
            </div>
            <h1 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-8">
              4.500+ Yayın.<br />Doğrudan Bağlantı.
            </h1>
            <p className="text-xl font-medium opacity-80 leading-snug">
              Aracıları ortadan kaldırdık. Bülteninizi doğrudan gazetecilerin çalışma masalarına, haber terminallerine ve premium finans sitelerine düşürüyoruz.
            </p>
          </div>
          <div className="w-full md:w-1/3 aspect-square border-2 border-paper/20 rounded-full flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent)_0%,transparent_70%)] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="font-display text-8xl lg:text-9xl text-white relative z-10 animate-pulse">
              180
            </div>
            <div className="absolute bottom-1/4 text-xs font-bold uppercase tracking-widest text-white/50 relative z-10">
              Ülke Kapsamı
            </div>
          </div>
        </div>
      </header>

      {/* Tier 1 Outlets */}
      <section className="px-6 py-24 border-b-2 border-ink bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl uppercase leading-[0.95] mb-16">
            Sadece En İyiler.
          </h2>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60">
            {["Bloomberg", "The Wall Street Journal", "Reuters", "AP News", "Yahoo Finance", "MarketWatch", "Benzinga", "Morningstar", "Business Insider"].map((brand) => (
              <div key={brand} className="font-display text-3xl lg:text-5xl uppercase tracking-tighter hover:text-accent hover:opacity-100 transition-all cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="px-6 py-24 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-white">
            {[
              { n: "1.2K+", l: "Finansal Terminal ve Borsa" },
              { n: "800+", l: "Teknoloji ve Web3 Siteleri" },
              { n: "1.5K+", l: "Yerel ve Ulusal Gazeteler" },
              { n: "1K+", l: "Tüketici ve Yaşam Tarzı" },
            ].map((stat, i) => (
              <div key={stat.l} className={`p-8 ${i < 3 ? "lg:border-r-2" : ""} ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < 2 ? "border-b-2 lg:border-b-0" : ""} border-ink text-center flex flex-col justify-center items-center`}>
                <div className="font-display text-6xl text-accent mb-4">{stat.n}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="px-6 py-24 border-t-2 border-ink text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl uppercase leading-[0.95] mb-8">
            Markanız bu listede olmayı hak ediyor.
          </h2>
          <p className="text-lg font-medium opacity-80 mb-10">
            Haberinizin hangi yayınlara gideceğini görmek için uzmanlarımızdan tam bir medya hedef listesi isteyin.
          </p>
          <a href="/iletisim" className="inline-block bg-accent text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-ink transition-colors">
            Örnek Liste Talep Et
          </a>
        </div>
      </section>
    </div>
  );
}
