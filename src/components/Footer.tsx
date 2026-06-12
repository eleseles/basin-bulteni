import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-paper border-t-2 border-ink">
      {/* Huge CTA Section */}
      <div className="py-24 px-6 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.9] uppercase mb-12">
            Mirasınızı<br />yazdırmaya hazır mısınız?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/basin-bulteni-paketleri" className="bg-accent text-white px-12 py-6 text-xl font-display uppercase tracking-widest hover:scale-105 transition-transform inline-block">
              Hemen Bülten Gönder
            </Link>
            <Link to="/dagitim-agi" className="border-2 border-white/20 px-12 py-6 text-xl font-display uppercase tracking-widest hover:border-white transition-colors inline-block">
              Ağ Haritasını Görüntüle
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="font-display text-5xl tracking-tighter uppercase mb-6 block hover:text-accent transition-colors">
              Breles
            </Link>
            <p className="font-medium opacity-60 max-w-sm mb-8 text-sm leading-relaxed">
              Dünyanın en prestijli haber merkezlerine doğrudan erişim sağlayan, veri odaklı basın bülteni dağıtım motoru.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors font-bold text-sm">X</a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors font-bold text-sm">IN</a>
            </div>
          </div>
          
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Platform</div>
            <ul className="space-y-4 font-bold text-sm opacity-80">
              <li><a href="/#distribution" className="hover:text-white hover:opacity-100 transition-colors">Nasıl Çalışır?</a></li>
              <li><Link to="/basin-bulteni-paketleri" className="hover:text-white hover:opacity-100 transition-colors">Fiyatlandırma</Link></li>
              <li><Link to="/dagitim-agi" className="hover:text-white hover:opacity-100 transition-colors">Dağıtım Ağı</Link></li>
              <li><Link to="/basari-hikayeleri" className="hover:text-white hover:opacity-100 transition-colors">Başarı Hikayeleri</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Şirket</div>
            <ul className="space-y-4 font-bold text-sm opacity-80">
              <li><Link to="/hakkimizda" className="hover:text-white hover:opacity-100 transition-colors">Hakkımızda</Link></li>
              <li><Link to="/iletisim" className="hover:text-white hover:opacity-100 transition-colors">İletişim</Link></li>
              <li><Link to="/sartlar" className="hover:text-white hover:opacity-100 transition-colors">Kullanım Şartları</Link></li>
              <li><Link to="/gizlilik" className="hover:text-white hover:opacity-100 transition-colors">Gizlilik Politikası</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Kaynaklar</div>
            <ul className="space-y-4 font-bold text-sm opacity-80">
              <li><Link to="/blog" className="hover:text-white hover:opacity-100 transition-colors">Blog & İçgörüler</Link></li>
              <li><a href="/#faq" className="hover:text-white hover:opacity-100 transition-colors">Sıkça Sorulan Sorular</a></li>
            </ul>
            <div className="mt-8 p-4 border border-white/10 bg-white/5">
              <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Destek</div>
              <a href="mailto:hello@basin-bulteni.com" className="font-bold hover:text-accent transition-colors block text-sm">hello@basin-bulteni.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest opacity-40">
          <div>&copy; 2026 Breles Dağıtım A.Ş. Tüm hakları saklıdır.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Sistemler Aktif
          </div>
        </div>
      </div>
    </footer>
  );
}
