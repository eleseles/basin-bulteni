import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/basari-hikayeleri")({
  head: () => ({
    meta: [
      { title: "Başarı Hikayeleri | Breles" },
      { name: "description", content: "Breles ile dağıtılan basın bültenlerinin yarattığı gerçek medya etkisi ve vaka çalışmaları." },
      { property: "og:url", content: "https://basin-bulteni.com/basari-hikayeleri" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com/basari-hikayeleri" },
    ],
  }),
  component: BasariHikayeleri,
});

function BasariHikayeleri() {
  const cases = [
    {
      company: "Velos Labs",
      industry: "Yapay Zeka / SaaS",
      title: "12 Saatte Gizlilikten 3.4 Milyon Okuyucuya",
      metric: "847",
      metricLabel: "Farklı Yayın",
      content: "Seri B yatırım turlarını duyurmak isteyen Velos Labs, geleneksel ajansların 2 haftalık onay süreçleri yerine Breles'i tercih etti. Ambargo özelliği ile Cuma sabahı 09:00'da eşzamanlı yayınlanan haber, Bloomberg ve TechCrunch dahil 847 farklı yayına ulaştı.",
      color: "bg-ink",
      textColor: "text-white"
    },
    {
      company: "Northwind E-Commerce",
      industry: "Perakende",
      title: "Aynı Sabah Reuters'ta Ana Haber",
      metric: "%412",
      metricLabel: "Trafik Artışı",
      content: "Yılın en büyük kampanya dönemi öncesinde duyurdukları yeni lojistik merkezleri, Breles üzerinden hedeflenen özel gazeteci grubu (Pitch) sayesinde doğrudan Reuters perakende masasının dikkatini çekti. Organik trafikleri 48 saat içinde dört katına çıktı.",
      color: "bg-accent",
      textColor: "text-white"
    },
    {
      company: "Hyperion Inc.",
      industry: "Enerji",
      title: "62 Pazarda Eşzamanlı Yayın",
      metric: "12M",
      metricLabel: "Gösterim",
      content: "Halka arz (IPO) başvurularını küresel finansal terminallere sorunsuz iletmek zorundaydılar. Breles'in doğrudan API'si sayesinde AP ve Yahoo Finance üzerinden yatırımcılara anında ulaştılar. Toplamda 12 milyondan fazla gösterim kaydedildi.",
      color: "bg-paper",
      textColor: "text-ink"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <header className="border-b-2 border-ink px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Ön Sayfalar
          </div>
          <h1 className="font-display text-6xl lg:text-8xl uppercase leading-[0.9] tracking-tighter mb-8">
            Başarı<br />Hikayeleri
          </h1>
          <p className="text-xl font-medium opacity-80 max-w-2xl mx-auto">
            Sadece bülten göndermiyoruz. Şirketleri kendi sektörlerinin en çok konuşulan isimlerine dönüştürüyoruz.
          </p>
        </div>
      </header>

      {/* Case Studies */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto space-y-16 lg:space-y-32">
          {cases.map((c, idx) => (
            <article key={c.company} className="grid lg:grid-cols-[1fr_400px] border-2 border-ink">
              <div className="p-10 lg:p-16 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-white">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-60 mb-8">
                  <span className="bg-ink text-white px-2 py-1">{c.industry}</span>
                  <span>{c.company}</span>
                </div>
                <h2 className="font-display text-4xl lg:text-6xl uppercase leading-[0.9] mb-8 text-pretty">
                  {c.title}
                </h2>
                <p className="text-lg font-medium opacity-80 leading-relaxed mb-8">
                  {c.content}
                </p>
                <div className="mt-auto">
                  <Link to="/basin-bulteni-paketleri" className="inline-block font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">
                    Hemen Başla →
                  </Link>
                </div>
              </div>
              <div className={`p-10 lg:p-16 flex flex-col justify-center items-center text-center ${c.color} ${c.textColor}`}>
                 <div className="font-display text-7xl lg:text-8xl mb-4">{c.metric}</div>
                 <div className="text-sm font-bold uppercase tracking-widest opacity-80">{c.metricLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-ink text-white px-6 py-24 text-center">
        <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9] mb-8">Sıradaki Başarı Hikayesi Siz Olun</h2>
        <Link to="/basin-bulteni-paketleri" className="inline-block bg-accent text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors">
          Paketleri İncele
        </Link>
      </section>
    </div>
  );
}
