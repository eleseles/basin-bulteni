import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | Breles" },
      { name: "description", content: "Breles ekibi: Eski haber merkezi editörleri ve ajans mühendislerinin kurduğu yeni nesil basın dağıtım ağı." },
      { property: "og:url", content: "https://basin-bulteni.com/hakkimizda" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com/hakkimizda" },
    ],
  }),
  component: Hakkimizda,
});

function Hakkimizda() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <header className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              Hikayemiz
            </div>
            <h1 className="font-display text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-8">
              Haber<br />merkezinden<br />geldik.
            </h1>
          </div>
          <div className="text-xl lg:text-2xl font-medium opacity-80 leading-snug">
            <p className="mb-6">
              Yıllarca geleneksel PR ajanslarının şişirilmiş fiyatlarla, okunmayan bültenleri spam klasörlerine göndermesini izledik.
            </p>
            <p>
              Breles'i kurduk çünkü gazetecilerin ne istediğini biliyoruz: Net gerçekler, sağlam veri ve doğru zamanda gelen haber.
            </p>
          </div>
        </div>
      </header>

      {/* Manifesto */}
      <section className="px-6 py-24 border-b-2 border-ink bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">Manifestomuz</div>
          <div className="grid md:grid-cols-3 gap-0 border-2 border-ink">
            {[
              { n: "01", t: "Şeffaflık", d: "Fiyatlarımız açık. Hangi sitede ne zaman çıkacağınız belli. Gizli komisyonlar yok." },
              { n: "02", t: "Hız", d: "Eski tip ajanslardaki '2 haftalık hazırlık' süreçlerini siliyoruz. Onaydan 60 dakika sonra terminaldesiniz." },
              { n: "03", t: "Veri", d: "Tahmin yürütmüyoruz. Kesin okunma sayıları, duygu analizi ve SEO backlink raporlarıyla konuşuyoruz." },
            ].map((v, i) => (
               <div key={v.n} className={`p-10 ${i < 2 ? "border-b-2 md:border-b-0 md:border-r-2" : ""} border-ink hover:bg-paper transition-colors`}>
                 <div className="font-display text-6xl text-accent mb-6">{v.n}</div>
                 <h3 className="font-display text-3xl uppercase leading-tight mb-4">{v.t}</h3>
                 <p className="font-medium opacity-80 text-lg">{v.d}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Kurucu Masa</h2>
            <p className="text-lg font-medium opacity-80 max-w-md">Gerçek gazeteciler, veri bilimciler ve sistem mühendislerinden oluşan küresel bir takım.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink bg-white">
            {[
              { n: "Léa Mercier", r: "Genel Yayın Yönetmeni", b: "Reuters" },
              { n: "Daniel Park", r: "Ajans Başkanı", b: "Bloomberg" },
              { n: "Aïsha Bello", r: "Haber Merkezi İlişkileri", b: "AP News" },
              { n: "Tomáš Novák", r: "Mühendislik Lideri", b: "Stripe" },
            ].map((p, i) => (
              <div
                key={p.n}
                className={`p-6 ${i < 3 ? "lg:border-r-2 border-b-2 lg:border-b-0" : ""} ${i === 0 || i === 2 ? "sm:border-r-2" : ""} ${i < 2 ? "sm:border-b-2 lg:border-b-0" : ""} border-ink group`}
              >
                <div className="aspect-square bg-paper border-2 border-ink mb-4 grid place-items-center font-display text-5xl uppercase group-hover:bg-accent group-hover:text-white transition-colors">
                  {p.n.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="font-display text-2xl uppercase leading-tight">{p.n}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mt-1">{p.r}</div>
                <div className="text-xs font-medium uppercase tracking-widest text-accent mt-2">eski–{p.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
