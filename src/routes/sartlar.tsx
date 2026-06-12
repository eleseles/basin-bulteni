import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sartlar")({
  head: () => ({
    meta: [
      { title: "Kullanım Şartları | Breles" },
      { name: "description", content: "Breles Basın Bülteni hizmetlerinin kullanım şartları ve koşulları." },
    ],
  }),
  component: Sartlar,
});

function Sartlar() {
  return (
    <div className="bg-white">
      <header className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Yasal Bilgilendirme
          </div>
          <h1 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-6">
            Kullanım Şartları
          </h1>
          <p className="text-xl font-medium opacity-80">
            Son güncelleme tarihi: 12 Haziran 2026
          </p>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-accent font-medium opacity-90">
          <p>
            Bu Kullanım Şartları ("Şartlar"), Breles platformuna ("Biz", "Bize" veya "Şirket") erişiminiz ve kullanımınız için geçerlidir. Platformumuzu kullanarak, bu Şartları kabul etmiş sayılırsınız. Lütfen dikkatlice okuyunuz.
          </p>

          <h2>1. Hizmetin Kapsamı</h2>
          <p>
            Breles, onaylanmış basın bültenlerini küresel haber ağlarına, ajanslara ve medya kuruluşlarına ulaştıran bir dağıtım motorudur. Gönderilen içeriklerin onaylanması tamamen editöryal ekibimizin inisiyatifindedir. Yanıltıcı, yasa dışı, spam niteliğindeki veya hakaret içeren bültenler reddedilir.
          </p>

          <h2>2. Kullanıcı Yükümlülükleri</h2>
          <p>
            Platform üzerinden yüklediğiniz içeriklerin tamamından yasal olarak siz sorumlusunuz. İçeriklerin üçüncü taraf telif haklarını, ticari markaları veya kişisel gizlilik haklarını ihlal etmediğini garanti edersiniz.
          </p>

          <h2>3. Ödeme ve İadeler</h2>
          <p>
            Ödemeler bülten dağıtımı öncesinde tahsil edilir. Dağıtım işlemi başladıktan sonra iade yapılamaz. Ancak, bülteniniz editoryal kurallarımız gereği reddedilirse, ödemeniz 3-5 iş günü içinde kesintisiz olarak iade edilir.
          </p>

          <h2>4. Dağıtım Garantileri</h2>
          <p>
            Hedeflenen medya kuruluşları listesi zaman zaman güncellenebilir. Belirtilen yayın sayıları yaklaşık olup, üçüncü taraf ajansların (AP, Reuters vb.) teknik veya editoryal politikaları nedeniyle nadiren sapmalar yaşanabilir. Belirli bir sitede (Google News hariç, paket kapsamındaysa) yayımlanma garantisi mutlak değildir.
          </p>

          <h2>5. Fikri Mülkiyet</h2>
          <p>
            Platformumuzun tasarımı, kodu ve markası Breles'e aittir. Yüklediğiniz bülten metinlerinin ve görsellerinin lisansları size ait kalır, ancak bunları dağıtmak ve pazarlama materyallerimizde (Örn: Örnek Olaylar) kullanmak için bize dünya çapında lisans vermiş olursunuz.
          </p>
        </div>
      </section>
    </div>
  );
}
