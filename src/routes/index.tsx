import { createFileRoute, Link } from "@tanstack/react-router";
import networkMap from "@/assets/network-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Basın Bülteni Dağıtımı Servisi | Breles" },
      { name: "description", content: "Breles, basın bülteninizi 4.500'den fazla premium yayın organı, haber ajansı ve birinci sınıf editör masasına dağıtır." },
      { property: "og:title", content: "Online Basın Bülteni Dağıtımı Servisi | Breles" },
      { property: "og:description", content: "Duyurularınızı küresel manşetlere dönüştürün." },
      { property: "og:url", content: "https://basin-bulteni.com" },
    ],
    links: [
      { rel: "canonical", href: "https://basin-bulteni.com" },
    ],
  }),
  component: Index,
});

const outlets = ["Bloomberg", "The Verge", "TechCrunch", "Reuters", "Forbes", "Wired", "AP News", "WSJ"];

function Index() {
  return (
    <>
      {/* 2. Hero */}
      <header className="relative border-b-2 border-ink">
        <div className="grid lg:grid-cols-[1fr_440px]">
          <div className="p-6 lg:p-12 lg:border-r-2 border-ink flex flex-col justify-center">
            <div className="inline-block self-start bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 animate-ink">
              Doğrudan Dağıtım Motoru
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.85] uppercase tracking-tighter animate-ink [animation-delay:100ms]">
              Online Basın <br />Bülteni Dağıtımı <br />Servisi
            </h1>
            <p className="mt-8 max-w-xl text-xl font-medium leading-tight text-pretty animate-ink [animation-delay:200ms]">
              Breles, şirket duyurularınızı küresel manşetlere dönüştürür. Sadece e-posta göndermiyoruz — 4.500'den fazla premium yayında dikkatleri üzerinize çekiyoruz.
            </p>
          </div>
          <div className="bg-ink text-paper p-6 lg:p-12 flex flex-col justify-between gap-12 overflow-hidden animate-ink [animation-delay:300ms]">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest opacity-50">Canlı Dağıtım Haritası</div>
              <img
                src={networkMap}
                alt="Küresel basın dağıtım ağı"
                width={800}
                height={800}
                className="w-full aspect-square object-cover outline-1 outline-white/20"
              />
            </div>
            <div className="text-5xl font-display uppercase leading-none">
              4.8M
              <span className="block text-xl font-sans tracking-normal opacity-50 mt-2">Günlük Görüntülenme</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Outlets marquee */}
      <section className="border-b-2 border-ink py-10 overflow-hidden bg-white">
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...outlets, ...outlets].map((o, i) => (
            <span key={i} className="font-display text-4xl opacity-20 uppercase px-12">{o}</span>
          ))}
        </div>
      </section>

      {/* 4. Stats */}
      <section className="border-b-2 border-ink grid grid-cols-2 md:grid-cols-4 bg-paper">
        {[
          { n: "4,500+", l: "Premium Yayın Organı" },
          { n: "92%", l: "Yayınlanma Oranı" },
          { n: "24s", l: "Ort. Dağıtım Süresi" },
          { n: "180", l: "Ulaşılan Ülke" },
        ].map((s, i) => (
          <div
            key={s.l}
            className={`p-8 lg:p-10 ${i < 3 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} border-ink`}
          >
            <div className="font-display text-5xl lg:text-6xl leading-none">{s.n}</div>
            <div className="mt-3 text-xs font-bold uppercase tracking-widest opacity-70">{s.l}</div>
          </div>
        ))}
      </section>

      {/* 5. How it works */}
      <section id="distribution" className="grid md:grid-cols-3 border-b-2 border-ink">
        {[
          { n: "01", t: "Oluştur", d: "Bülteninizi yükleyin. Yapay zeka destekli editör masamız, başlığınızın birinci sınıf gazeteciler için yeterince ilgi çekici olmasını sağlar." },
          { n: "02", t: "Hedefle", d: "Sektörünüzü seçin. Haberlerinizi yüksek otoriteli ajans kanalları ve doğrudan editör gelen kutuları aracılığıyla yönlendiriyoruz." },
          { n: "03", t: "Dağıt", d: "Yayınlanmaları izleyin. Gerçek zamanlı olarak oluşturulan her yayın, görüntülenme ve backlink'in canlı takibi." },
        ].map((s, i) => (
          <div
            key={s.n}
            className={`p-12 border-b-2 md:border-b-0 ${i < 2 ? "md:border-r-2" : ""} border-ink group hover:bg-ink hover:text-paper transition-colors duration-300`}
          >
            <div className="font-display text-8xl leading-none mb-8 text-accent">{s.n}</div>
            <h3 className="text-3xl font-display uppercase mb-4">{s.t}</h3>
            <p className="font-medium opacity-80">{s.d}</p>
          </div>
        ))}
      </section>

      {/* 6. Features */}
      <section className="border-b-2 border-ink px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-6xl lg:text-7xl uppercase max-w-2xl leading-[0.9]">Ciddi haber merkezleri için tasarlandı</h2>
            <p className="text-lg font-medium max-w-md opacity-80">Bir bülten göndermek, erişimini izlemek ve yönetim kuruluna ROI'yi kanıtlamak için ihtiyacınız olan her araç.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-2 border-ink">
            {[
              { t: "Yapay Zeka Başlık Stüdyosu", d: "İlk okumada editoryal filtrelerden geçen AP tarzı başlıklar oluşturun." },
              { t: "Ambargo Planlayıcı", d: "Küresel ambargoları zaman dilimleri arasında saniyesine kadar koordine edin." },
              { t: "Multimedya Yayını", d: "Her gönderiye yayına hazır video, yüksek çözünürlüklü görseller ve PDF'ler ekleyin." },
              { t: "Gazeteci CRM'i", d: "Alan, coğrafya ve etkileşime göre bölümlere ayrılmış 47.000+ doğrulanmış muhabir." },
              { t: "Canlı Kapsam Akışı", d: "Haber akışındaki yayınlanmaları gerçek zamanlı olarak izleyin." },
              { t: "Duygu Analiz Motoru", d: "Bülten sonrası tonu, ses payını ve rakip bahsetmelerini takip edin." },
            ].map((f, i) => (
              <div
                key={f.t}
                className={`p-8 border-ink ${i % 3 !== 2 ? "lg:border-r-2" : ""} ${i % 2 === 0 ? "md:border-r-2 lg:border-r-2" : "md:border-r-0"} ${i < 4 ? "border-b-2" : i < 5 ? "md:border-b-2 lg:border-b-0" : ""} hover:bg-accent hover:text-white transition-colors group`}
              >
                <div className="font-display text-xs uppercase tracking-widest opacity-60 mb-6">0{i + 1}</div>
                <h3 className="font-display text-3xl uppercase mb-3 leading-tight">{f.t}</h3>
                <p className="text-sm font-medium opacity-80 group-hover:opacity-100">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Press Day Timeline */}
      <section className="border-b-2 border-ink bg-paper px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Basın Günü Zaman Çizelgesi</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-16 leading-[0.95]">Bir lansmanın anatomisi</h2>
          <ol className="border-l-2 border-ink ml-2">
            {[
              { t: "T-72s", h: "Editoryal inceleme", d: "Masamız taslağınızı keskinleştirir ve başlıkları hedef alanlarla hizalar." },
              { t: "T-24s", h: "Ambargo brifingleri", d: "Derinlemesine kapsam için ambargo altında birinci sınıf muhabirlere önceden sunulur." },
              { t: "T-0", h: "Bülten gönderimi", d: "4.500'den fazla yayın ve finansal terminal üzerinden eşzamanlı yayın." },
              { t: "T+1s", h: "İlk yerleştirmeler", d: "Kapsam akışı bir saat içinde ilk 100+ yayınla aydınlanır." },
              { t: "T+24s", h: "Erişim raporu", d: "Görüntülenmeler, duygu analizi ve ROI ile yönetim kuruluna hazır bir PDF gelen kutunuza düşer." },
            ].map((step) => (
              <li key={step.t} className="relative pl-10 pb-12 last:pb-0">
                <span className="absolute -left-[11px] top-1 w-5 h-5 bg-accent border-2 border-ink" />
                <div className="font-display text-2xl text-accent mb-1">{step.t}</div>
                <div className="font-display text-3xl uppercase mb-2">{step.h}</div>
                <p className="max-w-xl text-base font-medium opacity-80">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8. Compare */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-3">Karşılaştırma</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-12 leading-[0.95]">Breles vs. geleneksel ajanslar</h2>
          <div className="border-2 border-ink overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-paper">
                <tr className="border-b-2 border-ink">
                  <th className="p-5 font-display uppercase text-sm tracking-widest">Özellik</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest bg-accent text-white">Breles</th>
                  <th className="p-5 font-display uppercase text-sm tracking-widest opacity-60">Geleneksel Ajans</th>
                </tr>
              </thead>
              <tbody className="text-sm font-semibold">
                {[
                  ["Yayınlanma süresi", "60 dk altında", "24–48 saat"],
                  ["Doğrudan gazeteci hedefleme", "47.000 doğrulanmış", "Liste kiralama"],
                  ["Canlı yerleştirme takibi", "Gerçek zamanlı", "Haftalık PDF"],
                  ["Duygu analizi", "Dahil", "Eklenti"],
                  ["Ambargo hassasiyeti", "Saniye bazında", "Aynı gün"],
                  ["Fiyatlandırma şeffaflığı", "Sabit paketler", "Sadece teklif"],
                ].map((row, i) => (
                  <tr key={row[0]} className={i < 5 ? "border-b-2 border-ink" : ""}>
                    <td className="p-5">{row[0]}</td>
                    <td className="p-5 bg-paper/50">— {row[1]}</td>
                    <td className="p-5 opacity-60">— {row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Industries */}
      <section className="border-b-2 border-ink bg-paper px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest mb-4">Hizmet Verdiğimiz Sektörler</div>
          <h2 className="font-display text-5xl lg:text-6xl uppercase mb-12 max-w-3xl leading-[0.95]">
            Uzman masalar. <span className="text-accent">Uzmanlaşmış etki.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Fintech", "Kripto & Web3", "SaaS", "Biyoteknoloji", "İklim", "Tüketici", "Donanım", "Yapay Zeka / ML", "Sağlık", "Gayrimenkul", "Oyun", "Medya & Eğlence"].map((tag) => (
              <span key={tag} className="border-2 border-ink px-5 py-3 font-bold uppercase tracking-widest text-sm hover:bg-ink hover:text-paper transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Case Studies */}
      <section className="border-b-2 border-ink px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-6xl lg:text-7xl uppercase">Ön Sayfalar</h2>
            <Link to="/basari-hikayeleri" className="hidden md:inline-block text-sm font-bold uppercase tracking-widest hover:text-accent">Tüm başarı hikayeleri →</Link>
          </div>
          <div className="grid md:grid-cols-3 border-2 border-ink">
            {[
              { tag: "Seri B", co: "Velos Labs", h: "12 saatte gizlilikten 3,4 milyon okuyucuya", m: "847 yayın" },
              { tag: "Ürün Lansmanı", co: "Northwind", h: "Aynı sabah Bloomberg'de ana haber", m: "1.204 yayın" },
              { tag: "Halka Arz Başvurusu", co: "Hyperion Inc.", h: "62 pazarda eşzamanlı yayın", m: "12M gösterim" },
            ].map((c, i) => (
              <article
                key={c.co}
                className={`p-8 lg:p-10 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0" : ""} border-ink group hover:bg-ink hover:text-paper transition-colors`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest mb-6 opacity-70">
                  <span>{c.tag}</span>
                  <span>{c.co}</span>
                </div>
                <h3 className="font-display text-3xl uppercase leading-tight mb-8">{c.h}</h3>
                <div className="flex items-center justify-between pt-6 border-t-2 border-ink group-hover:border-paper/20">
                  <span className="font-display text-2xl text-accent">{c.m}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Oku →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonial */}
      <section className="border-b-2 border-ink grid lg:grid-cols-2">
        <div className="p-12 bg-accent text-white">
          <div className="font-display text-7xl lg:text-8xl leading-tight uppercase">"Ön sayfaya çıktılar."</div>
        </div>
        <div className="p-12 flex flex-col justify-center">
          <p className="text-2xl lg:text-3xl font-semibold leading-tight text-pretty mb-8">
            "Breles bir haber ajansı değil, bir megafon. Son fonlama duyurumuz gönderildikten sonraki 12 saat içinde 3,4 milyon tekil okuyucuya ulaştı."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-ink/10 border-2 border-ink" />
            <div>
              <div className="font-bold uppercase">Marcus Thorne</div>
              <div className="text-sm opacity-60 uppercase tracking-widest">İletişim Başkanı, Velos Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Integrations */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-end mb-12">
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Sistemlerinize entegre olur</h2>
            <p className="text-lg font-medium opacity-80 max-w-xl">İletişim ekibinizin halihazırda kullandığı araçlardan doğrudan bülten gönderin. İki yönlü senkronizasyon, webhook'lar ve tam bir REST API.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-2 border-ink">
            {["Slack", "Notion", "HubSpot", "Salesforce", "Zapier", "Webflow", "Linear", "Airtable", "Google Drive", "Asana", "Figma", "GitHub"].map((tool, i) => (
              <div
                key={tool}
                className={`aspect-square flex items-center justify-center border-ink ${(i + 1) % 6 !== 0 ? "lg:border-r-2" : ""} ${(i + 1) % 4 !== 0 ? "md:border-r-2" : ""} ${i % 2 === 0 ? "border-r-2" : ""} ${i < 6 ? "border-b-2 lg:border-b-2" : ""} ${i < 8 ? "md:border-b-2" : ""} font-display text-xl uppercase tracking-tighter hover:bg-accent hover:text-white transition-colors`}
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Pricing */}
      <section id="pricing" className="bg-paper py-24 px-6 border-b-2 border-ink">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-7xl uppercase">Net Fiyatlar</h2>
            <p className="text-xl font-medium mt-2">Gizli ücret yok. Sadece saf dağıtım gücü.</p>
          </div>
          <div className="grid lg:grid-cols-3 border-2 border-ink bg-white">
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink flex flex-col">
              <div className="uppercase font-bold tracking-widest text-xs mb-2">Standart</div>
              <div className="font-display text-6xl mb-8">$499<span className="text-xl">/bülten</span></div>
              <ul className="space-y-3 mb-12 flex-grow font-semibold text-sm">
                <li>— 400+ Haber Kaynağı</li>
                <li>— Google Haberler Kapsamı</li>
                <li>— Standart Analitik</li>
              </ul>
              <button className="w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all">Buradan Başlayın</button>
            </div>
            <div className="p-10 border-b-2 lg:border-b-0 lg:border-r-2 border-ink bg-ink text-paper flex flex-col">
              <div className="uppercase font-bold tracking-widest text-xs mb-2 text-accent">En Popüler</div>
              <div className="font-display text-6xl mb-8 text-white">$1,250<span className="text-xl opacity-50">/bülten</span></div>
              <ul className="space-y-3 mb-12 flex-grow font-semibold text-sm">
                <li>— 1.200+ Haber Kaynağı</li>
                <li>— Finansal Akış Dağıtımı</li>
                <li>— Garantili AP/Reuters Senkronizasyonu</li>
                <li>— Gelişmiş Multimedya Desteği</li>
              </ul>
              <button className="w-full bg-accent text-white py-4 font-bold uppercase tracking-tighter hover:bg-white hover:text-ink transition-all">Premium'a Geç</button>
            </div>
            <div className="p-10 flex flex-col">
              <div className="uppercase font-bold tracking-widest text-xs mb-2">Ajans</div>
              <div className="font-display text-6xl mb-8">$3,500<span className="text-xl">/aylık</span></div>
              <ul className="space-y-3 mb-12 flex-grow font-semibold text-sm">
                <li>— Sınırsız Bülten</li>
                <li>— Özel Müşteri Temsilcisi</li>
                <li>— White-label Raporlama</li>
              </ul>
              <button className="w-full border-2 border-ink py-4 font-bold uppercase tracking-tighter hover:bg-ink hover:text-white transition-all">Satışla İletişime Geç</button>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Team */}
      <section className="border-b-2 border-ink bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Masa</h2>
            <p className="text-lg font-medium opacity-80 max-w-md">Eski haber merkezi editörleri ve ajans mühendisleri, her zaman istediğimiz basın altyapısını inşa ediyor.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink">
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

      {/* 15. As seen in */}
      <section className="border-b-2 border-ink bg-paper px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <div className="text-xs font-bold uppercase tracking-widest">Görüldüğü Yerler</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            {["★ FAST CO.", "★ ADWEEK", "★ PRWEEK", "★ WIRED", "★ THE DRUM"].map((p) => (
              <div key={p} className="font-display text-2xl uppercase tracking-tight opacity-70 hover:opacity-100 hover:text-accent transition-all">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. FAQ */}
      <section id="faq" className="border-b-2 border-ink px-6 py-24 bg-white">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[300px_1fr] gap-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest mb-3">SSS</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">Brifing Odası</h2>
          </div>
          <div className="border-t-2 border-ink">
            {[
              { q: "Bir bülten ne kadar hızlı yayına girer?", a: "Bültenlerin çoğu onaylandıktan sonra 60 dakika içinde ajansa düşer. Ambargolu bültenler saniyesine kadar planlanır." },
              { q: "Yayınlanmayı garanti ediyor musunuz?", a: "Premium ve Ajans paketleri AP, Reuters ve Bloomberg terminallerinde garantili sendikasyon içerir." },
              { q: "Bölgeye göre hedefleme yapabilir miyim?", a: "Evet — ülkeye, şehre, dile, alana veya bireysel gazeteciye göre dilimleyin. 180 ülkeyi destekliyoruz." },
              { q: "Nasıl bir raporlama alıyorum?", a: "Yerleştirmeler, gösterimler, geri bağlantılar, duygu durumu ve tek tıkla yönetim kuruluna hazır PDF içeren canlı bir gösterge paneli." },
              { q: "Bülteni siz mi yazıyorsunuz?", a: "Editoryal masamız metninizi ek bir hizmet olarak tasarlayabilir, keskinleştirebilir veya inceleyebilir, varsayılan olarak AP tarzında." },
            ].map((f) => (
              <details key={f.q} className="group border-b-2 border-ink py-6">
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

      {/* 17. Resources / Blog */}
      <section className="border-b-2 border-ink bg-paper px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-5xl lg:text-6xl uppercase">Masadan Notlar</h2>
            <Link to="/blog" className="hidden md:inline-block text-sm font-bold uppercase tracking-widest hover:text-accent">Tüm makaleler →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-0 border-2 border-ink bg-white">
            {[
              { tag: "Rehber", date: "10 Haz", h: "Gazetecilerin gerçekten açtığı bir bülten yazmak", slug: "mukemmel-basin-bulteni-nasil-yazilir" },
              { tag: "Saha Notları", date: "28 May", h: "Ambargonun içi: Bir Seri B hikayesi nasıl patlar", slug: "ambargo-stratejisiyle-hikaye-patlatmak" },
              { tag: "Veri", date: "14 May", h: "Yayınlanma oranınızı üçe katlayan 7 fiil", slug: "yayinlanma-oranini-artiran-fiiller" },
            ].map((a, i) => (
              <Link
                to="/blog/$slug"
                params={{ slug: a.slug }}
                key={a.h}
                className={`p-8 ${i < 2 ? "md:border-r-2 border-b-2 md:border-b-0" : ""} border-ink hover:bg-ink hover:text-paper transition-colors group flex flex-col`}
              >
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest opacity-70 mb-8">
                  <span>{a.tag}</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="font-display text-3xl uppercase leading-tight mb-12">{a.h}</h3>
                <span className="text-xs font-bold uppercase tracking-widest mt-auto">Makaleyi oku →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 18. Newsletter */}
      <section className="border-b-2 border-ink bg-ink text-paper px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Breles Brifingi</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.95]">
              PR rehberiniz,<br />her hafta gelen kutunuzda.
            </h2>
          </div>
          <form className="flex flex-col sm:flex-row gap-0 border-2 border-paper">
            <input
              type="email"
              required
              placeholder="siz@sirketiniz.com"
              className="flex-1 bg-transparent px-6 py-5 placeholder:text-paper/40 focus:outline-none font-medium"
            />
            <button type="submit" className="bg-accent text-white px-8 py-5 font-bold uppercase tracking-widest text-sm hover:bg-paper hover:text-ink transition-colors">
              Abone Ol
            </button>
          </form>
        </div>
      </section>

    </>
  );
}
