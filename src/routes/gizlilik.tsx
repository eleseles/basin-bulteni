import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gizlilik")({
  head: () => ({
    meta: [
      { title: "Gizlilik Politikası | Breles" },
      { name: "description", content: "Breles platformu gizlilik politikası ve kişisel verilerin korunması beyanı." },
    ],
  }),
  component: Gizlilik,
});

function Gizlilik() {
  return (
    <div className="bg-white">
      <header className="border-b-2 border-ink px-6 py-24 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            Yasal Bilgilendirme
          </div>
          <h1 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9] tracking-tighter mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-xl font-medium opacity-80">
            Son güncelleme tarihi: 12 Haziran 2026
          </p>
        </div>
      </header>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-a:text-accent font-medium opacity-90">
          <p>
            Breles olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. Bu gizlilik politikası, sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h2>1. Toplanan Veriler</h2>
          <p>
            Hizmetlerimizi kullanırken şu verileri toplayabiliriz: Adınız, e-posta adresiniz, telefon numaranız, şirket bilgileriniz, fatura bilgileriniz ve platformumuzdaki kullanım loglarınız (IP adresi, tarayıcı tipi vb.).
          </p>

          <h2>2. Verilerin Kullanımı</h2>
          <p>
            Topladığımız veriler, hizmetlerimizi sağlamak, faturalandırma yapmak, basın bülteni gönderim süreçlerini koordine etmek ve müşteri desteği sunmak amacıyla kullanılır. İletişim bilgileriniz izniniz olmadan pazarlama listelerine eklenmez.
          </p>

          <h2>3. Verilerin Paylaşımı</h2>
          <p>
            Kişisel verilerinizi asla üçüncü şahıslara satmayız. Ancak, basın bülteniniz dağıtılırken bülten içerisinde yer alan iletişim bilgileri (Medya İletişim Sorumlusu vb.) gazetecilerle ve açık ağlarla paylaşılmak zorundadır. Bu, basın bülteni dağıtımının temel doğasıdır.
          </p>

          <h2>4. Çerezler (Cookies)</h2>
          <p>
            Platformumuzun düzgün çalışması, oturum yönetimi ve temel analitik faaliyetler (Google Analytics vb.) için çerezler kullanmaktayız. Tarayıcınızın ayarlarından çerezleri dilediğiniz zaman reddedebilirsiniz, ancak bu durum platformun bazı özelliklerini kullanmanızı engelleyebilir.
          </p>

          <h2>5. Güvenlik</h2>
          <p>
            Verileriniz, endüstri standartlarında SSL şifreleme ve güvenli sunucular aracılığıyla korunmaktadır. Finansal ödeme bilgileriniz (kredi kartı verileri) sunucularımızda saklanmaz, doğrudan güvenli ödeme sağlayıcılarımıza (Stripe/Iyzico) iletilir.
          </p>
        </div>
      </section>
    </div>
  );
}
