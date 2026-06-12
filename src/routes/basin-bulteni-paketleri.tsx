import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/basin-bulteni-paketleri")({
  head: () => ({
    meta: [
      { title: "Basın Bülteni Paketleri ve Fiyatları | Breles" },
      { name: "description", content: "İhtiyacınıza uygun basın bülteni dağıtım paketleri. Standart, Premium ve Ajans paketlerimizi inceleyin." },
      { property: "og:url", content: "https://basin-bulteni.com/basin-bulteni-paketleri" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com/basin-bulteni-paketleri" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Breles Basın Bülteni Dağıtımı",
          "description": "Premium haber yayın organlarına ve finansal terminallere garantili basın bülteni dağıtım hizmeti.",
          "offers": {
            "@type": "AggregateOffer",
            "offerCount": "3",
            "lowPrice": "499",
            "highPrice": "3500",
            "priceCurrency": "USD",
            "offers": [
              {
                "@type": "Offer",
                "name": "Standart Paket",
                "price": "499",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Premium Paket",
                "price": "1250",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Ajans Paketi",
                "price": "3500",
                "priceCurrency": "USD"
              }
            ]
          }
        })
      }
    ]
  }),
  component: BasinBulteniPaketleri,
});

function BasinBulteniPaketleri() {
  return (
    <>
      {/* 2. Hero */}
      <header className="border-b-2 border-ink px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Şeffaf Fiyatlandırma
          </div>
          <h1 className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.85] uppercase tracking-tighter mb-8">
            Basın Bülteni <br />Paketleri
          </h1>
          <p className="max-w-2xl mx-auto text-xl font-medium opacity-80">
            Gizli ücret yok, sürpriz yok. Sadece haberinizin ulaşmasını istediğiniz kitleye göre tasarlanmış saf dağıtım gücü.
          </p>
        </div>
      </header>

      {/* 3. Pricing Cards */}
      <section className="bg-paper py-24 px-6 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 border-2 border-ink bg-white">
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col">
              <div className="uppercase font-bold tracking-widest text-xs mb-2">Standart</div>
              <div className="font-display text-6xl mb-8">$499<span className="text-xl">/bülten</span></div>
              <p className="text-sm font-medium opacity-80 mb-8">Ulusal çapta ses getirmek ve arama motorlarında görünürlük kazanmak isteyen markalar için ideal başlangıç.</p>
              <ul className="space-y-4 mb-12 flex-grow font-semibold text-sm">
                <li className="flex gap-3"><span className="text-accent">✓</span> 400+ Haber Kaynağı</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Google Haberler (Google News) Kapsamı</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Standart Analitik ve Raporlama</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> 2 Görsel Ekleyebilme İmkanı</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> 48 Saat İçinde Yayın</li>
              </ul>
              <button className="w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all">Buradan Başlayın</button>
            </div>
            
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-ink text-paper flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-xs font-bold uppercase tracking-widest origin-bottom-left transform rotate-90 translate-x-10 translate-y-8">
                Önerilen
              </div>
              <div className="uppercase font-bold tracking-widest text-xs mb-2 text-accent">En Popüler</div>
              <div className="font-display text-6xl mb-8 text-white">$1,250<span className="text-xl opacity-50">/bülten</span></div>
              <p className="text-sm font-medium opacity-80 mb-8 text-paper/80">Sektöründe liderliği hedefleyen ve ana akım küresel finansal medyanın dikkatini çekmek isteyen şirketler için.</p>
              <ul className="space-y-4 mb-12 flex-grow font-semibold text-sm">
                <li className="flex gap-3"><span className="text-accent">✓</span> 1.200+ Haber Kaynağı</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Finansal Akış (Terminal) Dağıtımı</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Garantili AP/Reuters Senkronizasyonu</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Sınırsız Görsel ve Video Desteği</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Editoryal İnceleme ve Başlık Optimizasyonu</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Saniyesine Kadar Ambargo Ayarı</li>
              </ul>
              <button className="w-full bg-accent text-white py-4 font-bold uppercase tracking-tighter hover:bg-white hover:text-ink transition-all">Premium'a Geç</button>
            </div>
            
            <div className="p-10 flex flex-col">
              <div className="uppercase font-bold tracking-widest text-xs mb-2">Ajans</div>
              <div className="font-display text-6xl mb-8">$3,500<span className="text-xl">/aylık</span></div>
              <p className="text-sm font-medium opacity-80 mb-8">Birden fazla müşterisi olan PR ajansları ve sürekli iletişim faaliyeti yürüten kurumsal markalar için limitsiz güç.</p>
              <ul className="space-y-4 mb-12 flex-grow font-semibold text-sm">
                <li className="flex gap-3"><span className="text-accent">✓</span> Sınırsız Bülten Gönderimi</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Özel Müşteri Temsilcisi</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> White-label (Markasız) PDF Raporlama</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> Hedefli Gazeteci Listeleri (CRM)</li>
                <li className="flex gap-3"><span className="text-accent">✓</span> API ve Webhook Entegrasyonları</li>
              </ul>
              <button className="w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all">Satışla İletişime Geç</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Enterprise CTA */}
      <section className="border-b-2 border-ink bg-accent text-white px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-4xl uppercase mb-2">Özel Bir Çözüme mi İhtiyacınız Var?</h3>
            <p className="text-lg font-medium opacity-90 max-w-2xl">Yıllık anlaşmalar, entegre API erişimi veya 10'dan fazla marka yönetimi için kurumsal satış ekibimizle görüşün.</p>
          </div>
          <button className="whitespace-nowrap border-2 border-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-accent transition-colors">
            Özel Teklif Al
          </button>
        </div>
      </section>

      {/* 4. Compare Add-ons */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Ekstralar</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-12 leading-[0.95]">Ek Hizmetler</h2>
          <div className="border-2 border-ink overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-paper">
                <tr className="border-b-2 border-ink">
                  <th className="p-5 font-display uppercase text-sm tracking-widest">Hizmet</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest">Açıklama</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest text-right">Ücret</th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold">
                {[
                  ["Yapay Zeka Başlık Optimizasyonu", "Editörlerimiz ve AI araçlarımızla başlığınızı en yüksek açılma oranına göre yeniden yazarız.", "$49"],
                  ["Profesyonel Çeviri (Yerel)", "Bülteninizi hedef ülkenin ana diline gazetecilik standartlarında çeviririz.", "$150 / dil"],
                  ["Özel Gazeteci Pitch'i", "Haberi kendi özel ağımızdaki 50 tier-1 gazeteciye doğrudan ve birebir e-postalarız.", "$300"],
                  ["Multimedya Prodüksiyonu", "Bülteninize eklenecek profesyonel şirket veya ürün tanıtım videosunun hazırlanması.", "Teklif Alın"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i < 3 ? "border-b-2 border-ink" : ""}>
                    <td className="p-5">{row[0]}</td>
                    <td className="p-5 bg-paper/30 opacity-80">{row[1]}</td>
                    <td className="p-5 text-right font-display text-lg">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4.5. Trusted By */}
      <section className="border-b-2 border-ink bg-paper px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="text-xs font-bold uppercase tracking-widest">Bu Paketlerle<br/>Büyüyen Markalar</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {["★ VELOS LABS", "★ NORTHWIND", "★ HYPERION INC.", "★ LUMINA", "★ NEXUS"].map((p) => (
              <div key={p} className="font-display text-2xl uppercase tracking-tight opacity-70 hover:opacity-100 hover:text-accent transition-all">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.6. Detailed Comparison */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Tüm Özellikler</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-12 leading-[0.95]">Detaylı Karşılaştırma</h2>
          <div className="border-2 border-ink overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-paper">
                <tr className="border-b-2 border-ink">
                  <th className="p-5 font-display uppercase text-sm tracking-widest">Özellik</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest text-center border-l-2 border-ink">Standart</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest text-center bg-accent text-white border-l-2 border-ink">En Popüler</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest text-center border-l-2 border-ink">Ajans</th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold">
                {[
                  ["Yayınlanma Ağı", "400+ Ulusal Site", "1.200+ Küresel Site", "Limitsiz Ağ Erişimi"],
                  ["Terminal Dağıtımı (Bloomberg vs.)", "—", "✓", "✓"],
                  ["Medya Eki (Görsel/Video)", "2 Adet", "Sınırsız", "Sınırsız"],
                  ["Google Haberler (Google News)", "✓", "✓", "✓"],
                  ["Özel Raporlama (PDF)", "Standart Rapor", "Detaylı Analitik", "Markasız (White-label)"],
                  ["Müşteri Temsilcisi", "E-posta Destek", "Öncelikli Destek", "Özel Atanmış Temsilci"],
                  ["Ambargo Süresi Ayarlama", "—", "✓", "✓"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i < 6 ? "border-b-2 border-ink" : ""}>
                    <td className="p-5">{row[0]}</td>
                    <td className="p-5 text-center border-l-2 border-ink">{row[1]}</td>
                    <td className="p-5 text-center border-l-2 border-ink bg-paper/50">{row[2]}</td>
                    <td className="p-5 text-center border-l-2 border-ink">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4.65. Timeline / Process */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Süreç</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-16 leading-[0.95]">Paketi Aldıktan Sonra Ne Olacak?</h2>
          <div className="grid md:grid-cols-4 border-2 border-ink">
            {[
              { s: "1. Taslak Gönderimi", d: "Sisteme giriş yapıp bülten metninizi ve görsellerinizi güvenli panele yüklersiniz." },
              { s: "2. Editoryal Onay", d: "Uluslararası standartlara uygunluk açısından editörlerimiz içeriği hızla inceler." },
              { s: "3. Dağıtım & Telgraf", d: "Belirlediğiniz ambargo saatinde haberiniz binlerce gazetecinin terminaline düşer." },
              { s: "4. Kapsamlı Raporlama", d: "Haberin yayınlandığı siteler, okunma oranları ve etkileşimler dashboard'a yansır." },
            ].map((step, i) => (
              <div key={step.s} className={`p-8 ${i < 3 ? "border-b-2 md:border-b-0 md:border-r-2" : ""} border-ink group hover:bg-paper transition-colors`}>
                <div className="font-display text-5xl text-accent mb-6">0{i+1}</div>
                <h3 className="font-display text-2xl uppercase mb-3 leading-tight">{step.s}</h3>
                <p className="text-sm font-medium opacity-80">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.68. ROI / Testimonial */}
      <section className="border-b-2 border-ink grid lg:grid-cols-2">
        <div className="p-12 lg:p-20 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-white">
          <div className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">Yatırım Getirisi (ROI)</div>
          <p className="text-3xl lg:text-4xl font-semibold leading-tight text-pretty mb-8">
            "Sadece tek bir bülten dağıtımıyla elde ettiğimiz organik görünürlüğü, reklam kampanyalarıyla sağlamak için Premium paketin yaklaşık 15 katını harcamamız gerekirdi."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-ink/10 border-2 border-ink" />
            <div>
              <div className="font-bold uppercase">Elena Rodriguez</div>
              <div className="text-sm opacity-60 uppercase tracking-widest">CMO, Lumina Tech</div>
            </div>
          </div>
        </div>
        <div className="p-12 lg:p-20 bg-accent text-white flex flex-col justify-center">
           <h3 className="font-display text-7xl lg:text-8xl leading-tight uppercase mb-6">Ort. 48 Saat</h3>
           <p className="text-2xl font-medium opacity-90">Bülteninizin Google News ve Tier-1 teknoloji bloglarında ana sayfaya düşme süresi.</p>
        </div>
      </section>

      {/* 4.7. FAQ */}
      <section id="faq-pricing" className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3">Paketlerle İlgili SSS</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Aklınızdaki Sorular</h2>
          </div>
          <div className="border-t-2 border-ink bg-white px-6">
            {[
              { q: "Ödeme seçenekleri nelerdir?", a: "Kredi kartı ile güvenli ödeme veya kurumsal havale/EFT seçeneklerini kullanabilirsiniz. Yıllık alımlarda fatura kesimi otomatik yapılır." },
              { q: "Paketi sonradan yükseltebilir miyim?", a: "Evet, Standart paketle başlayıp bülten gönderiminden önce veya hemen sonra aradaki farkı ödeyerek Premium'a geçiş yapabilirsiniz." },
              { q: "Ajans paketi için taahhüt gerekiyor mu?", a: "Ajans paketi aylık faturalandırılır ve dilediğiniz zaman iptal edebilirsiniz. Herhangi bir uzun vadeli taahhüt gerektirmez." },
              { q: "Bültenim reddedilirse param iade edilir mi?", a: "Eğer bülteniniz editoryal kurallarımız veya ajans kuralları gereği tamamen reddedilirse ödemeniz %100 iade edilir." },
            ].map((f) => (
              <details key={f.q} className="group border-b-2 border-ink py-6 last:border-b-0">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display text-2xl uppercase tracking-tight pr-6">{f.q}</span>
                  <span className="font-display text-3xl text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-base font-medium opacity-80 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
